import React from 'react';

const skillCategories = [
    {
        title: 'LLM & AI',
        skills: ['RAG', 'LangChain', 'LangGraph', 'HuggingFace', 'Prompt Engineering', 'Evaluation', 'Persona Design']
    },
    {
        title: 'Backend & Systems',
        skills: ['FastAPI', 'Docker', 'Kubernetes', 'Linux', 'REST', 'WebSockets', 'Streaming']
    },
    {
        title: 'MLOps & Cloud',
        skills: ['AWS', 'CI/CD', 'Vector DBs', 'Monitoring', 'Model Routing']
    },
    {
        title: 'Research & Stats',
        skills: ['Experimental design', 'ANOVA', 'Likert analysis', 'SPSS', 'Jamovi']
    }
];

const Skills = () => {
    return (
        <section className="section container" id="skills">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Technical <span className="gradient-text">Skills</span>
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {skillCategories.map((category, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '16px',
                        padding: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            marginBottom: '1.5rem',
                            color: 'var(--accent-secondary)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            paddingBottom: '0.5rem'
                        }}>
                            {category.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {category.skills.map(skill => (
                                <span key={skill} style={{
                                    fontSize: '0.9rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.35rem 0.8rem',
                                    borderRadius: '6px',
                                    color: '#e2e8f0',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
