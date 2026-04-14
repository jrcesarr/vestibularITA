import './Apresentacao.css'; 
import fotoCasimiro from './Imagens/Casimiro.png';
import logoITA from './Imagens/LogoITA.png';
import imagemTerra from './imagens/Terra.png';
import foguete from './imagens/Foguete.png';

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
    
            <button className="btn-inscrevase">INSCREVA-SE</button>

            <nav className="menu-missao">
              <a href="#provas" className="item-menu">Provas Anteriores</a>
              <a href="#materias" className="item-menu">Programa de Matérias</a>
              <a href="#calendario" className="item-menu">Calendário</a>
              <a href="#editais" className="item-menu">Editais</a>
            </nav>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Apresentacao;