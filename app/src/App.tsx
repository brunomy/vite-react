import { useState } from "react";
import "./App.scss";
import Sidebar from "./componentes/Sidebar";
import BarraDePesquisa from "./componentes/BarraDePesquisa";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Sidebar />
            <BarraDePesquisa />
        </div>
    );
}

export default App;
