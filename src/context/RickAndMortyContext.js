import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const RickAndMoryContext = createContext();


export const RickAndMortyProvider = ({ children }) => {
    const [page, setPage] = useState(1)
    const [character, setCharacter] = useState([])

    // Filtreleme İşlemi
    const [filterText, setFilterText] = useState("");
    const filtered = character.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    });


    useEffect(() => {
        const CharactersData = async () => {
            const data =
                await axios(`https://rickandmortyapi.com/api/character?page=${page}`)
                    .then(res => setCharacter(res.data.results))
                    .catch(e => console.log(e))
            console.log(data);
        };
        CharactersData()
    }, [page])

    const increasePage = () => setPage(page + 1)
    const decreasePage = () => {
        if (page >= 2) {
            setPage(page - 1)
            
        }
    }
    
    console.log(page);

    const values = {
        character,
        setPage,
        page,
        increasePage,
        decreasePage,
        filterText,
        setFilterText,
        filtered
    };

    return (
        <RickAndMoryContext.Provider value={values}>
            {children}
        </RickAndMoryContext.Provider>
    );
};


export const RickAndMortyAPI = () => useContext(RickAndMoryContext); 
