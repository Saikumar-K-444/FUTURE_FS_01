import React from 'react';

export default function Hero() {
  return (
     
  <div className="hero-section">
  <div className="hero-image">
    <img src="/saikumar.png" alt="Sai Kumar" />
  </div>

  <div className="hero-content">
    <h1>Hi, I'm <span className="highlight">Sai Kumar Kondri</span></h1>
    <h2>Full Stack Software Engineer</h2>
    <p>
     

I am currently pursuing my Bachelor's of technology at Aditya College of engineering and technology. I am a passionate Full Stack Web Developer with a strong interest in creating modern, responsive, and user-friendly web applications.
</p>
<p>
I have skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL. I enjoy learning new technologies and building real-world projects that improve my practical knowledge.
</p>
<p>

Apart from coding, I enjoy exploring new technologies, solving programming challenges, and continuously improving my technical skills.
</p>
<p>
My goal is to become a successful Full Stack Web Developer and contribute to innovative software solutions while continuously learning and growing in the IT industry.
    </p>

    <div className="hero-cta">
      <a href="#projects" className="btn primary-btn">View My Work</a>
      <a href="#contact" className="btn secondary-btn">Let's Talk</a>
    </div>
  </div>
</div>
  );
}