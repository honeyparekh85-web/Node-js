import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="content">
      <h2>Contact</h2>
      <p>This is the Contact page of My Website.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}