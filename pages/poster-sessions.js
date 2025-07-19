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
      <div className="comingSoon">
        <h1>Poster Sessions</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default PosterSessionsPage;
