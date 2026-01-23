import React from 'react';

const Hero = () => {
    return (
        <section className="hero container" style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '4rem'
        }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Hi, I'm <span className="gradient-text">Youssef Salem</span>
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#e2e8f0', fontWeight: '500' }}>
                AI Engineer & LLM Researcher | RAG Systems | Conversational AI | MLOps
            </p>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                I build production-ready LLM systems and evaluate how humans perceive AI behavior,
                from RAG pipelines and agentic workflows to real-time voice-driven VR assistants.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                {['TUM & UniBW Research Assistant', 'LLM Evaluation & Personas', 'FastAPI · LangChain · Kubernetes · Unity · AWS'].map(badge => (
                    <span key={badge} style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#818cf8',
                        borderRadius: '20px',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        fontSize: '0.9rem'
                    }}>
                        {badge}
                    </span>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                    View Projects
                </button>
                <a href="./cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-purple" style={{ textDecoration: 'none' }}>
                    Download CV
                </a>
                <button className="btn btn-cyan" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    Contact Me
                </button>
            </div>
        </section>
    );
};

export default Hero;
