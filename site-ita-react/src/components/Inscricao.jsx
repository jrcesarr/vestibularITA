import './Inscricao.css';

function Inscricao(){
 return (
    <section className="insc_container">
        {/* Grid Brilhante*/}
        {/* animationDelay para eles não piscarem todos ao mesmo tempo */}
        <div className="glow-box" style={{ top: '200px', left: '200px', animationDelay: '0s' }}></div>
        <div className="glow-box" style={{ top: '300px', right: '150px', animationDelay: '2s' }}></div>
        <div className="glow-box" style={{ bottom:  '50px', left: '100px', animationDelay: '4s' }}></div>
        <div className="glow-box" style={{ top: '50px', left: '500px', animationDelay: '1.5s' }}></div>

        <div className="insc_titulo">
            <h1>TRILHA PARA A INSCRIÇÃO NO ITA</h1>
            <h3>Veja o passo a passo da jornada do vestibular!</h3>
       
        </div>
        <div id="trilha-secao">
        </div>
    </section>
    );
}

export default Inscricao;