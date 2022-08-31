import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

  const times = [
    {
      nome: '1ª geração (1972-1983)',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: '2ª geração (1978-1992)',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: '3ª geração (1983-1995)',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: '4ª geração (1987-1999)',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: '5ª geração (1994-2002)',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
    {
      nome: '6ª geração (1998-2005)',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: '7ª geração (2005-2013)',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
    {
      nome: '8ª geração (2013-2020)',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      <Footer/>
    </div>
  );
}

export default App;
