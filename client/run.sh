LOG_FILE="docker_run.log"

install_docker() {
    sudo apt-get update || { echo "[ERROR] Failed to update package list"; exit 1; }
    sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common || { echo "[ERROR] Failed to install dependencies"; exit 1; }
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - || { echo "[ERROR] Failed to add Docker's GPG key"; exit 1; }
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" || { echo "[ERROR] Failed to add Docker repository"; exit 1; }
    sudo apt-get update || { echo "[ERROR] Failed to update package list after adding repository"; exit 1; }
    sudo apt-get install -y docker-ce || { echo "[ERROR] Failed to install Docker"; exit 1; }
    sudo systemctl start docker || { echo "[ERROR] Failed to start Docker"; exit 1; }
    sudo systemctl enable docker || { echo "[ERROR] Failed to enable Docker on boot"; exit 1; }
}

if ! command -v docker &> /dev/null; then
    install_docker
else
    echo "[INFO] Docker is already installed."
fi

echo "[INFO] Extracting Docker image..."
xz -dc ecoads.tar.xz | docker load || { echo "[ERROR] Failed to load Docker image"; exit 1; }

echo "[INFO] Checking for running containers on port 5173..."
EXISTING_CONTAINER=$(docker ps -q --filter "publish=5173")

if [ -n "$EXISTING_CONTAINER" ]; then
    echo "[WARNING] A container is already using port 5173. Stopping it..."
    docker stop "$EXISTING_CONTAINER" || { echo "[ERROR] Failed to stop existing container"; exit 1; }
fi

echo "[INFO] Starting Docker container..
