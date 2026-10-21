import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h2>Welcome to My Website</h2>
        <p>
          This is a simple website converted from HTML
          into a Node.js application using Express.js.
        </p>
        <Link to="/about" className="btn">Learn More</Link>
      </section>

      <section className="content">
        <h2>What We Do</h2>
        <p>
          We create simple and useful websites using
          HTML, CSS, JavaScript, and Node.js.
        </p>
      </section>
    </>
  );
}