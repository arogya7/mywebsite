import React from 'react';
import About from './About';

function App() {
    return (
        <div>
            <h1>Welcome to Arogya Bhatta's Personal Website</h1>
            <p>This website showcases my portfolio, projects, and blog.</p>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <About />
        </div>
    );
}

export default App;
