import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componentes/Header";
import Index from "./Paginas/inicial";
import Locadora from "./Paginas/locadora";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element = {<Index />}/>
        <Route  path="/locadora" element = {<Locadora />}/>
      </Routes>
    </BrowserRouter>

    </>
   
  )

}

export default App;
