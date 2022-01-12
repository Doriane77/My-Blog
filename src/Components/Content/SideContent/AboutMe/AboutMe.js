import React from "react";
import Description from "./Description";
import Title from "./Title";
import ModelX from "./image/tesla-model-X.jpg";
<image />

function AboutMe(){
    return (
        <div>
            <Title name="Tesla Model X"/>
            <img src={ModelX} alt="Tesla Model X" />
            <Description decrit="Avec la plus grande puissance et l'accélération la plus rapide de tous les SUV, le Model X Plaid est le SUV le plus performant jamais produit. Les groupes motopropulseurs des Model X, combinés à une nouvelle architecture de batterie, peuvent délivrer un couple immédiat à n'importe quelle vitesse."/>
        </div>
    );
};
export default AboutMe