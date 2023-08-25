import BreederListItem from "./BreederListItem/BreederListItem"

export default function BreederList({breeders}){
    const breederList = breeders.map(breeder=>breeder)
    const breederComponents = breeders.map((breeder, index) => <BreederListItem  breeder={breeder} key={index}/>)
    return(
        <>
           {breederComponents}
        </>
    )
}