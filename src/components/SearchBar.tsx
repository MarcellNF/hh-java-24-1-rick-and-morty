import {ChangeEvent, useState} from "react";

type SearchBarProps = {
    handleSearchText: (searchText: string) => void,
}

export default function SearchBar(props: Readonly<SearchBarProps>){
    //const [searchText, setSearchText] = useState<string>("");

    function handleSearchText(event: ChangeEvent<HTMLInputElement>){
        console.log(event)
        //setSearchText(event.target.value);
        props.handleSearchText(event.target.value)
    }

    return(
        <input onChange={handleSearchText}/>
    );
}