import React from 'react';

const Hero = () => {
    return (
        <section className="section container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="animate-fade-in">
                <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem', lineHeight: 1.1 }}>
                    Hi, I'm <span className="gradient-text">Youssef Salem</span>
                    <br />
                    Creative Developer.
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#aaaaaa', marginBottom: '2rem', maxWidth: '600px' }}>
                    I build premium digital experiences that blend design and technology.
                    Focusing on performance, aesthetics, and user interaction.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-primary">View My Work</button>
                    <button className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-secondary)' }}>
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
