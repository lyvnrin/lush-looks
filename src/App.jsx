import { useState, useEffect } from "react";
import "./App.css";
import Silk from "./Silk";
import About from "./About";

function App() {
    const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "#fff",
    });

    useEffect(() => {
        const handleScroll = () => {
            // When scroll past hero height, switch navbar style
            const heroHeight = window.innerHeight - 90; // same as hero height in CSS
            if (window.scrollY >= heroHeight) {
                setNavbarStyle({
                    backgroundColor: "rgba(255,255,255,0.95)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    color: "#b14f6f",
                    width: "100vw",
                });
            } else {
                setNavbarStyle({
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    color: "#fff",
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="app-container">
            <div className="background-canvas">
                <Silk color="#b14f6f" speed={6.7} scale={1.3} noiseIntensity={1.5} />
            </div>

            {/* Navbar */}
            <nav
                className="navbar"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.5rem 3rem",
                    backgroundColor: navbarStyle.backgroundColor,
                    boxShadow: navbarStyle.boxShadow,
                    zIndex: 100, // make sure it’s above everything
                    backdropFilter: "blur(6px)",
                }}
            >
                <div
                    className="nav-left"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.4rem",
                        letterSpacing: "0.5px",
                        color: navbarStyle.color,
                    }}
                >
                    Lush Looks
                </div>
                <div className="nav-right">
                    <a href="#about" style={{ color: navbarStyle.color }}>
                        About
                    </a>
                    <a href="#services" style={{ color: navbarStyle.color }}>
                        Services
                    </a>
                    <a href="#contact" style={{ color: navbarStyle.color }}>
                        Contact
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <main className="hero">
                <h1>Relaxed Beauty, Lush Looks</h1>
                <p>A mobile beauty and hair service</p>
                <button className="cta-btn">Book Now</button>
            </main>

            {/* About */}
            <About />
        </div>
    );
}

export default App;
