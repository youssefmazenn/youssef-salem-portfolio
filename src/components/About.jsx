import React from 'react';

const About = () => {
    return (
        <section className="section container" style={{ background: 'var(--card-bg)', borderRadius: '20px', padding: '4rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About <span className="gradient-text">Me</span></h2>
                <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '3rem', lineHeight: '1.8' }}>
                    I am an AI Research Assistant and Full-Stack Engineer specializing in
                    <strong style={{ color: '#fff' }}> Human-Centered AI, LLM Evaluation, and Production-Grade Systems</strong>.
                    With a background in Computer Science and Digital Media, I bridge the gap between rigorous research and scalable software engineering.
                </p>

                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--accent-primary)' }}>Education</h3>

                <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>M.Sc. Computer Science for Digital Media</h4>
                        <span style={{ color: '#a5b4fc' }}>04/2026 - Present</span>
                    </div>
                    <p style={{ color: '#ccc', marginBottom: '0' }}>Berliner Hochschule für Technik • Berlin, Germany</p>
                </div>

                <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>B.Sc. Computer Science and Engineering</h4>
                        <span style={{ color: '#a5b4fc' }}>10/2021 - 09/2025</span>
                    </div>
                    <p style={{ color: '#ccc', marginBottom: '0' }}>German International University • Berlin, Germany</p>
                </div>
            </div>
        </section>
    );
};

export default About;
