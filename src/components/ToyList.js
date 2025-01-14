import React, { useEffect, useState } from 'react';
import RandomToyPicker from "./RandomToyPicker";


const ToysList = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const structural = toys.filter(function (toy) {
        if (toy.category === 'structural')
            return toy
    });

    const movement = toys.filter(function (toy) {
        if (toy.category === 'movement')
            return toy
    });

    const interactive = toys.filter(function (toy) {
        if (toy.category === 'interactive')
            return toy
    });

    return (
        <div>
            <RandomToyPicker array1={interactive} array2={movement} array3={structural}/>
        </div>
    )
};

export default ToysList