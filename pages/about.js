import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>À propos - IndabaX Madagascar 2025</title>
        <meta name="description" content="À propos d'IndabaX Madagascar 2025" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <Header />
      <div className="about-section">
        <h1>À propos d'IndabaX Madagascar</h1>
        <div className="details">
          <p>IndabaX Madagascar est fier de faire partie de la famille <a href="https://deeplearningindaba.com" target="_blank" rel="noopener noreferrer">Deep Learning Indaba</a>, servant d'extension malgache à cette remarquable communauté africaine d'IA.</p>
          
          <h2>Qu'est-ce que Deep Learning Indaba ?</h2>
          <p>Deep Learning Indaba est une organisation prestigieuse dédiée au renforcement de l'apprentissage automatique et de l'intelligence artificielle en Afrique. Leur mission est de s'assurer que les Africains ne sont pas simplement des observateurs de l'avancement de l'IA, mais des acteurs actifs et propriétaires de ces innovations technologiques.</p>
          
          <h2>Notre rôle en tant qu'IndabaX Madagascar</h2>
          <p>En tant que chapitre malgache d'IndabaX, nous nous engageons à :</p>
          <ul>
            <li>Développer le leadership local en IA et en apprentissage automatique</li>
            <li>Créer une communauté durable d'expertise en IA à Madagascar</li>
            <li>Favoriser le partage des connaissances et les applications pratiques de l'IA</li>
            <li>Soutenir la croissance de la recherche et du développement en IA dans notre région</li>
          </ul>

          <h2>Le parcours d'IndabaX</h2>
          <p>Le programme IndabaX, lancé en 2018, est passé du soutien de 13 pays à un réseau impressionnant couvrant 47 pays en 2024. Cette croissance remarquable démontre le succès du programme dans le renforcement des communautés d'apprentissage automatique à travers l'Afrique.</p>
          
          <h2>Notre Vision</h2>
          <p>Nous visons à répondre à deux objectifs principaux :</p>
          <ul>
            <li>Augmenter la participation et la contribution malgache aux avancées en IA et en apprentissage automatique</li>
            <li>Promouvoir la diversité et l'inclusion dans ces domaines scientifiques</li>
          </ul>

          <p>À travers nos événements et activités, nous nous concentrons sur :</p>
          <ul>
            <li>La diffusion des connaissances techniques de pointe</li>
            <li>La création de nouvelles connexions de recherche</li>
            <li>La suppression des cloisonnements dans la communauté de recherche</li>
            <li>La promotion de la compréhension des opportunités de carrière locales</li>
            <li>La construction d'une communauté d'apprentissage automatique plus représentative et inclusive</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
