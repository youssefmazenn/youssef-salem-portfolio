import React from 'react';

const skillCategories = [
    {
        title: 'Generative AI & ML',
        skills: ['RAG', 'LangChain', 'LLM Fine-tuning', 'Transformers', 'PyTorch', 'Scikit-Learn', 'NLP']
    },
    {
        title: 'Data Science & Analytics',
        skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Statistical Modeling', 'EDA']
    },
    {
        title: 'Backend & Engineering',
        skills: ['FastAPI', 'REST APIs', 'System Design', 'Linux', 'Automation', 'Git']
    },
    {
        title: 'MLOps & Cloud',
        skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Model Packaging', 'A/B Testing']
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
