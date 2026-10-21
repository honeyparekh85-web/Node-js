import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="content">
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}