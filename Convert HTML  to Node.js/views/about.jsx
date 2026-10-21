import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="content">
      <h2>About</h2>
      <p>This is the About page of My Website.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}