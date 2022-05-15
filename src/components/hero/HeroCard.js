import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    img_profile,
}) => {
    return (
        <div className="col-lg-3 col-6" key={id}>
            <div className="card">
                <img className="card-img-top" src={img_profile} alt={superhero} />
                <div className="card-body">
                    <h5>{publisher}</h5>
                    <h4>{superhero} - {alter_ego}</h4>
                    <h6>{characters}</h6>
                    <p>{first_appearance}</p>
                    <Link to={`/hero/${id}`}>Más...</Link>
                </div>
            </div>
        </div>
    )
}
