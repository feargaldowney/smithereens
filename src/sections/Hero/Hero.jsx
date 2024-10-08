import styles from "./HeroStyles.module.css";
import instagram from '../../assets/instagram.png';
import spotify from '../../assets/spotify.png';

function Hero() {
  return <section id="hero" className={styles.container}>
        <div className="{styles.info}">
            <h1>
                Smithereens
            </h1>
            <h3>A classic thing to be blown into.</h3>
            <span>
                <a href="https://www.instagram.com/smithereeeeeeeens/">
                    <img src={instagram} alt="Instagram Icon"/>
                </a>
                <a href="https://open.spotify.com/artist/6xC6vekNkKWw5rP5yM9GJ6">
                    <img src={spotify} alt="spotify Icon"/>
                </a>
            </span>
            <span>
              <p className={styles.description}>
                  5-Piece Jazz/Rock/Funk Fusion band from Cork, Ireland.
              </p>
            </span>
        </div>
      </section>
}

export default Hero