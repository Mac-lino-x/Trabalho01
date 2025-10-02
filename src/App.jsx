import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import ListaAlunos from "./ListaAlunos"
import Alerta from './Alerta'
import Acoes from './Acoes'
import CartaoPerfil from './CartaoPerfil'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Header />
      </div>
      <h1>Bem-vindo!</h1>
      <h1>Aluno: Maciel Nascimento</h1>
      <div>
        <ListaAlunos />
      </div>
      <div>
        <CartaoPerfil nome="Ana Maria" curso="Java" idade={20} />
        <CartaoPerfil nome="Guilherme João" curso="Front-End" idade={25} />
        <CartaoPerfil nome="João" curso="Back-End" idade={22} />
      </div>
      <div>
        <Acoes texto="Salvar" />
        <Acoes texto="Cancelar" />
        <Acoes texto="Enviar" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Você clicou {count} vezes
        </button>
      </div>
      <Alerta tipo="sucesso" />
      <Alerta tipo="erro" />
      <Alerta tipo="aviso" />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App