import React from 'react';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

const LoadingPage = () => {
    return (

        <div className="container">
            <div className="divCenter">

                <Dots
                    color="#0000ff"
                    size="100" />
            </div>
        </div>
    )
}

export default LoadingPage;