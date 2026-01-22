import React from 'react';

const projectsData = [
    {
        title: 'Germany RAG Assistant',
        description: 'Production-grade RAG backend for German immigration regulations using FastAPI, LangChain, and ChromaDB. Features citation-grounded LLM answers and cloud-native MLOps.',
        tags: ['RAG', 'Python', 'Kubernetes', 'LangChain'],
        link: 'https://github.com/youssefmazenn/germany-rag-assistant'
    },
    {
        title: 'LLM-Driven VR NPC Platform',
        description: 'Immersive VR system in Unity where NPCs are powered by LLMs for natural, real-time voice conversations. Features low-latency speech pipeline and synchronized lip-sync.',
        tags: ['Unity', 'C#', 'VR', 'AI'],
        link: '#'
    },
    {
        title: 'Multi-LLM Persona Platform',
        description: 'Full-stack platform for comparing LLM personas (ChatGPT, Gemini, Claude) in user studies. Implemented experiment controls and data collection.',
        tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'HCI'],
        link: 'https://github.com/youssefmazenn/llm-persona-platform'
    },
    {
        title: 'PathFinder',
        description: 'Role-based travel management platform using MERN stack. Supports tourists, guides, and admins with itinerary creation and booking features.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://github.com/F0fo/PathFinder'
    }
];

const Projects = () => {
    return (
        <section className="section container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Selected <span className="gradient-text">Projects</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projectsData.map((project, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        padding: '2rem',
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.875rem',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: 'var(--accent-secondary)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
