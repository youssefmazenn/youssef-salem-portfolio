import React from 'react';

const Contact = () => {
    return (
        <section className="section container" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Work <span className="gradient-text">Together</span></h2>
            <p style={{ fontSize: '1.25rem', color: '#aaaaaa', marginBottom: '3rem' }}>
                Have a project in mind? I'd love to hear from you.
            </p>
            <a href="mailto:youssef@example.com" className="btn-primary">
                Get In Touch
            </a>
        </section>
    );
};

export default Contact;
