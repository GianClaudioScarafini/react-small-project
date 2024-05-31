import React from "react";

import {

    DiReact,

    DiBootstrap,

} from "react-icons/di";



function Intro() {
    return (
        <section className="section">
            <h1>Welcome to Gian Claudio website</h1>
            <p>
                This is a simple example of a React component.
            </p>
            <h3 className="icons">

                <DiReact />
                <DiBootstrap />
            </h3>
        </section>
    );
}

export default Intro;