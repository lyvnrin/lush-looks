import "./App.css";
import Silk from "./Silk";

function App() {
    return (
        <div className="app-container">
            <div className="background-canvas">
                <Silk color="#b14f6f" speed={6.7} scale={1.3} noiseIntensity={1.5} />
            </div>

            <nav className="navbar">
                <div className="nav-left">Lush Looks</div>
                <div className="nav-right">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <main className="hero">
                <h1>Relaxed Beauty, Lush Looks</h1>
                <p>A mobile beauty and hair service</p>
                <button className="cta-btn">Book Now</button>
            </main>
        </div>
    );
}

export default App;
