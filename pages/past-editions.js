import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


const PastEditionsPage = () => {
  return (
    <>
      <Head>
        <title>Past Editions - IndabaX Madagascar</title>
        <meta name="description" content="Past editions of IndabaX Madagascar" />
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
            <span className="highlight">PAST EDITIONS</span>
          </h1>

          <div className="editions-container">
            {/* 2024 Edition */}
            <div className="edition-card">
              <h2 className="edition-year">IndabaX Madagascar 2024</h2>
              <p className="edition-theme">
                <strong>Thème:</strong> L'IA pour le développement de Madagascar
              </p>
              <p className="edition-date">
                13 - 14 - 15 Décembre 2024
              </p>
                            <p className="edition-location">
                Rubik Services, Antananarivo
              </p>
              
              <div className="photos-link">
                <a href="https://www.facebook.com/profile.php?id=100093269167333&sk=photos" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="activity-link">
                  📸 Voir les photos de l'événement
                </a>
              </div>
              
              <div className="edition-activities">
                <h3>Activités principales:</h3>
                <div className="activity-item">
                  <h4>Keynotes</h4>
                  <p>Conférences inspirantes par des experts en IA</p>
                  <p>Thèmes: IA et Climat, PlantVillage, et plus encore</p>
                  <a href="https://www.facebook.com/photo.php?fbid=463878013397834&set=pb.100093269167333.-2207520000&type=3" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="activity-link">
                    Voir les intervenants
                  </a>
                </div>

                <div className="activity-item">
                  <h4>Workshops</h4>
                  <p>Ateliers pratiques et sessions interactives</p>
                  <p>Formation hands-on en machine learning et IA</p>
                </div>

                <div className="activity-item">
                  <h4>Posters</h4>
                  <p>Présentations de recherches et projets innovants</p>
                  <p>Le gagnant représentera Madagascar au Deep Learning Indaba 2025</p>
                </div>

                <div className="activity-item">
                  <h4>Ideathon</h4>
                  <p>Thème: AGENTS IA pour l'agriculture à Madagascar</p>
                  <p>Équipes de 4 personnes avec pitch de 15 minutes</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeg73UkAaQwc6oDjR2z7gLNrkqpDG7_IDCVDDO9jJjsXTqF4A/viewform?usp=sf_link" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="activity-link">
                    Voir l'Ideathon
                  </a>
                </div>
                
                <div className="activity-item">
                  <h4>Hackathon</h4>
                  <p>Storm Nowcasting Hackathon - IndabaX Madagascar 24</p>
                  <p>Nowcasting Thunderstorms in Nosy Be with Machine Learning</p>
                  <a href="https://www.kaggle.com/competitions/hackathon-DL-IndabaX-MDG-2024/data" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="activity-link">
                    Voir le Hackathon
                  </a>
                </div>
              </div>
            </div>

            {/* 2023 Edition */}
            <div className="edition-card">
              <h2 className="edition-year">IndabaX Madagascar 2023</h2>
              <p className="edition-theme">
                <strong>Thème:</strong> Madagascar entre dans l'ère de l'IA
              </p>
              <p className="edition-date">
                Décembre 2023
              </p>
              <p className="edition-location">
                Antananarivo, Madagascar
              </p>
            </div>

            {/* 2022 Edition */}
            <div className="edition-card">
              <h2 className="edition-year">IndabaX Madagascar 2022</h2>
              <p className="edition-theme">
                <strong>Thème:</strong> Démocratiser l'IA à Madagascar
              </p>
              <p className="edition-date">
                Décembre 2022
              </p>
              <p className="edition-location">
                Antananarivo, Madagascar
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .editions-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 3rem;
        }

        .edition-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .edition-year {
          color: var(--accent-color);
          font-size: 2rem;
          margin-bottom: 1rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .edition-theme {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .edition-date, .edition-location {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .edition-activities {
          margin-top: 2rem;
        }

        .edition-activities h3 {
          color: var(--accent-color);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .activity-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .activity-item h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .activity-item p {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .activity-link {
          display: inline-block;
          margin-top: 0.5rem;
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

                .activity-link:hover {
          color: var(--text-primary);
          text-decoration: underline;
        }

        .photos-link {
          margin: 1.5rem 0;
          text-align: center;
        }

        .photos-link .activity-link {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 209, 102, 0.1);
          border: 1px solid var(--accent-color);
          border-radius: 25px;
          font-size: 1.1rem;
        }

        .photos-link .activity-link:hover {
          background: rgba(255, 209, 102, 0.2);
        }

        @media (max-width: 768px) {
          .edition-card {
            padding: 1.5rem;
          }

          .edition-year {
            font-size: 1.5rem;
          }

          .edition-theme {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default PastEditionsPage; 