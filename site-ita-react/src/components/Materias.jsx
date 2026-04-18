import './Materias.css';
import { useState } from 'react';
import Tela from './Tela';

function Materias() {
    const [modalType, setModalType] = useState(null);

    return(
        <section id="materias-container" className="materias_container">
            <div className="corner-decor top-left"></div>
            <div className="corner-decor top-right"></div>
            <h1 className="materias_titulo">Programa de Materias</h1>
            
        <div className="materias_areas">
            {/* Bloco Química */}
            <div className="materia_card quim_container">
                <div className="card_header">
                    <span className="card_icon">🧪</span>
                    <h2>QUÍMICA</h2>
                </div>
                <p>Do átomo às reações complexas: a disciplina que estuda a matéria, sua composição e suas propriedades.</p>
                <button className="btn_detalhes" onClick={() => setModalType("quimica")}>ACESSAR PROGRAMA</button>
            </div>

            {/* Bloco Física */}
            <div className="materia_card fis_container">
                <div className="card_header">
                    <span className="card_icon">🚀</span>
                    <h2>FÍSICA</h2>
                </div>
                <p>Da mecânica clássica ao eletromagnetismo: as leis que governam a energia e o movimento do universo.</p>
                <button className="btn_detalhes" onClick={() => setModalType("fisica")}>ACESSAR PROGRAMA</button>
            </div>

            {/* Bloco Matemática */}
            <div className="materia_card mat_container">
                <div className="card_header">
                    <span className="card_icon">📐</span>
                    <h2>MATEMÁTICA</h2>
                </div>
                <p>Da álgebra à geometria: a linguagem lógica que fundamenta os pilares da engenharia exata.</p>
                <button className="btn_detalhes" onClick={() => setModalType("matematica")}>ACESSAR PROGRAMA</button>
            </div>

            {/* Bloco Linguagens */}
            <div className="materia_card ling_container">
                <div className="card_header">
                    <span className="card_icon">📚</span>
                    <h2>LINGUAGENS</h2>
                </div>
                <p>Da gramática à interpretação textual: o domínio da comunicação e da estruturação do pensamento crítico.</p>
                <button className="btn_detalhes" onClick={() => setModalType("linguagens")}>ACESSAR PROGRAMA</button>
            </div>
        </div>
        
        <button id="btn-programa" onClick={() => window.open("https://www.vestibular.ita.br/programa_2026.pdf", "_blank")}>PROGRAMA DETALHADO</button>
        <Tela modalType={modalType} onClose={() => setModalType(null)} />

        </section>
    );
}

export default Materias;
