import React from 'react';
import PinIndexContainer from "../pins/pin_index_container";

class MainHome extends React.Component{

    render(){

        return (

        <div className="main-home-page">
            <PinIndexContainer shuffle={true}/>       
        </div>
        );
    }
}

export default MainHome;