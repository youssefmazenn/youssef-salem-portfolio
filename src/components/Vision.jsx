import React from 'react';

const Vision = () => {
    return (
        <section className="section container" id="vision">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                My <span className="gradient-text">Vision</span>
            </h2>
            <div style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '3rem',
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p style={{ fontSize: '1.25rem', color: '#e2e8f0', marginBottom: '2rem', lineHeight: '1.8' }}>
                    I am interested in building the next generation of reliable, interactive AI systems that bridge the gap between
                    <strong style={{ color: '#fff' }}> research capabilities</strong> and <strong style={{ color: '#fff' }}> real-world utility</strong>.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                    {[
                        'Agentic AI with transparent decision chains',
                        'Evaluation frameworks for LLM trust and alignment',
                        'Multimodal assistants in AR/VR',
                        'Enterprise-grade RAG and reasoning pipelines'
                    ].map((item, index) => (
                        <div key={index} style={{
                            background: 'rgba(0,0,0,0.2)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <span style={{ color: 'var(--accent-secondary)', marginRight: '0.75rem', fontSize: '1.2rem' }}>✦</span>
                            <span style={{ color: '#ccc' }}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;
