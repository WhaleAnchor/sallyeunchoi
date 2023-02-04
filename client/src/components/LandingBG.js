import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import shopside from '../assets/shopside.jpg';
import aboutside from '../assets/aboutside.jpg';


const LandingBG = () => {
    const [leftHover, setLeftHover] = useState(false);
    const [rightHover, setRightHover] = useState(false);
    const navigate = useNavigate();
  
    return (
        <div style={bgContainerStyle}>
            <div
            onClick={() => navigate("/shop")}
            onMouseEnter={() => setLeftHover(true)}
            onMouseLeave={() => setLeftHover(false)}
            style={{
                ...leftBgStyle,
                backgroundImage: `url(${shopside})`,
                opacity: leftHover ? 0.4 : 1,
            }}
            >
            <div
                style={{
                ...leftTextStyle,
                opacity: leftHover ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                }}
            >
                <button>Go to Shop</button>
            </div>
            </div>
            <div
            onClick={() => navigate("/about")}
            onMouseEnter={() => setRightHover(true)}
            onMouseLeave={() => setRightHover(false)}
            style={{
                ...rightBgStyle,
                backgroundImage: `url(${aboutside})`,
                opacity: rightHover ? 0.4 : 1,
            }}
            >
            <div
                style={{
                ...rightTextStyle,
                opacity: rightHover ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                }}
            >
                <button>Go to About</button>
            </div>
            </div>
        </div>
    );
  };
  
const bgContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
  
const leftBgStyle = {
    position: "absolute",
    left: 0,
    width: "50%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "opacity 0.5s ease-in-out",
};
  
const rightBgStyle = {
    position: "absolute",
    right: 0,
    width: "50%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "opacity 0.5s ease-in-out",
};
  
const leftTextStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
};

const rightTextStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
};

export default LandingBG;