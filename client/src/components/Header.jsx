import React from 'react';
const href = "#"
function Header() {
  return <div>
      <nav className="py-2 bg-white border-bottom">
    <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
            </li>
            <li className="nav-item"><a href={href} className="nav-link link-dark px-2">Features</a></li>
            <li className="nav-item"><a href={href} className="nav-link link-dark px-2">Contact</a></li>
            <li className="nav-item"><a href={href} className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href={href} className="nav-link link-dark px-2">About</a></li>
        </ul>
        <ul className="nav">
            <li className="nav-item">
                <a href="/article/new" className="btn btn-primary text-white px-2">New Article</a>
            </li>
        </ul>
    </div>
</nav>
  </div>;
}

export default Header;
