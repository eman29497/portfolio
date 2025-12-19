
export default function Contact() {
  return (
    <div>
     {/* <Navbar />*/}
      <main className="contact-container">
        <h1 className="section-title">Get In <span className="highlight">Touch</span></h1>
        <p className="contact-subtitle">I am currently open to new opportunities and projects!</p>

        <div className="contact-wrapper">
          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>yourname@email.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Faisalabad, Pakistan</p>
            </div>
            <div className="info-item">
              <h3>Follow Me</h3>
              <div className="social-pills">
                <span>LinkedIn</span>
                <span>GitHub</span>
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*<Footer /> */}
    </div>
  );
}