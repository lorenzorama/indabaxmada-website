import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const HackathonPage = () => {
  return (
    <>
      <Head>
        <title>IndabaX Madagascar 2025 - Hackathon</title>
        <meta name="description" content="L'IA en action pour révolutionner l'éducation et la science à Madagascar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <Header />
      
      <main className="content content-shifted">
        <div className="container">

          <h2 className="mainTitle">
            <span className="highlight">RAG-ATHON !</span>
          </h2>

          <p className="description">
            Bienvenue au hackathon "Rag-athon" officiel de l'IndabaX Madagascar 2025 !
          </p>

          <h3 className="theme">
            Thème : <span className="highlight">Retrieval-Augmented Generation (RAG) pour l'éducation à Madagascar</span>
          </h3>

          <button 
            className="stayTuned"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf5yHjJQFTqFRMAO1mU0tcMPwlDBiOlPlf-eNQuKib4gWRjEQ/viewform?usp=header', '_blank')}
          >
            Je m'inscris
          </button>

          <div className="event-details">
            <h3>À propos du Rag-athon :</h3>
            <p>
              Rejoignez-nous pour une compétition individuelle intense et enrichissante axée sur la <strong>"Retrieval-Augmented Generation" (RAG)</strong>. Cette année, nous vous mettons au défi d'utiliser vos compétences en intelligence artificielle pour aborder le thème crucial de <strong>l'éducation à Madagascar</strong>.
            </p>
            
            <div className="target-audience">
              <h4>👥 Pour qui ?</h4>
              <p>Que vous soyez étudiant, développeur, AI engineer, data scientist ou simplement un passionné de technologie, ce hackathon est une occasion unique de :</p>
              <ul>
                <li>Mettre en pratique vos connaissances</li>
                <li>Apprendre grâce à un atelier dédié au RAG</li>
                <li>Vous mesurer à d'autres talents de la communauté</li>
              </ul>
            </div>

            <div className="competition-format">
              <h4>🏆 Format :</h4>
              <p><strong>Compétition individuelle</strong> - Chaque participant concourt seul</p>
            </div>

            <div className="call-to-action">
              <p><strong>Remplissez le formulaire avec attention pour réserver votre place. Nous avons hâte de vous voir relever le défi !</strong></p>
            </div>
          </div>
          

          <p className="date">
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> 19 - 20 - 21 SEPTEMBRE 2025</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> Lieu à déterminer
          </p>

        </div>
      </main>

      <Footer />

      <style jsx>{`
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
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .event-details p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .target-audience, .competition-format, .call-to-action {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1.5rem 0;
        }

        .target-audience h4, .competition-format h4 {
          margin: 0 0 1rem 0;
          color: var(--text-primary);
          font-size: 1.2rem;
        }

        .target-audience ul {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0;
        }

        .target-audience li {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.5rem;
        }

        .target-audience li::before {
          content: "•";
          color: var(--accent-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .target-audience {
          border-left: 4px solid #17a2b8;
        }

        .competition-format {
          border-left: 4px solid #28a745;
        }

        .call-to-action {
          border-left: 4px solid var(--accent-color);
          text-align: center;
        }

        .call-to-action p {
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .event-details {
            padding: 1.5rem;
            margin: 1.5rem 0;
          }

          .event-details h3 {
            font-size: 1.3rem;
          }

          .target-audience, .competition-format, .call-to-action {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default HackathonPage;
