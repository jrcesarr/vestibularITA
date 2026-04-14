// src/components/Cabecalho.jsx

function Cabecalho() {
  return (
    <header style={{ backgroundColor: '#182848', color: 'white', padding: '20px' }}>
      <h1>Vestibular ITA 2027</h1>
      <nav>
        <a href="#editais" style={{ color: 'white', marginRight: '15px' }}>Editais</a>
        <a href="#inscricao" style={{ color: 'white' }}>Inscreva-se</a>
      </nav>
    </header>
  );
}

// O export default é o que permite que outros arquivos "enxerguem" este componente
export default Cabecalho;