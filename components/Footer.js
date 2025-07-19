import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/70 text-gray-200 py-8 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="partner-grid mb-6">
          <div className="grid grid-cols-6 gap-4 mb-4">
            {/* First row */}
            <img src="wiser.png" alt="Wiser" className="h-6 w-auto object-contain mx-auto" />
            <img src="ukdev.png" alt="UK Dev" className="h-6 w-auto object-contain mx-auto" />
            <img src="cee.png" alt="CEE" className="h-6 w-auto object-contain mx-auto" />
            <img src="kalastem.png" alt="Kalastem" className="h-6 w-auto object-contain mx-auto" />
            <img src="leeds.png" alt="Leeds" className="h-6 w-auto object-contain mx-auto" />
            <img src="algomada.png" alt="Algomada" className="h-6 w-auto object-contain mx-auto" />
          </div>
          
          <div className="grid grid-cols-6 gap-4">
            {/* Second row */}
            <img src="optimize.png" alt="Optimze" className="h-6 w-auto object-contain mx-auto" />
            <img src="amld.png" alt="AMLD" className="h-6 w-auto object-contain mx-auto" />
            <img src="liam.png" alt="Liam" className="h-6 w-auto object-contain mx-auto" />
            <img src="vicode.png" alt="Vicode" className="h-6 w-auto object-contain mx-auto" />
            <img src="wer.png" alt="WER" className="h-6 w-auto object-contain mx-auto" />
            <img src="zindi.png" alt="Zindi" className="h-6 w-auto object-contain mx-auto" />
          </div>
        </div>
        
        <div className="text-center">
          <div className="social-links mb-4">
            <a href="https://www.facebook.com/profile.php?id=100093269167333" target="_blank" rel="noopener noreferrer" className="social-link">
              Facebook
            </a>
            <span className="separator">•</span>
            <a href="https://www.linkedin.com/company/indabax-madagascar/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <span className="separator">•</span>
            <a href="https://x.com/IndabaXMada" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter/X
            </a>
          </div>
          <p className="text-sm">IndabaX Madagascar Community - indabaxmadagascar@gmail.com</p>
        </div>
      </div>

      <style jsx>{`
        .social-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          color: #e9ecef;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .social-link:hover {
          color: #ffd166;
        }

        .separator {
          color: #6c757d;
          font-size: 0.875rem;
        }

        @media (max-width: 480px) {
          .separator {
            display: none;
          }
          
          .social-links {
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
