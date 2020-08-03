import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'; /*nao posso simplismente passar a rota da imagem na linha img do html, o meu react nao entende isso, por isso tenho q importar e passar como 'objeto' na linha do html*/
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import "./index.css"

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logoProffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="imgPlataforma" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;