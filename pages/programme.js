import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ProgrammePage = () => {
  return (
    <>
      <Head>
        <title>Programme - IndabaX Madagascar 2025</title>
        <meta name="description" content="Programme for IndabaX Madagascar 2025" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <Header />
      <div className="comingSoon">
        <h1>Programme</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default ProgrammePage;
