import './Materias.css';
import React, { useState } from 'react';

function ProgramaMaterias() {
  // Estado para controlar qual matéria está aberta (null = fechado)
  const [materiaAtiva, setMateriaAtiva] = useState(null);

  // Dados das matérias (você pode expandir isso)
  const infoMaterias = {
    quimica: { titulo: "QUÍMICA", conteudo: "Termoquímica, Estequiometria, Orgânica..." },
    fisica: { titulo: "FÍSICA", conteudo: "Mecânica Newtoniana, Eletromagnetismo..." },
    // adicione as outras...
  };

  return (
    <section className="materias_container" id="materias-container">
      <div className="materias_areas">
        {/* Exemplo para um Card (Repita para os outros) */}
        <div className="materia_card">
          <h2>QUÍMICA</h2>
          <button className="btn_detalhes" onClick={() => setMateriaAtiva(infoMaterias.quimica)}>
            ACESSAR PROGRAMA
          </button>
        </div>
        
        {/* Repita para Física, Mat, etc, mudando o objeto no onClick */}
      </div>

      {/* RENDERIZAÇÃO CONDICIONAL DO MODAL */}
      {materiaAtiva && (
        <div className="modal_overlay" onClick={() => setMateriaAtiva(null)}>
          <div className="modal_conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="btn_fechar" onClick={() => setMateriaAtiva(null)}>X</button>
            <h1>{materiaAtiva.titulo}</h1>
            <div className="texto_programa">
              <p>{materiaAtiva.conteudo}</p>
              {/* Aqui você pode colocar uma lista detalhada ou um PDF */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Materias() {
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
                <p>Do átomo às reações complexas: o guia completo da matéria mais imprevisível do ITA.</p>
                <button className="btn_detalhes">ACESSAR PROGRAMA</button>
            </div>

            {/* Bloco Física */}
            <div className="materia_card fis_container">
                <div className="card_header">
                    <span className="card_icon">🚀</span>
                    <h2>FÍSICA</h2>
                </div>
                <p>Mecânica, Termodinâmica e Óptica: domine os pilares que sustentam a engenharia aeroespacial.</p>
                <button className="btn_detalhes">ACESSAR PROGRAMA</button>
            </div>

            {/* Bloco Matemática */}
            <div className="materia_card mat_container">
                <div className="card_header">
                    <span className="card_icon">📐</span>
                    <h2>MATEMÁTICA</h2>
                </div>
                <p>A base de tudo. Geometria, Álgebra e Cálculo com o nível de profundidade exigido em São José.</p>
                <button className="btn_detalhes">ACESSAR PROGRAMA</button>
            </div>

            {/* Bloco Linguagens */}
            <div className="materia_card ling_container">
                <div className="card_header">
                    <span className="card_icon">📚</span>
                    <h2>LINGUAGENS</h2>
                </div>
                <p>Português, Inglês e Literatura: a interpretação é a chave para não cair nas pegadinhas da banca.</p>
                <button className="btn_detalhes">ACESSAR PROGRAMA</button>
            </div>
        </div>
        </section>
    );
}

export default Materias;
