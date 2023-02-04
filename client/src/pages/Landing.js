import React from 'react';
import LandingBG from '../components/LandingBG';

const styles = {
  content: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    height: '60%',
  },
  section: {
    width: '45%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
};

const Landing = () => {
  return (
    <LandingBG>
      <div style={styles.content}>
        <div style={styles.section}>
          <h2>Shop</h2>
          <p>Explore our collection of keychains and art prints</p>
          <button>Visit Shop</button>
        </div>
        <div style={styles.section}>
          <h2>About</h2>
          <p>Learn more about the artist and their work</p>
          <button>Read More</button>
        </div>
      </div>

    </LandingBG>
  );
};

export default Landing;
