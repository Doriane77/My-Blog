import React from "react";
import Item from "./Item";


function MainContent(){
    return (
        <div className="main-content">
            <Item grosTitre="Tesla Model 3"
            soustitre="caractéristique"
            src="./image/tesla-model3.jpg" alt="model 3"
            decris="La sécurité a été l'aspect le plus important lors de la conception de la Model 3. Sa structure en métal allie acier et aluminium, pour une résistance maximale dans toutes les zones. Soumise à un test de résistance du toit, la Model 3 a supporté quatre fois son propre poids, malgré son toit entièrement en verre. Ce poids équivaut à celui de deux éléphants d'Afrique adultes."
        />
            <Item 
            grosTitre="Tesla Model S"
            soustitre="caractéristique"
            src="./image/tesla-model-S.jpg" alt="model S"
            decris="Avec la plus grande autonomie et l'accélération la plus rapide de tous les véhicules électriques en production, la Model S Plaid est la berline la plus performante jamais conçue. Les groupes motopropulseurs des Model S, combinés à une nouvelle architecture de batterie, peuvent réaliser des lancements répétés avec des performances constantes."
            />
        </div>
        
    );
};

export default MainContent