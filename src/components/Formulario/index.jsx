import { useEffect, useState } from "react"

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0)
  const [materiaB, setMateriaB] = useState(0)
  const [materiaC, setMateriaC] = useState(0)
  const [nome, setNome] = useState('')

  useEffect(() => {
    return () => {
      console.log("ocomponente finalizou");
    }
  }, [])

  const rederizaResultado = () => {
    const soma = materiaA + materiaB + materiaC
    const media =  soma / 3

    return media >= 7 ? <p>Você passou =)</p> : <p>Reprovado =(</p>
  }

  const alteraNome = (evento) => {
    setNome(evento.target.value)

    return nome
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Seu Nome"
        onChange={alteraNome}
      />
      <input
        type="number"
        placeholder="Nota matéria A" 
        onChange={({ target }) => setMateriaA(target.valueAsNumber)}
      />
      <input 
        type="number" 
        placeholder="Nota matéria B" 
        onChange={({ target }) => setMateriaB(target.valueAsNumber)}
      />
      <input 
        type="number" 
        placeholder="Nota matéria C" 
        onChange={({ target }) => setMateriaC(target.valueAsNumber)}
      />

      {nome}
      {rederizaResultado()}
    </form>
  )
}

export default Formulario