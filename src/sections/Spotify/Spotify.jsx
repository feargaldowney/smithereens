import styles from './SpotifyStyles.module.css';

function Spotify() {
  return (
    <section id='spotify' className={styles.container}>
        <h2 className='sectionTitle'>Our tunes</h2>
        <iframe className={styles.iframe} src="https://open.spotify.com/embed/artist/6xC6vekNkKWw5rP5yM9GJ6?utm_source=generator"  allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>  
    </section>
    );
    };

export default Spotify