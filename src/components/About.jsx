import React from 'react';

const About = () => {
    return (
        <section className="section container" style={{ background: 'var(--card-bg)', borderRadius: '20px', padding: '4rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About <span className="gradient-text">Me</span></h2>
                <div style={{ textAlign: 'left', marginBottom: '3rem', fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I am an <strong style={{ color: '#fff' }}>AI Engineer and Research Assistant</strong> working at the intersection of large language models, human-AI interaction, and production AI systems.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        My background combines experimental research (LLM persona evaluation, user studies, statistical analysis) with full-stack AI engineering (RAG systems, agent orchestration, cloud deployment, real-time voice interfaces).
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I have designed and built:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '0.5rem' }}>A <strong style={{ color: '#fff' }}>multi-LLM persona evaluation platform</strong> used in academic research (TUM, UniBW)</li>
                        <li style={{ marginBottom: '0.5rem' }}>A <strong style={{ color: '#fff' }}>production-grade RAG system</strong> grounded in German government regulations</li>
                        <li style={{ marginBottom: '0.5rem' }}>Low-latency <strong style={{ color: '#fff' }}>conversational AI agents in VR</strong> with speech-to-speech interaction</li>
                    </ul>
                    <p>
                        My long-term goal is to build reliable, interpretable, and user-aligned AI systems that can be deployed safely in real-world environments.
                    </p>
                </div>

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
