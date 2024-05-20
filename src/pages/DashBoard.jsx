import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListaProfessores.css'
import NavBar from "../components/NavBar";
import '../components/NavBar.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DashBoard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="verticalNav">
            <NavBar></NavBar>

            <div>
                <h1 id="H1">Olá! Explore a melhor gestão escolar!</h1>

                <h2>Carrossel</h2>
                <Slider {...settings}>
                    <div>
                        <img src="/carrosel.png"/>
                    </div>
                    <div>
                        <img src="/carrosel.png"/>
                    </div>
                    <div>
                        <img src="/carrosel.png"/>
                    </div>

                </Slider>
            </div>
        </div>
    )
        ;
};

export default DashBoard;
