import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const IdeathonPage = () => {
  return (
    <>
      <Head>
        <title>IndabaX Madagascar 2025 - Ideathon</title>
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
            <span className="highlight">IDEATHON !</span>
          </h2>

          <p className="description">
            Rejoignez-nous pour cet événement captivant consacré à l'IA et au numérique, une occasion unique de présenter vos idées et solutions innovantes pour transformer l'éducation et la science à Madagascar.
          </p>

          <h3 className="theme">
            Thème : <span className="highlight">AGENTS IA pour l'éducation et la science à Madagascar</span>
          </h3>

          <div className="registration-closed">
            <p>Inscription terminée !</p>
            <p className="subtext">Merci pour votre intérêt. Nous vous donnons rendez-vous à la prochaine édition. 😊</p>
          </div>

          <div className="event-details">
            <h3>Détails de l'événement :</h3>
            <ul>
              <li><strong>Équipes :</strong> Les équipes doivent être composées de 4 personnes.</li>
              <li><strong>Pitch :</strong> Chaque équipe aura 15 minutes pour présenter son projet devant un jury.</li>
              <li><strong>Documents requis :</strong> Les diapositives des présentations devront être remises à l'entrée de l'événement, accompagnées d'une pièce d'identité (CIN ou tout autre document justificatif) pour chaque membre.</li>
            </ul>
            
            <div className="bonus">
              <h4>🎁 Bonus :</h4>
              <p>Les 5 premières équipes inscrites recevront un T-shirt IndabaX Mada !</p>
            </div>

            <div className="warning">
              <h4>⚠️ Attention :</h4>
              <p>Les inscriptions sont limitées, alors inscrivez-vous rapidement pour garantir votre place !</p>
            </div>

            <div className="contact-info">
              <h4>📞 Infoline :</h4>
              <p>0340924165 / indabaxmadagascar@gmail.com</p>
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
        .registration-closed {
          background: rgba(220, 53, 69, 0.1);
          border: 2px solid #dc3545;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          margin: 2rem 0;
        }

        .registration-closed p:first-child {
          font-size: 1.5rem;
          font-weight: bold;
          color: #dc3545;
          margin: 0 0 0.5rem 0;
        }

        .registration-closed .subtext {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
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
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .event-details ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .event-details li {
          margin-bottom: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .bonus, .warning, .contact-info {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 10px;
          margin: 1rem 0;
        }

        .bonus h4, .warning h4, .contact-info h4 {
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .bonus p, .warning p, .contact-info p {
          margin: 0;
          color: var(--text-secondary);
        }

        .bonus {
          border-left: 4px solid #28a745;
        }

        .warning {
          border-left: 4px solid #ffc107;
        }

        .contact-info {
          border-left: 4px solid var(--accent-color);
        }

        @media (max-width: 768px) {
          .event-details {
            padding: 1.5rem;
            margin: 1.5rem 0;
          }

          .event-details h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default IdeathonPage;
