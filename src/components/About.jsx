import React from 'react';

const About = () => {
    return (
        <section className="section container" style={{ background: 'var(--card-bg)', borderRadius: '20px', padding: '4rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About <span className="gradient-text">Me</span></h2>
                <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' }}>
                    I am a passionate developer who loves to create beautiful and functional websites.
                    With a strong foundation in modern web technologies, I strive to push the boundaries of what's possible in the browser.
                    When I'm not coding, you can find me exploring new design trends or contributing to open source.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <div>
                        <h3 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>3+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>20+</h3>
                        <p>Projects Completed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
