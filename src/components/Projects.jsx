import React from 'react';

const projects = [
    {
        title: 'Germany RAG Assistant',
        subtitle: 'Production-Grade AI System',
        tags: ['LangChain', 'ChromaDB', 'FastAPI', 'Kubernetes'],
        sections: [
            { label: 'Problem', text: 'Hallucinations in legal/immigration advice lead to misinformation.' },
            { label: 'Solution', text: 'Grounded RAG pipeline with strict citation control and document provenance.' },
            { label: 'Architecture', text: 'Hybrid search (Dense + Sparse) using LangChain & ChromaDB, served via FastAPI on Kubernetes.' },
            { label: 'Advanced', text: 'Implemented MMR retrieval, prompt routing, and dynamic document chunking strategies.' }
        ],
        outcome: 'Reliable, citation-backed answers suitable for enterprise deployment.'
    },
    {
        title: 'Conversational AI in VR',
        subtitle: 'Immersive Real-Time Interaction',
        tags: ['Unity', 'C#', 'OpenAI Whisper', 'TTS', 'Streaming'],
        sections: [
            { label: 'Pipeline', text: 'Real-time STT → LLM Inference → TTS → Lip Sync synchronization.' },
            { label: 'Optimization', text: 'Achieved sub-second latency using token streaming and concurrent processing.' },
            { label: 'Architecture', text: 'Multi-NPC system with dedicated context management and state tracking.' },
            { label: 'Research', text: 'Used as a testbed for studying human-agent interaction in immersive environments.' }
        ],
        outcome: 'Seamless voice interaction with lifelike NPC behavior in VR.'
    }
];

const Projects = () => {
    return (
        <section className="section container" id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Flagship <span className="gradient-text">Engineering Projects</span>
            </h2>
            <div style={{ display: 'grid', gap: '3rem' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '20px',
                        padding: '2.5rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>{project.subtitle}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.85rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#ccc'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {project.sections.map((section, i) => (
                                <div key={i}>
                                    <h4 style={{ color: '#fff', fontSize: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                        {section.label}
                                    </h4>
                                    <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {section.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <p style={{ color: '#fff', fontWeight: '500' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>Outcome:</span> {project.outcome}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
