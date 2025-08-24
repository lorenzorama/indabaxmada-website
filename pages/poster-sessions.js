import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const PosterSessionsPage = () => {
  return (
    <>
      <Head>
        <title>Poster Sessions - IndabaX Madagascar 2025</title>
        <meta name="description" content="Poster Sessions for IndabaX Madagascar 2025" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <Header />
      
      <main className="content content-shifted">
        <div className="container">
          <h1 className="mainTitle">
            <span className="highlight">APPEL À POSTERS</span>
          </h1>

          <p className="description">
            Présentez vos recherches en IA/ML lors de l'événement IndabaX Madagascar 2025.
          </p>

          <div className="special-attention">
            <div className="icon">💡</div>
            <p>Une attention particulière sera portée aux projets contribuant à l'éducation et à la science à Madagascar.</p>
          </div>

          <button 
            className="stayTuned"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSez0Q7wOukLcuvcF4TnZcBgQ3x-T4ZUVEpvJhqYWHnpQCm3tw/viewform?usp=header', '_blank')}
          >
            Soumettre mon poster
          </button>

          <div className="event-details">
            <h3>📅 Dates importantes :</h3>
            <div className="timeline">
              <div className="timeline-item">
                <strong>Soumission :</strong> Avant le 15 septembre 2025
              </div>
              <div className="timeline-item">
                <strong>Présentation :</strong> 20 septembre 2025
              </div>
              <div className="timeline-item">
                <strong>Résultat :</strong> 21 septembre 2025
              </div>
            </div>

            <div className="grand-prix">
              <h3>🏆 GRAND PRIX</h3>
              <div className="prize-content">
                <p>Participation au prestigieux <strong>Deep Learning Indaba 2026</strong> au <strong>Nigéria</strong></p>
              </div>
            </div>
          </div>

          <p className="date">
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> 19 - 20 - 21 SEPTEMBRE 2025
          </p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> Lieu à déterminer
          </p>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .special-attention {
          display: flex;
          align-items: center;
          background: rgba(255, 209, 102, 0.1);
          border: 2px solid var(--accent-color);
          border-radius: 15px;
          padding: 1.5rem;
          margin: 2rem 0;
          gap: 1rem;
        }

        .special-attention .icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .special-attention p {
          margin: 0;
          color: var(--text-primary);
          font-size: 1.1rem;
          line-height: 1.5;
        }

        .event-details {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          margin: 2rem 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .event-details h3 {
          color: var(--accent-color);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .timeline {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-item strong {
          color: var(--text-primary);
        }

        .grand-prix {
          background: linear-gradient(135deg, rgba(255, 209, 102, 0.2), rgba(255, 209, 102, 0.1));
          border: 2px solid var(--accent-color);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
        }

        .grand-prix h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }

        .grand-prix p {
          color: var(--text-primary);
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0;
        }

        .grand-prix strong {
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .special-attention {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
          }

          .event-details {
            padding: 1.5rem;
          }

          .timeline {
            padding: 1rem;
          }

          .timeline-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
          }

          .grand-prix {
            padding: 1.5rem;
          }

          .grand-prix h3 {
            font-size: 1.5rem;
          }

          .grand-prix p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default PosterSessionsPage;
