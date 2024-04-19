import { useState, useEffect } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (url) => {
    const [cards, setCards] = useState([]);

    const addCards = async (url) => {
        try {
            const res = await axios.get(url)
            const newCard = { ...res.data, id: uuid() }
            setCards(currentCards => [...currentCards, newCard])
        } catch (e) {
            console.error('Failed to fetch card:', e)
        }
    }

    const clearCards = () => {
        setCards([])
    }

    return [cards, addCards, clearCards]
}

export default useAxios;