import { useState } from "react";
import "./App.scss";
import Sidebar from "./componentes/Sidebar";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Filtro from "./componentes/Filtro";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <Sidebar />
            <div>
                <BarraDePesquisa />
                <Filtro />
            </div>
        </div>
    );
}

export default App;
