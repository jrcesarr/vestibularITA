import React from 'react';
import './Galeria.css';
import Galeria1 from './Imagens/Galeria1.jpeg';
import Galeria2 from './Imagens/Galeria2.jpeg';
import Galeria3 from './Imagens/Galeria3.jpeg';
import Galeria4 from './Imagens/Galeria4.jpeg';
import Galeria5 from './Imagens/Galeria5.jpeg';

export default function Galeria() {
    return (
        <section className="galeria_container">
            <div className="galeria_header">
                <h2 className="galeria_titulo">ITA: O BERÇO DA EXCELÊNCIA</h2>
                <p className="galeria_subtitulo">
                    Onde mentes brilhantes convergem para redefinir o futuro da engenharia e da tecnologia no Brasil.
                </p>
                <div className="linha_decorativa"></div>
            </div>

            <div className="galeria_grid">
                <div className="galeria_item destaque">
                    <img src={Galeria1} alt="Foguete" />
                </div>
                
                {/* Imagens Menores */}
                <div className="galeria_item">
                    <img src={Galeria2} alt="ITA Aerodesign" />
                </div>
                <div className="galeria_item">
                    <img src={Galeria3} alt="Formula ITA" />
                </div>
                <div className="galeria_item">
                    <img src={Galeria4} alt="ITA Cube" />
                </div>
                <div className="galeria_item">
                    <img src={Galeria5} alt="ITA Rocket" />
                </div>
            </div>
        </section>
    );
}