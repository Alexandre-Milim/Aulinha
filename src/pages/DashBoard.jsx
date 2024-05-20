import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListaProfessores.css'
import NavBar from "../components/NavBar";
import '../components/NavBar.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const DashBoard = () => {
    return (
        <div className="verticalNav">
            <NavBar></NavBar>
        </div>
    );
};

export default DashBoard;
