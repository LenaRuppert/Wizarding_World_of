import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps){

    return(
        <section className={"character-card"}>
            <h2>{props.character.name}</h2>
            <img className={"character-card-image"} src={props.character.image} alt={props.character.name + "image"}/>
            <p>{props.character.species}</p>
        </section>

    )
}