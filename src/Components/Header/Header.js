import React from "react";
import Title from "./Title";
import Baseline from "./Baseline";

function Header(){
    return (
    <div className="header">
        <Title titre="My Blog"/>
        <Baseline soustitre="An awesome baseline"/>
    </div>
    );
;};

export default Header