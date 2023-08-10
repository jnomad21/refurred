export default function BreederDetail({breeder, setBreeder}){
    return(
    <>
    <main>
    <h4>Breeder Name:{breeder.orgName}</h4>
    <h4>Breeds Available:{breeder.breed}</h4>
    <h4>Address:{breeder.address}</h4>
    <h4>State:{breeder.state}</h4>
    <h4>Zip Code:{breeder.zipCode}</h4>
    <h4>Phone Number:{breeder.phone}</h4>
    <h4>Breeder Website:{breeder.website}</h4>
    </main>
    </>
    )
}