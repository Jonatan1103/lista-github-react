// import { useState } from "react"

// import Formulario from "./components/Formulario"
import Perfil from "./components/Perfil"
import RepoList from "./components/RepoList"

const App = () =>  {
  // const [formularioAtivo, setFormularioAtivo] = useState(true)

  return (
    <>
      <Perfil nomeUsuario="Jonatan Timóteo" avatar='https://github.com/Jonatan1103.png'/>
      <RepoList />

      {/* {formularioAtivo && (
        <Formulario />
      )}

      <button type="button" onClick={() => setFormularioAtivo(!formularioAtivo)}>Mudar valor do estado</button> */}
    </>
  )
}

export default App