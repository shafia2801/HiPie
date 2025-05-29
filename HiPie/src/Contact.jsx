import './Contact.css';
import FloatingScrollButtons from './ScrollToTop';

function Contact() {
  return (
    <>
      <div className="contact-page">
        <h1>Contact Us</h1>

        <section className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions, feedback, or want to book a table? We'd love to hear from you!
          </p>
          <ul>
            <li><strong>Phone:</strong> 63456-7890</li>
            <li><strong>Email:</strong> contact@HiPie.com</li>
            <li><strong>Address:</strong> 123 Foodie Street, Flavor Town, FL 12345</li>
          </ul>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="2a6b5bc6-5a45-433c-a84e-f950248eeef4" />

            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="hours">
          <h2>Business Hours</h2>
          <ul>
            <li>Monday - Friday: 11:00 AM – 10:00 PM</li>
            <li>Saturday - Sunday: 9:00 AM – 11:00 PM</li>
          </ul>
        </section>
      </div>
      <FloatingScrollButtons />
    </>
  );
}

export default Contact;
