import type { WeatherInfo } from '../types/meteo';

type CarteMeteoProps = {
  ville: string;
  meteo: WeatherInfo;
};

const getIcone = (condition: string): string => {
  switch (condition) {
    case 'sunny':
      return '☀️';
    case 'cloudy':
      return '☁️';
    case 'rainy':
      return '🌧️';
    case 'snowy':
      return '❄️';
    default:
      return '🌈';
  }
};

const getMessage = (condition: string): string => {
  switch (condition) {
    case 'sunny':
      return 'sunny ';
    case 'cloudy':
      return 'cloudy';
    case 'rainy':
      return 'rainy';
    case 'snowy':
      return 'snowy';
    default:
      return 'Conditions variables';
  }
};

function CarteMeteo({ ville, meteo }: CarteMeteoProps) {
  const { temp, humidity, condition } = meteo;
  const icone = getIcone(condition);
  const message = getMessage(condition);

  return (
    <div className="carte-meteo">
      <div className="ville-nom">
        <h2>{ville}</h2>
        <span className="icone-principale">{icone}</span>
      </div>
      
      <div className="infos-meteo">
        <div className="info">
          <span className="label"> Température :</span>
          <span className="valeur">{temp}°C</span>
        </div>
        <div className="info">
          <span className="label">Humidité :</span>
          <span className="valeur">{humidity}%</span>
        </div>
        <div className="info">
          <span className="label">Condition :</span>
          <span className="valeur">{message}</span>
        </div>
      </div>
    </div>
  );
}

export default CarteMeteo;