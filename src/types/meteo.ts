export type Condition = 'sunny' | 'cloudy' | 'rainy' | 'snowy';
export interface WeatherInfo {
  temp: number;        
  humidity: number;   
  condition: Condition; 
}
export type WeatherData = Record<string, WeatherInfo>;