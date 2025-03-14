import { Container } from 'react-bootstrap'; // Assuming you're using Bootstrap
import './OverviewPage.css'; // Make sure to link your custom CSS file
import OverviewCard from '../components/portal-components/overview-cards';

function OverviewPage() {
  return (
    <section className='overview-page-container'>
        <Container className='overview-hero-section'>
            <div className='hero-content'>
                <h1>Welcome Matthew!</h1>
                <p>
                    Maximize ad performance with AI-powered targeting that reaches the right customers at the perfect time.
                </p>
                <a href="#" className="create-ad">Create New Ad</a>
            </div>
        </Container>
        <Container className='OC-mul-card-container'>
            <OverviewCard
            imgSrc="/public/assets/youtube-logo.png"
            title="Youtube Ad Metrics"
            altText="Card image 1"
            ></OverviewCard>
             <OverviewCard
            imgSrc="/public/assets/tiktok-logo.png"
            title="Tiktok Ad Metrics"
            altText="Card image 1"
            ></OverviewCard> <OverviewCard
            imgSrc="/public/assets/facebook-logo.png"
            title="Facebook Ad Metrics"
            altText="Card image 1"
            ></OverviewCard>
        </Container>
    </section>
  )
}

export default OverviewPage;
