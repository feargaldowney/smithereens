import './App.css'
import Hero from './sections/Hero/Hero';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Gallery from './sections/Gallery/Gallery';
import UpcomingGigs from './sections/UpcomingGigs/UpcomingGigs';
import Spotify from './sections/Spotify/Spotify';
import YouTube from './sections/Youtube/YouTube';

function App() {

  return (
    <>
    <Hero />
    <UpcomingGigs />
    <Spotify />
    <YouTube />
    <Gallery />
    <Contact />
    <Footer />
    </>
  )
}

export default App;
