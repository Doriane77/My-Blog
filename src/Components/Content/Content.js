import React from "react";
import MainContent from "./MainContent/Item/MainContent";
import SideContent from "./SideContent/SideContent";

function Content(){
    return (
        <div className="box-content">
            <div className="box-content1">
                <MainContent/>
            </div>
           <div className="box-content2">
                <SideContent/>
           </div>
        </div>
        
    );
};

export default Content