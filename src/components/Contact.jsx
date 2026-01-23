import React from 'react';

const Contact = () => {
    return (
        <section className="section container" id="contact" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Work <span className="gradient-text">Together</span></h2>
            <p style={{ fontSize: '1.25rem', color: '#aaaaaa', marginBottom: '3rem' }}>
                Open to: Working Student, Research Assistant, Junior AI Engineer roles.
            </p>
            <div style={{ marginBottom: '4rem' }}>
                <a href="mailto:youssefkhaled02@gmail.com" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Get In Touch
                </a>
            </div>

            <footer style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="mailto:youssefkhaled02@gmail.com" style={{ color: '#ccc', textDecoration: 'none' }}>Email</a>
                    <a href="https://www.linkedin.com/in/youssef-salem-95801a289/" target="_blank" rel="noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>LinkedIn</a>
                    <a href="https://github.com/youssefmazenn" target="_blank" rel="noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>GitHub</a>
                    <a href="#" style={{ color: '#666', textDecoration: 'none', cursor: 'default' }}>Google Scholar</a>
                </div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Berlin, Germany</p>
                <p style={{ color: '#444', fontSize: '0.8rem' }}>© 2026 Youssef Mazen Salem</p>
            </footer>
        </section>
    );
};

export default Contact;
