import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Componentes/Header"
import Index from "./Paginas/inicial"
import Locadora from "./Paginas/locadora"
import CadastreEstacionamento from "./Paginas/cadastreEstacionamento"
import Estabelecimento from "./Paginas/estabelecimentos"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/locadora" element={<Locadora />} />
          <Route path="/cadastre" element={<CadastreEstacionamento />} />
          <Route path="/estabelecimento" element={<Estabelecimento />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
