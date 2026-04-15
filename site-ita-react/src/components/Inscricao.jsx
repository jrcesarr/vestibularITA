import './Inscricao.css';

function Inscricao(){
 return (
    <section className="insc_container">
        {/* Grid Brilhante*/}
        {/* animationDelay para eles não piscarem todos ao mesmo tempo */}
        <div className="glow-box" style={{ top: '150px', right: '200px', animationDelay: '0s' }}></div>
        <div className="glow-box" style={{ bottom: '40px', right: '150px', animationDelay: '2s' }}></div>
        <div className="glow-box" style={{ bottom:  '50px', left: '100px', animationDelay: '4s' }}></div>
        <div className="glow-box" style={{ top: '50px', left: '500px', animationDelay: '1.5s' }}></div>

        <div className="insc_titulo">
            <h1>TRILHA PARA A INSCRIÇÃO NO ITA</h1>
            <h3>Veja o passo a passo da jornada do vestibular!</h3>
       
        </div>

        <div id="trilha-secao">
            <div className="trilha-passos">
                
                {/* Passo 1 */}
                <div className="passo">
                    <div className="passo-header">
                        <span className="passo-numero">1</span>
                        <h4 className="passo-titulo">INSCRIÇÃO</h4>
                    </div>
                    <p>Preencha seus dados e confirme a inscrição. Lembre-se do prazo de pagamento do boleto!</p>
                </div>

                <div className="seta-fluxo">&gt;</div>
                
                {/* Passo 2 */}
                <div className="passo">
                    <div className="passo-header">
                        <span className="passo-numero">2</span>
                        <h4 className="passo-titulo">INSTRUÇÕES</h4>
                    </div>
                    <p>Posteriormente, você receberá as instruções da primeira fase no e-mail, incluindo data e local de prova.</p>
                </div>

                <div className="seta-fluxo">&gt;</div>

                {/* Passo 3 */}
                <div className="passo">
                    <div className="passo-header">
                        <span className="passo-numero">3</span>
                        <h4 className="passo-titulo">RESULTADOS</h4>
                    </div>
                    <p>Após a primeira fase, a lista de classificados para a 2ª fase e o local de prova serão disponibilizados.</p>
                </div>

                <div className="seta-fluxo">&gt;</div>

                {/* Passo 4 */}
                <div className="passo">
                    <div className="passo-header">
                        <span className="passo-numero">4</span>
                        <h4 className="passo-titulo">CONVOCAÇÃO</h4>
                    </div>
                    <p>Os aprovados na segunda fase serão convocados para a realização da inspeção de saúde em São José dos Campos.</p>
                </div>

            </div>

            <button className="btn-iniciar-jornada">
                QUERO FAZER MINHA INSCRIÇÃO
            </button>
        </div>

    </section>
    );
}

export default Inscricao;