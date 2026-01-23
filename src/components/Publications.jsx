import React from 'react';

const publications = [
    {
        title: "LLM Persona Evaluation Platform: Effect of Epistemic Certainty on User Trust",
        type: "Bachelor Thesis",
        status: "Submitted",
        date: "2025",
        description: "Implemented a full-stack evaluation platform and conducted a 4x2 factorial user study."
    },
    {
        title: "Human Perception of LLM Certainty in Conversational Agents",
        type: "Co-authored Paper",
        status: "In Preparation",
        date: "2025",
        venue: "TUM / UniBW",
        description: "Statistical analysis of user perception metrics across different LLM families."
    },
    {
        title: "Real-time AI Agents in Virtual Reality",
        type: "Talk / Demo",
        status: "Presented",
        date: "2024",
        venue: "XR Workshop",
        description: "Live demonstration of low-latency speech-to-speech interaction in Unity."
    }
];

const Publications = () => {
    return (
        <section className="section container" id="publications">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Publications & <span className="gradient-text">Talks</span>
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {publications.map((pub, index) => (
                    <div key={index} style={{
                        marginBottom: '2rem',
                        borderLeft: '2px solid var(--accent-primary)',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                color: '#94a3b8'
                            }}>
                                {pub.type}
                            </span>
                            <span style={{
                                fontSize: '0.8rem',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '0.1rem 0.5rem',
                                borderRadius: '4px',
                                color: '#ccc'
                            }}>
                                {pub.status}
                            </span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#fff' }}>
                            {pub.title}
                        </h3>
                        <p style={{ color: '#ccc', marginBottom: '0.25rem' }}>
                            {pub.venue && <span style={{ color: 'var(--accent-secondary)' }}>{pub.venue} • </span>}
                            {pub.date}
                        </p>
                        <p style={{ color: '#888', fontSize: '0.95rem' }}>{pub.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
