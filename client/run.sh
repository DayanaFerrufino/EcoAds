LOG_FILE="docker_run.log"

echo "[INFO] Extracting Docker image..."
xz -dc ecoads.tar.xz | docker load || { echo "[ERROR] Failed to load Docker image"; exit 1; }

echo "[INFO] Checking for running containers on port 5173..."
EXISTING_CONTAINER=$(docker ps -q --filter "publish=5173")

if [ -n "$EXISTING_CONTAINER" ]; then
echo "[WARNING] A container is already using port 5173. Stopping it..."
docker stop "$EXISTING_CONTAINER" || { echo "[ERROR] Failed to stop existing container"; exit 1; }
fi

echo "[INFO] Starting Docker container..."
docker run -p 5173:5173 ecoads | tee "$LOG_FILE"

echo "[INFO] Docker container stopped."
