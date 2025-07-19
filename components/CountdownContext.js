import React, { createContext, useState, useEffect, useContext } from 'react';

const CountdownContext = createContext();

export const useCountdown = () => useContext(CountdownContext);

export const CountdownProvider = ({ children }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const eventDate = new Date('2025-09-19T00:00:00'); // Set the target event date
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;

      // Time calculations
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${months} mois, ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`);

      // If the countdown is over
      if (diff < 0) {
        setCountdown("The event has started!");
      }
    };

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <CountdownContext.Provider value={countdown}>
      {children}
    </CountdownContext.Provider>
  );
};
