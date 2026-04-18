import React from 'react';
import './Tela.css';

export default function Tela({ modalType, onClose }) {
    if (!modalType) return null;

    const bancoDeDados = {
        quimica: {
            titulo: "QUÍMICA 🧪",
            topicos: [
            "Teoria Atômica: Modelos, Radioatividade e Partículas",
            "Ligações Químicas: Geometria, Polaridade e Forças Intermoleculares",
            "Estequiometria: Leis dos Gases, Mol e Cálculos de Reação",
            "Termoquímica, Cinética e Equilíbrio Químico",
            "Eletroquímica: Pilhas, Potenciais e Eletrólise",
            "Química Orgânica: Funções, Isomeria e Reações"
        ]
        },
        fisica: {
            titulo: "FÍSICA 🚀",
            topicos: [
            "Mecânica: Cinemática Vetorial e Dinâmica de Projéteis",
            "Leis da Conservação: Energia, Impulso e Momento Linear",
            "Termologia: Teoria Cinética dos Gases e Termodinâmica",
            "Óptica e Ondulatória: Interferência, Difração e Polarização",
            "Eletromagnetismo: Campos, Indução e Circuitos",
            "Física Moderna: Relatividade Restrita e Átomo de Bohr"
        ]        
        },
        matematica: {
            titulo: "MATEMÁTICA 📐",
            topicos: [
            "Conjuntos e Números Complexos (Fórmula de Moivre)",
            "Funções: Injetoras, Exponenciais, Logarítmicas e Modulares",
            "Polinômios e Equações Algébricas",
            "Combinatória, Probabilidade e Binômio de Newton",
            "Matrizes, Determinantes e Sistemas Lineares",
            "Geometria Analítica, Plana e Espacial"
        ]
        },
        linguagens: {
            titulo: "LINGUAGENS 📚",
            topicos: [
            "Morfossintaxe: Estrutura da Oração e Período Composto",
            "Semântica: Intertextualidade e Produção de Sentidos",
            "Estilística: Figuras de Linguagem e Recursos Estéticos",
            "Literatura: Escolas Literárias e Análise de Obras Clássicas",
            "Inglês: Interpretação de Textos Técnicos e Gramática",
            "Redação: Estruturação Argumentativa e Gêneros Textuais"
        ]        
        }
    };

    const dadosAtivos = bancoDeDados[modalType];

    return (
        <div className="hud-overlay" onClick={onClose}>
            {/* O e.stopPropagation() evita que clicar DENTRO do painel feche ele */}
            <div className="hud-panel" onClick={(e) => e.stopPropagation()}>
                
                {/* CABEÇALHO DO PAINEL */}
                <div className="hud-header">
                    <div className="hud-title-box">
                        <span className="blinking-dot"></span>
                        <h3>{dadosAtivos.titulo}</h3>
                    </div>
                    <button className="hud-close-btn" onClick={onClose}>[ ENCERRA_SESSÃO ]</button>
                </div>
                
                {/* CORPO DO PAINEL (TELA) */}
                <div className="hud-screen">
                    <div className="scanlines"></div>
                    
                    <div className="hud-content">
                        <p className="sys-msg">{'>'} EXTRAINDO PROGRAMA DE MATÉRIAS...</p>
                        
                        <ul className="hud-list">
                            {dadosAtivos.topicos.map((topico, index) => (
                                <li key={index}>
                                    <span className="hud-index">{index + 1} //</span> {topico}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* RODAPÉ TÉCNICO */}
                <div className="hud-footer">
                    <span className="hud-barcode">||| | ||||| | || | |||</span>
                    <span>ITA JUNIOR HAHA</span>
                </div>
            </div>
        </div>
    );
}