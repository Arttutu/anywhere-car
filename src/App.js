import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Componentes/Header"
import Index from "./Paginas/inicial"
import Locadora from "./Paginas/locadora"
import CadastreEstacionamento from "./Paginas/cadastreEstacionamento"
import Estabelecimento from "./Paginas/estabelecimentos"
import FaleConosco from "./Paginas/FaleConosco"
import Login from "./Paginas/Login"
import EstabelecimentoTabela from "./Paginas/estabelecimentosTabela"

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
          <Route path="/faleconosco" element={<FaleConosco />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/estabelecimentotabela"
            element={<EstabelecimentoTabela />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
