import "./App.css";

function App() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-left">Lush Looks</div>

                <div className="nav-right">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="hero">
                <h1>Relaxed Beauty,<br /> Lush Looks</h1>
                <p>A mobile beauty and hair service</p>
                <button className="cta-btn">Book Now</button>
            </main>
        </>
    );
}

export default App;
