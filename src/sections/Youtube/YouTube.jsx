import styles from './YouTubeStyles.module.css';

function YouTube() {
  return (
    <section id='youtube' className={styles.container}>
        <h2 className='sectionTitle'>Our videos</h2>
        <iframe className={styles.iframe} src="https://www.youtube.com/embed/4bTrGqf2wH4?si=X_6byinsMpBv4x0v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
        
    </section>
    );
    };

export default YouTube;