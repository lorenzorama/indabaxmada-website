import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const IdeathonPage = () => {
  return (
    <>
      <Head>
        <title>IndabaX Madagascar 2024 - Ideathon</title>
        <meta name="description" content="L'IA pour le développement de Madagascar, annual." />
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
            <span className="highlight">HACKATHON !</span>
          </h2>

          <p className="description">
            Présentez vos idées de solutions innovantes basées sur l'IA pour transformer et révolutionner l'agriculture malagasy !
          </p>

          <h3 className="theme">
            Thème : <span className="highlight">AGENTS IA pour l'agriculture à Madagascar</span>
          </h3>

          <button 
            className="stayTuned"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeg73UkAaQwc6oDjR2z7gLNrkqpDG7_IDCVDDO9jJjsXTqF4A/viewform?usp=sf_link', '_blank')}
          >
            Je m'inscris
          </button>

          <div className="details">
            <p>Equipe de 4 personnes et pitch de 15 min par équipe</p>
            <p className="bonus">T-shirt IndabaX Mada pour les 5 premières équipes inscrites</p>
          </div>
          

          <p className="date">
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> 13 - 14 - 15 DEC 2024</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> Rubik Services - Lot III Q 60 Bis Andoharano Tsimbazaza, Antananarivo 101
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default IdeathonPage;
