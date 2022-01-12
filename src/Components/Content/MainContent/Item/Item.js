import React from "react";
import Descritpiton from "./Description";
import ItemTitle from "./ItemTitle";
import Picture from "./Picture";
import Subtitle from "./Subtitle";

function Item(props){
    return(
        <div className="item">
            <ItemTitle itemTitle={props.grosTitre}/>
            <Subtitle subTitle={props.soustitre}/>
            <Picture src={props.src} alt={props.alt}/>
            <Descritpiton description={props.decris}/>
        </div>
    );
};

export default Item