import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './LandingPage.css';
import LPNavBar from '../components/LPNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles, faUserShield, faHandsHoldingCircle, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import Cards from '../components/LPCards';
import LPFAQ from '../components/LPFAQ';
import EducationHubCards from '../components/Education-hub-cards';

function LandingPage() {
    const navigate = useNavigate();
  
    return (
        <section className='landing-page'>
            <section className='lp-navbar'>
                <LPNavBar />
            </section>
            <section className='hero-section'>
                <div className='hero-text-container'>
                    <h1 className='h1text'>
                        Smarter Ads Greener Future
                    </h1>
                    <p>
                        Maximize ad performance with AI-powered targeting that reaches the right customers at the perfect time.
                    </p>
                    <a href="#" className="explore-link">Explore the Platform</a>
                    <a href="#" className="sign-up">Learn More</a>
                </div>
                <div className='hero-image-container'>
                    <img src="/public/assets/hero-img.png" alt="hero image" className='hero-img' />
                </div>
            </section>
            <section className='the-future-container'>
                <h1>The Future of Ethical & Sustainable AI Advertising</h1>
                <p>The advertising industry is evolving, and businesses need smarter, more responsible ways to reach their audiences.</p>
                <Container className='card-container'>
                    <Cards></Cards>
                </Container>
            </section>
            <section className="who-is-it-for-container">
                <h1>Who's it For?</h1>
                <p>EcoAds is built for businesses that care about performance, privacy, and sustainability.</p>

                <div className="stats-container">
                    <div className="stat">
                        <span className="stat-number">1</span>
                        <div>
                            <h3 className="stat-title">Businesses Focused on Performance</h3>
                            <p className="stat-text">Maximize your ad performance with AI-driven targeting.</p>
                        </div>
                    </div>

                    <div className="stat">
                        <span className="stat-number">2</span>
                        <div>
                            <h3 className="stat-title">Privacy-First Organizations</h3>
                            <p className="stat-text">Protect user data while delivering targeted ads.</p>
                        </div>
                    </div>

                    <div className="stat">
                        <span className="stat-number">3</span>
                        <div>
                            <h3 className="stat-title">Sustainability-Oriented Companies</h3>
                            <p className="stat-text">Reduce the carbon footprint of your advertising efforts.</p>
                        </div>
                    </div>

                    <div className="stat">
                        <span className="stat-number">4</span>
                        <div>
                            <h3 className="stat-title">Innovative Marketing Teams</h3>
                            <p className="stat-text">Leverage cutting-edge technology for smarter campaigns.</p>
                        </div>
                    </div>

                    <div className="stat">
                        <span className="stat-number">5</span>
                        <div>
                            <h3 className="stat-title">Data-Driven Advertisers</h3>
                            <p className="stat-text">Optimize your ad spend through data analytics.</p>
                        </div>
                    </div>

                    <div className="stat">
                        <span className="stat-number">6</span>
                        <div>
                            <h3 className="stat-title">Growth-Focused Brands</h3>
                            <p className="stat-text">Drive business growth with optimized ad targeting.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='measuring-success-container'>
                <div className='msuccess-title'>
                    <h1>Measuring Success</h1>
                </div>
                <div className='infographic-container'>
                      <img src="/public/assets/marketing-img.png" className='marketing-img' alt="hero image" ></img>
                </div>
                <div className='msuccess-card-container'>
                    <div className='msuccess-card' style={{ backgroundColor: '#407C5A' }}>
                        <h2>Click-Through Rate (CTR) Improvement</h2>
                        <p>SMeasures how much more effective Eco Ads’ targeting is compared to traditional platforms.</p>
                    </div>
                    <div className='msuccess-card' style={{ backgroundColor: '#A6D3A0' }}>
                        <h2>Conversion Rate</h2>
                        <p>Tracks how many users take action (purchase, sign-up, etc.) after clicking an ad.</p>
                    </div>
                    <div className='msuccess-card'  style={{ backgroundColor: '#79A38B' }}>
                        <h2>Energy Consumption</h2>
                        <p>The amount of energy required to serve 1,000 ad impressions.</p>
                    </div>
                    <div className='msuccess-card'  style={{ backgroundColor: '#BFD3C3' }}>
                        <h2>Ad Impressions</h2>
                        <p>EThe number of times an ad was displayed, whether clicked or not.</p>
                    </div>
                    <div className='msuccess-card'  style={{ backgroundColor: '#BFD3C7' }}>
                        <h2>Bounce Rate</h2>
                        <p>The percentage of users who click an ad but leave the landing page immediately without interacting.</p>
                    </div>
                    <div className='msuccess-card'  style={{ backgroundColor: '#79A38B' }}>
                        <h2>Cost</h2>
                        <p>The total cost spent on the advertising campaign.</p>
                    </div>
                    <div className='msuccess-card'  style={{ backgroundColor: '#A6D3A0' }}>
                        <h2>Views</h2>
                        <p>The total number of times an ad was viewed by users.</p>
                    </div>
                    <div className='msuccess-card'  style={{ backgroundColor: '#407C5A' }}>
                        <h2>Ad Relevance Score (1-10 scale)</h2>
                        <p>AI-generated quality score based on audience engagement.</p>
                    </div>
                </div>
                    
            </section>

            <section className='education-hub-container'>
                <Container className='eh-header-container'>
                   <h1>Education Hub</h1>
                   <span>View more</span>
                </Container>
                <Container>
                    <EducationHubCards></EducationHubCards>
                </Container>
             
            </section>

            <section className='FAQ-container'>
                <h1>Frequently Asked Questions</h1>
                <LPFAQ></LPFAQ>
            </section>


        </section>
    );
}

export default LandingPage;
