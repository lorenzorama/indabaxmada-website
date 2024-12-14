import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SpeakersPage = () => {
  return (
    <>
      <Head>
        <title>Speakers - IndabaX Madagascar 2024</title>
        <meta name="description" content="Speakers for IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <Header />
      <div className="comingSoon">
        <h1>Speakers</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default SpeakersPage;
