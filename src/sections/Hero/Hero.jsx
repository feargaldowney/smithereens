import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import LinkedInLight from "../../assets/linkedin-light.svg";
import LinkedInDark from "../../assets/linkedin-dark.svg";
import GithubLight from "../../assets/github-light.svg";
import GithubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const LinkedInIcon = theme === 'light' ? LinkedInLight : LinkedInDark;
  const GithubIcon = theme === 'light' ? GithubLight : GithubDark;


  return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
              <img 
                className={styles.hero} 
                src={heroImg} 
                alt="profile picture of Feargal Downey"
                
              />
              <img 
                className ={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
              />
            </div>
            <div className="{styles.info}">
                <h1>
                    Feargal 
                    <br />
                    Downey
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/feargal-downey/">
                        <img src={LinkedInIcon} alt="LinkedIn Icon"/>
                    </a>
                    <a href="https://github.com/feargaldowney">
                        <img src={GithubIcon} alt="Github Icon"/>
                    </a>
                </span>
                <p className={styles.description}>
                    Short about me.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>

            </div>
        </section>
  );
}

export default Hero