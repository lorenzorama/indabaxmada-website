import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCountdown } from './CountdownContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const router = useRouter();
  const countdown = useCountdown();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => router.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.headerNav') && !event.target.closest('.mobileMenuButton')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="headerContainer">
        <Link href="/">
          <img src="/logo-madagascar.png" alt="Deep Learning Indaba Madagascar Logo" className="headerLogo" />
        </Link>
        
        <button className="mobileMenuButton" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`headerNav ${isMenuOpen ? 'mobileOpen' : ''}`}>
          <ul className="navList">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link href="/speakers" className={isActive('/speakers') ? 'active' : ''}>Speakers</Link></li>
            <li><Link href="/programme" className={isActive('/programme') ? 'active' : ''}>Programme</Link></li>
            <li><Link href="/ideathon" className={isActive('/ideathon') ? 'active' : ''}>Ideathon</Link></li>
            <li><Link href="/hackathon" className={isActive('/hackathon') ? 'active' : ''}>Hackathon</Link></li>
            <li><Link href="/poster-sessions" className={isActive('/poster-sessions') ? 'active' : ''}>Poster sessions</Link></li>
            <li><Link href="/past-editions" className={isActive('/past-editions') ? 'active' : ''}>Past Editions</Link></li>
            <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          </ul>
        </nav>
        
        <Link href="/">
          <img src="/logo-indaba.png" alt="Deep Learning Indaba Logo" className="headerLogo" />
        </Link>
      </div>
      <div className="headerCountdown">
        <p className="countdown">{countdown}</p>
      </div>
    </header>
  );
};

export default Header;
