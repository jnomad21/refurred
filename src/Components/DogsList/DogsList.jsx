import DogsListItem from "./DogListItem/DogListItem"

export default function DogsList({dogs, handleDelete}){
    const dogsComponents = dogs.map(dog => <DogsListItem key={dog._id} dog={dog} handleDelete={handleDelete}/>)
    
    return (
        <>
        <div className="indexBox">
            {dogsComponents}
        </div>
            
        </>
    )
}