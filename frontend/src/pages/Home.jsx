import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export default Home;