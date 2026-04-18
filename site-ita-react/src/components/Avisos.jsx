import React from 'react';
import './Avisos.css';
import aviaoEsquerda from './Imagens/aviao-esq.png';

export default function Avisos() {
    const listaAvisos = [
        { data: "15/06/2025", titulo: "ABERTURA DAS INSCRIÇÕES", texto: "Inscrições abertas para o Concurso de Admissão 2027. Leia o edital atentamente." },
        { data: "02/09/2025", titulo: "LOCAIS DE PROVA", texto: "Cartão de confirmação de inscrição liberado. Verifique seu local de prova." },
        { data: "10/10/2025", titulo: "GABARITO PRELIMINAR", texto: "Gabaritos da 1ª Fase já estão disponíveis para consulta no sistema." },
        { data: "20/10/2025", titulo: "CONVOCAÇÃO 2ª FASE", texto: "Lista de candidatos aptos para a 2ª Fase publicado." }
    ];

    return (
        <section className="avisos-container">
            <div className="estrelas-animadas-avisos"></div>

            {/* Aviões Decorativos  */}
            <img 
                src={aviaoEsquerda}
                alt="Avião Esquerdo" 
                className="aviao-decorativo aviao-esquerdo" 
            />
            <img 
                src={aviaoEsquerda}
                alt="Avião Direito" 
                className="aviao-decorativo aviao-direito" 
            />

            {/* Painel Central */}
            <div className="painel-avisos">
                <div className="painel-header">
                    <span className="blinking-dot"></span>
                    <h2>ATUALIZAÇÕES DO EXAME</h2>
                </div>

                <div className="lista-avisos">
                    {listaAvisos.map((aviso, index) => (
                        <div className="aviso-item" key={index}>
                            <div className="aviso-data">
                                <span>[{aviso.data}]</span>
                            </div>
                            <div className="aviso-conteudo">
                                <h4>{aviso.titulo}</h4>
                                <p>{aviso.texto}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}