import styles from './UpcomingGigs.module.css';
import { useTheme } from '../../common/ThemeContext';

function UpcomingGigs() {
  const { theme } = useTheme();  // Get the current theme

  const gigs = [
    { date: 'October 31, 2024', venue: 'Kino Events House', location: 'Cork, Ireland', ticketLink: 'https://www.eventbrite.ie/e/les-amazones-dafrique-guinness-cork-jazz-festival-tickets-915170980037?aff=ebdssbcitybrowse' },
    // { date: 'November 10, 2024', venue: 'Music Arena', location: 'Berlin, Germany', ticketLink: 'https://www.eventbrite.ie/e/les-amazones-dafrique-guinness-cork-jazz-festival-tickets-915170980037?aff=ebdssbcitybrowse' },
    // { date: 'December 5, 2024', venue: 'Rock Palace', location: 'New York, USA', ticketLink: 'https://www.eventbrite.ie/e/les-amazones-dafrique-guinness-cork-jazz-festival-tickets-915170980037?aff=ebdssbcitybrowse' },
  ];

  return (
    <section id='upcoming-gigs' className={styles.container}>
      <h1 className='sectionTitle'>Upcoming Gigs</h1>
      <div className={styles.gigList}>
        {gigs.map((gig, index) => (
          <div key={index} className={styles.gigItem}>
            <p>{gig.date}</p>
            <p>{gig.venue}</p>
            <p>{gig.location}</p>
            <a href={gig.ticketLink} target="_blank" rel="noopener noreferrer" className={styles.ticketButton}>
              Get Tickets
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingGigs;
