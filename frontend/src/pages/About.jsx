import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import AboutHero from '../components/about/AboutHero';
import TeamSection from '../components/about/TeamSection';
import Mission from '../components/about/Mission';

function About() {
    return ( 
        <div>
            <Navbar />
            <AboutHero />
            <Mission />
            <TeamSection />
            <Footer />
        </div>
    );
}
export default About;