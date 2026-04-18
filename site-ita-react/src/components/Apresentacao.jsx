import './Apresentacao.css'; 
import fotoCasimiro from './Imagens/Casimiro.png';
import logoITA from './Imagens/LogoITA.png';
import imagemTerra from './Imagens/Terra.png';
import foguete from './Imagens/Foguete.png';


 function RolagemInscricao() {
  const rolarInscricao = () => {
    const secao = document.getElementById('insc-container');

    if(secao) {
      secao.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (<button onClick={rolarInscricao} className="btn-inscrevase">INSCREVA-SE</button>)
}

function RolagemMaterias() {
  const rolarMaterias = (e) => {
    const secao = document.getElementById('materias-container');
    e.preventDefault();
    if(secao) {
      secao.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (<a href="#materias" onClick={rolarMaterias} className="item-menu">Programa de Matérias</a>)
}

function RolagemAvisos() {
  const rolarAvisos = (e) => {
    const secao = document.getElementById('avisos-container');
    e.preventDefault();
    if(secao) {
      secao.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (<a href="#avisos" onClick={rolarAvisos} className="item-menu">Avisos</a>)
}

function Apresentacao() {
  return (
    <section className="hero-container">
      <div className="estrelas-animadas"></div>

      <div className="conteudo-hero">

        {/*Foguete e Terra */}
        <div className="coluna-esq">
          <img 
            src={foguete} 
            alt="Foguete" 
            className="img-foguete" 
          />
          <img 
            src={imagemTerra} 
            alt="Planeta Terra" 
            className="img-terra" 
          />
        </div>

        {/*Casimiro */}
        <div className="coluna-meio">
          <div className="legenda-hud">
            <div className="caixa-hud">
              <p>MARECHAL CASIMIRO MONTENEGRO FILHO.</p>
              <p className="destaque-hud">FUNDADOR DO ITA.</p>
            </div>
            <div className="linha-hud">
              <div className="ponto-hud"></div>
            </div>
          </div>
          <img 
            src ={logoITA}
            alt = "ITA"
            className="logo-ita"
            />
          <img 
            src ={fotoCasimiro}
            alt = "Marechal Casimiro Montenegro Filho"
            className="img-casimiro"
            />
        </div>

        {/*Aba do Vestibular */}
        <div className="coluna-dir">
          <div className="painel-vestibular">
            <h1 className="titulo-vestibular">VESTIBULAR 2027</h1>

            <RolagemInscricao/>

            <nav className="menu-missao">
              <a href="#provas" className="item-menu" onClick={() => window.open("https://www.vestibular.ita.br/provas.htm", "_blank")}>Provas Anteriores</a>
              <RolagemMaterias/>
              <RolagemAvisos/>
              <a href="#editais" className="item-menu" onClick={() => window.open("https://www.vestibular.ita.br/instrucoes/edital_2026_retificado.pdf", "_blank")}>Edital</a>
            </nav>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Apresentacao;