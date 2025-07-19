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
            <span className="highlight">HACKATHON !</span>
          </h2>
          
          <div className="comingSoon">
            <p>Coming Soon</p>
            <p className="subtext">Les détails du Hackathon 2025 seront bientôt disponibles</p>
          </div>
          

          <p className="date">
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> 19 - 20 - 21 SEPTEMBRE 2025</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> Lieu à déterminer
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default HackathonPage;
