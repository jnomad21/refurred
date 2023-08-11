import BreederListItem from "./BreederListItem/BreederListItem"

export default function BreederList({breeders}){
    const breederList = breeders.map(breeder=>breeder)
    const breederComponents = breeders.map(breeder => <BreederListItem key={breeder._id} breeder={breeder} />)
    return(
        <>
           {breederComponents}
        </>
    )
}