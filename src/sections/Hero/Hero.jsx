import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagram from '../../assets/instagram.png';
import spotify from '../../assets/spotify.png';

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  return <section id="hero" className={styles.container}>
        <div className="{styles.info}">
          <div className={styles.colorModeContainer}>
            <img 
              className ={styles.colorMode}
              src={themeIcon} 
              alt="Color mode icon" 
              onClick={toggleTheme}
            />
          </div>
            <h1>
                Smithereens
            </h1>
            <h2>A classical thing to be blown into.</h2>
            <span>
                <a href="https://www.instagram.com/pherg__/">
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