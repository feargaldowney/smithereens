import styles from './GalleryStyles.module.css'
import PhotoCard from '../../common/PhotoCard';
import isaac from '../../assets/photos/isaac.jpeg';
import franek2 from '../../assets/photos/franek2.jpg';
import SammyDrums1 from '../../assets/photos/SammyDrums1.jpeg';
import SammyDrums2 from '../../assets/photos/SammyDrums2.jpeg';
import SamSax from '../../assets/photos/SamSax.jpeg';


function Gallery() {
  return (
    <section id='gallery' className={styles.container}>
        <h1 className="sectionTitle">Gallery</h1>
        <div className={styles.GalleryContainer}>
            { <PhotoCard 
            src={franek2}
            />
            }
            { <PhotoCard 
            src={SammyDrums1}         
            />
            }
            { <PhotoCard 
            src={SammyDrums2}

            />
            }
            { <PhotoCard 
            src={SamSax}
            />
            }
            { <PhotoCard 
            src={isaac}
            // link="https://github.com/feargaldowney/finalyearLiveGigs"
            // h3="Helping Tim to Talk"
            // p="Gamified Speech Therapy App"
            />
            }
            
        </div>
    </section>
  );
}

export default Gallery