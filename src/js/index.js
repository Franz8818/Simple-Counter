//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let second0 = 0
let second1 = 0
let minute0 = 0
let minute1 = 0
let hour0 = 0
let hour1 = 0


setInterval(() => {
            second0++
            if (second0 > 9) {
                second0 = 0
                second1++
                if (second1 > 5) {
                    second1 = 0
                    minute0++
                    if (minute0 > 9) {
                        minute0 = 0
                        minute1++
                        if (minute1 > 5) {
                            minute1 = 0
                            hour0++
                            if (hour0 > 9) {
                                hour0 = 0
                                hour1++
                                if (hour1 > 3) {
                                    hour1 = 0
                                }
                            }
                        }
                    }
                }
            }
            //render your react application
            ReactDOM.render( < Home second0 = {
                    second0
                }
                second1 = {
                    second1
                }
                minute0 = {
                    minute0
                }
                minute1 = {
                    minute1
                }
                hour0 = {
                    hour0
                }
                hour1 = {
                    hour1
                }
                /> , document.querySelector("#app"));

            }, 1000)