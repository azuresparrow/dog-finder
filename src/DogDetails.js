import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    if(name) {
        const dog = dogs.find( d => d.name.toLowerCase() === name.toLowerCase());
        
        return (<div>
                <img src={`${dog.src}`}></img>
                name: {dog.name}, age: {dog.age}, facts: {dog.facts}
            </div>);
    }
    return null;
}

export default DogDetails;