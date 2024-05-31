import React from "react";
import "./Intro.css";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from "gsap";
import { element } from "three/examples/jsm/nodes/Nodes.js";
import { useState, useEffect } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";




function Intro() {
    //create countdowns

    //let name = "Gian Claudio";

    const [name, setName] = useState("test")





    const myfuntion = () => {
        if (name === "Gian Claudio") {
            setName("Test");
        } else {
            setName("Gian Claudio");
        }
    }




    return (
        <section className="section1">
            <h1>Welcome to Gian Claudio website</h1>
            <p>
                This is a simple example of a React component.
            </p>
            <div id="canvas"></div>
            <p>{name}</p>

            <button onClick={myfuntion}>Click me</button>
            {/* download my resume that is located here:Gian-Claudio-Scarafini-FlowCV-Resume-20240527.pdf*/}
            <a href="Gian-Claudio-Scarafini-FlowCV-Resume-20240527.pdf" download>
                <button onClick={myfuntion}>Click me</button>
            </a>
            <h3>
                Lets go for a <FaBeer />?
            </h3>
        </section>

    );
}

export default Intro;