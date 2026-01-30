import React from "react";

const About = () => {
    const styles = {
        aboutSection: {
            width: "100%",        // full width
            minHeight: "800px",   // fixed minimum height
            maxWidth: "100%",     // prevent horizontal overflow
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4rem 2rem",
            boxSizing: "border-box",
        },
        aboutBox: {
            maxWidth: "100vw",
            width: "100%",
            textAlign: "center",
            padding: "3rem",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            borderRadius: "15px",
            backgroundColor: "#fff",
            boxSizing: "border-box",
        },
        iconCircle: {
            width: "120px",
            height: "120px",
            margin: "0 auto 2rem auto",
            borderRadius: "50%",
            backgroundColor: "#b14f6f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
        },
        aboutColumns: {
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            marginTop: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
        },
        aboutColumn: {
            flex: "1 1 300px",
            textAlign: "left",
        },
        columnHeading: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "#333",
        },
        columnText: {
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#555",
        },
    };

    return (
        <section id="about" style={styles.aboutSection}>
            <div style={styles.aboutBox}>
                <div style={styles.iconCircle}>ICON</div>
                <div style={styles.aboutColumns}>
                    <div style={styles.aboutColumn}>
                        <h2 style={styles.columnHeading}>Our Philosophy</h2>
                        <p style={styles.columnText}>
                            We believe beauty should be effortless and accessible. Our mobile services bring professional care to your doorstep, ensuring you feel relaxed and confident.
                        </p>
                    </div>
                    <div style={styles.aboutColumn}>
                        <h2 style={styles.columnHeading}>What We Offer</h2>
                        <p style={styles.columnText}>
                            From hair styling to full beauty treatments, our team is trained to provide the perfect personalized experience. We prioritize comfort, quality, and your unique style.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
