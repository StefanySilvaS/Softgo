import React, { useState } from "react";
import Login from "./Login";
import Listagem from "./Listagem";

function App() {
  const [pagina, setPagina] = useState("login");

  const irParaListagem = () => setPagina("listagem");
  const irParaLogin = () => setPagina("login");

  return (
    <div>
      {pagina === "login" && <Login onLogin={irParaListagem} />}
      {pagina === "listagem" && <Listagem onLogout={irParaLogin} />}
    </div>
  );
}

export default App;
