//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
    {/*<Navbar />*/} 
      <main className="about-container">
        <section className="about-hero">
          <h1 className="section-title">About <span className="highlight">Me</span></h1>
          <p className="about-text">
            I am a passionate *Full Stack Developer* with a focus on building 
            clean, user-friendly, and high-performance web applications. 
            My journey in coding started with a curiosity for how things work on the web, 
            which led me to master modern tools like Next.js and React.
          </p>
        </section>

        <section className="about-details">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>Based in Pakistan, I love turning complex problems into simple, beautiful digital solutions.</p>
          </div>
          <div className="about-card">
            <h3>What I Do</h3>
            <p>I specialize in frontend design, backend logic, and making sure everything works smoothly together.</p>
          </div>
        </section>
      </main>
      { /*<Footer /> */}
    </div>
  );
}