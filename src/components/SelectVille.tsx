import { villes } from '../data/meteoData';

type SelectVilleProps = {
  villeSelectionnee: string;     
  onVilleChange: (ville: string) => void;  
};

function SelectVille({ villeSelectionnee, onVilleChange }: SelectVilleProps) {
  return (
    <div className="select-container">
					<label htmlFor="ville-select">Choisir une ville :</label>
					<select
						id="ville-select"
							value={villeSelectionnee}
							onChange={(e) => onVilleChange(e.target.value)}
							className="ville-select"
						>
						 {villes.map((ville) => (
								<option key={ville} value={ville}>
									{ville}
								</option>
							))}
				</select>
    </div>
  );
}

export default SelectVille;