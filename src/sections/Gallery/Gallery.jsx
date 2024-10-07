import styles from './GalleryStyles.module.css'
import PhotoCard from '../../common/PhotoCard';
import isaac from '../../assets/photos/isaac.jpg';
import Noah from '../../assets/photos/Noah.jpg';
import Sammy from '../../assets/photos/Sammy.jpeg';
import SamSax from '../../assets/photos/SamSax.jpeg';
import Paidi from '../../assets/photos/Paidi.jpg';

function Gallery() {
  return (
    <section id='gallery' className={styles.container}>
        <h1 className="sectionTitle">Gallery</h1>
        <div className={styles.GalleryContainer}>
            { <PhotoCard 
            src={SamSax}
            />
            }
            { <PhotoCard 
            src={Paidi}         
            />
            }
            { <PhotoCard 
            src={Noah}

            />
            }
            { <PhotoCard 
            src={isaac}
            />
            }
            { <PhotoCard 
            src={Sammy}
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