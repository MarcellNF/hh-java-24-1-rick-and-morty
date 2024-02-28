import {Character} from "../Character.ts";

type CharacterCardProps = {
    character: Character,
}

export default function CharacterCard(props: Readonly<CharacterCardProps>){
    return (
        <li>
            <h2>{props.character.name}</h2>
            <p>{props.character.status}</p>
        </li>
    );
}