import React from 'react';

const Research = () => {
    return (
        <section className="section container" id="research">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Research & <span className="gradient-text">Thesis</span>
            </h2>

            <div style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>LLM Persona Evaluation Platform</h3>
                        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Bachelor Thesis</p>
                    </div>
                    <span style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: '#34d399',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        fontSize: '0.9rem'
                    }}>
                        Paper Status: Submitted
                    </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Research Overview</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong style={{ color: '#fff' }}>Research Question:</strong> How does epistemic certainty in LLM personas affect user trust and perception?
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong style={{ color: '#fff' }}>Experimental Design:</strong> 4x2 within-subjects factorial design (Repeated Measures ANOVA). Benchmarked 4 LLMs under different persona conditions.
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong style={{ color: '#fff' }}>Results:</strong> Found significant model-specific effects where persona consistency varied drastically between distinct LLM families.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>System Architecture</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            <li><strong style={{ color: '#fff' }}>Frontend:</strong> Next.js (React)</li>
                            <li><strong style={{ color: '#fff' }}>Backend:</strong> FastAPI (Python)</li>
                            <li><strong style={{ color: '#fff' }}>Database:</strong> Supabase (PostgreSQL)</li>
                            <li><strong style={{ color: '#fff' }}>Analysis:</strong> SPSS / Jamovi</li>
                        </ul>

                        <div style={{
                            background: 'rgba(0,0,0,0.3)',
                            height: '150px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px dashed #444',
                            color: '#666'
                        }}>
                            [Architecture Diagram / Interface Screenshot]
                        </div>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
                            <a href="#" style={{ color: 'var(--accent-secondary)' }}>View Abstract / Preprint</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
