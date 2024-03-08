import { Link } from "react-router-dom/cjs/react-router-dom";

function DogList({dogs}){
    return (
        <div className="DogList">
            <div>
                {dogs.map(dog=> (
                    <div className="dog" key={dog.name}>
                    <img src={`${dog.src}`}></img>
                    <h4><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h4>
                    </div>))}
            </div>
        </div>
    )
}

export default DogList;