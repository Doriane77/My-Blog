import React from "react";

function Picture(props){
    return <div className="picture">
        <img src={props.src} alt={props.alt} />
    </div>
};

export default Picture