import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const DeepLearningIndabaPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>IndabaX Madagascar 2025</title>
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
            L'<span className="highlight">IA</span> EN ACTION POUR<br/>
            RÉVOLUTIONNER L'<span className="highlight">ÉDUCATION</span><br/>
            ET LA <span className="highlight">SCIENCE</span> À MADAGASCAR
          </h2>

          <p className="date">
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> 19 - 20 - 21 SEPTEMBRE 2025</p>

          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> Lieu à déterminer
          </p>

          <button className="stayTuned">
            STAY TUNED
          </button>

          <div className="map-container">
            <div className="comingSoon">
              <h3>Lieu de l'événement</h3>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeepLearningIndabaPage;
