import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from '../views/about.jsx';
import Contact from '../views/contact.jsx';
import Home from '../views/index.jsx';
import NotFound from '../views/404.jsx';

function Layout() {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2026 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}