import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../Character.ts";

type CharacterGalleryProps = {
    characters: Character[],
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>){
    return (
        <ul>
            {
                props.characters.map((character) => {
                    return <CharacterCard key={character.id} character={character}/>;
                })
            }
        </ul>
    );
}