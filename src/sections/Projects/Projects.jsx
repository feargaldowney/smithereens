import styles from './ProjectsStyles.module.css'
import gameRoom from '../../assets/game-room.png';
import viberr from '../../assets/viberr.png';
import freshBrgr from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';



function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={gameRoom}
            link="https://github.com/feargaldowney/finalyearproject"
            h3="Helping Tim to Talk"
            p="Gamified Speech Therapy App"
            />
            <ProjectCard 
            src={viberr} 
            link="https://github.com/feargaldowney/Jammming"
            h3="Jammming"
            p="Spotify Playlist Creator Web App"
            />
            <ProjectCard 
            src={freshBrgr} 
            link="https://github.com/feargaldowney/ravenous"
            h3="Ravenous"
            p="Restauraunt Suggestion Web App"
            />
        </div>
    </section>
  );
}

export default Projects