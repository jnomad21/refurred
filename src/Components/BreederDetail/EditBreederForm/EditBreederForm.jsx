import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateBreederRequest } from '../../../utilities/dogs-api';

const statesEnum = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];


export default function EditBreederForm({breeder, setBreeder}){
    console.log(breeder)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const breedRef = useRef(breeder.breed)
    const orgNameRef = useRef(breeder.orgName)
    const contactNameRef = useRef(breeder.contactName)
    const addressRef = useRef(breeder.address)
    const cityRef= useRef(breeder.city)
    const stateRef = useRef(breeder.state)
    const zipCodeRef = useRef(breeder.zipCode)
    const phoneRef = useRef(breeder.phone)
    const websiteRef = useRef(breeder.website)

    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }
    async function handleSubmit(e) {
        e.preventDefault()
        
        const capitalizedBreed = capitalizeFirstLetter(breedRef.current.value);

        const updatedBreeder = {
            breed: capitalizedBreed,
            orgName: orgNameRef.current.value,
            contactName: contactNameRef.current.value,
            address: addressRef.current.value,
            state: stateRef.current.value,
            city: cityRef.current.value,
            zipCode: zipCodeRef.current.value,
            phone: phoneRef.current.value,
            website: websiteRef.current.value,
        }
        try{
            const newBreeder = await updateBreederRequest(breeder._id, updatedBreeder)
            setBreeder(newBreeder)
            navigate(`/dogs/breeders/${newBreeder._id}`);
        }catch(err){
            setError("Bad Update, Man")
        }
    }
    return(
        <>
        {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="breed">Breed:</label>
                    <input type="text" id="breed" className="form-control" ref={breedRef} defaultValue={breeder.breed} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="orgName">Breeding Company:</label>
                    <input type="text" id="orgName" className="form-control" ref={orgNameRef} defaultValue={breeder.orgName}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="contactName">Breeder Contact:</label>
                    <input type="text" id="contactName" className="form-control" ref={contactNameRef} defaultValue={breeder.contactName}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" className="form-control" ref={addressRef} defaultValue={breeder.address}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" className="form-control" ref={cityRef} defaultValue={breeder.city}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="state">State:</label>
                    <select name="state" id="state" className="form-control" ref={stateRef} defaultValue={breeder.state}>
                        {statesEnum.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input type="number" id="zipCode" className="form-control" ref={zipCodeRef} defaultValue={breeder.zipCode}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" className="form-control" ref={phoneRef} placeholder="555-555-5555" defaultValue={breeder.phone}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" className="form-control" placeholder="https://www.website.com" ref={websiteRef} defaultValue={breeder.website}/>
                </div>
                <button type="submit" className="btn btn-primary" id="newDogButton">Edit the Breeder</button>
                
            </form>
        </>
    )
}