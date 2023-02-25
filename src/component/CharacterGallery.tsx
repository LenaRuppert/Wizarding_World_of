import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css";

type CharacterGalleryProps = {

    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps){

    const characterCard = props.characters.map((character) => {
        return (
            <CharacterCard character={character} key={character.name}/>
        )
    })

    return (
        <>
            <div className={"character-gallery-header"}>
        <h1>The Wizarding Gallery</h1>
            </div>
        <div className={"character-gallery"}>
            {characterCard}
        </div>
        </>
    )
}