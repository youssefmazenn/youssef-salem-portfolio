import React from 'react';

const experiences = [
    {
        role: 'AI Research Assistant',
        company: 'TUM & UniBW',
        period: '03/2025 - Present',
        description: [
            'Designed controlled persona prompting framework for LLM behavioral studies.',
            'Built evaluation platform with automated data logging & statistical pipelines.',
            'Conducted repeated-measures ANOVA on user perception metrics.',
            'Co-authoring a paper on human perception of LLM certainty.'
        ]
    },
    {
        role: 'Application Specialist',
        company: 'Alliance Healthcare',
        period: '09/2024 - 05/2025',
        description: [
            'Built Linux automation pipelines to replace manual workflows.',
            'Optimized production job scheduling, reducing processing time by 35%.',
            'Improved system reliability & monitoring for business-critical data.'
        ]
    },
    {
        role: 'Database Software Engineer',
        company: 'MIDOR',
        period: '07/2024 - 08/2024',
        description: [
            'Built Python-based ETL automation scripts, reducing manual processing by 10+ hours/week.',
            'Implemented enterprise-scale data validation, detecting 150+ data inconsistencies.',
            'Collaborated with engineering teams to translate business data requirements into robust pipelines.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="section container" id="experience">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Professional <span className="gradient-text">Experience</span>
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {experiences.map((exp, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '16px',
                        padding: '2rem',
                        marginBottom: '2rem',
                        position: 'relative',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{exp.role}</h3>
                            <span style={{
                                background: 'rgba(92, 107, 192, 0.2)',
                                color: '#a5b4fc',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                {exp.period}
                            </span>
                        </div>
                        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{exp.company}</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', lineHeight: '1.6' }}>
                            {exp.description.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
