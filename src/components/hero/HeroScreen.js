import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import getHeroById from "../../helpers/getHeroById";

const HeroScreen = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () =>  getHeroById(id), [id]); //*Usamos el memo para memorizar el valor y no volver a calcularla


  const handleReturn = () => {
    navigate(-1);
  }

  const {
    heroId,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    img_profile,
  }  = hero;

  if (!hero) {
    return <Navigate to='/' />
  }

  return (
    <>
      <h1>{superhero}</h1>
      <h2>{publisher}</h2>
      <h3>{alter_ego}</h3>
      <h3>{first_appearance}</h3>
      <h3>{characters}</h3>
      <img src={img_profile} alt={superhero} />
      <button onClick={handleReturn} >Regresar</button>
    </>
  )
}

export default HeroScreen