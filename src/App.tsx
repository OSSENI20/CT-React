import { useState, useCallback } from 'react';
import SelectVille from './components/SelectVille';
import CarteMeteo from './components/CarteMeteo';
import MessageChargement from './components/MessageChargement';
import { weatherData } from './data/meteoData';
import type { WeatherInfo } from './types/meteo';
import './App.css';

function App() {
  const [selectedVille, setSelectedVille] = useState<string>(Object.keys(weatherData)[0]);
  const [meteo, setMeteo] = useState<WeatherInfo | null>(weatherData[selectedVille]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const nouvellesDonnees = weatherData[selectedVille];
    const dataAvecVariation = {
  ...nouvellesDonnees,
};
      
      setMeteo(dataAvecVariation);
      setIsLoading(false);
    }, 1500);
  }, [selectedVille]);
  const handleVilleChange = (ville: string) => {
    setSelectedVille(ville);
    setMeteo(weatherData[ville]);
    setIsLoading(false); 
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌤️ Dashboard Météo</h1>
        <p>Consultez la météo des grandes villes </p>
      </header>
      
      <main className="app-main">
        <div className="controles">
          <SelectVille 
            villeSelectionnee={selectedVille}
            onVilleChange={handleVilleChange}
          />
          
          <button 
            onClick={handleRefresh} 
            className="btn-actualiser"
            disabled={isLoading}
          >
            {isLoading ? 'Rechargement...' : 'Actualiser'}
          </button>
        </div>
        
        {isLoading ? (
          <MessageChargement />
        ) : (
          meteo && <CarteMeteo ville={selectedVille} meteo={meteo} />
        )}
      </main>
    </div>
  );
}

export default App;