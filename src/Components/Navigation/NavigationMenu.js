import React from "react";
import Link from "./Link";

function NavigationMenu(){
    return (
    <div className="barre-menu">
        <div className="col1">
            <Link menu="Nav"/>
            <Link menu="Nav"/>
            <Link menu="Nav"/>
        </div>
        
        <div className="col2">
            <Link menu="Nav"/>
        </div>
        
    </div>
    );
};

export default NavigationMenu