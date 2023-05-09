import "./galeria.id.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"

const GaleriaId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      setCharacter(res.data)
    }
    
    getCharacter()
  }, [id]);

  if (!character) {
    return <div>Cargando...</div>
  }

  return (
    <div className="carta">
    <div className="galeria-id">
      <h2 className="nombre">{character.name}</h2>
      <img className="avatar" src={character.image} alt={character.name} />
      <p className="situacion">{character.status}</p>
      <p className="especie">{character.species}</p>
      <p className="tipo">{character.type}</p>
    </div>
    </div>
  )
}

export default GaleriaId
