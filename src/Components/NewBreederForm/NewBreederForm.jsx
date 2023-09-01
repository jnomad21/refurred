import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from 'react';
import { createBreederRequest } from '../../utilities/dogs-api';

const statesEnum = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

export default function NewBreederForm(){
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const breedRef = useRef('')
    const orgNameRef = useRef('')
    const contactNameRef = useRef('')
    const addressRef = useRef('')
    const cityRef= useRef('')
    const stateRef = useRef('')
    const zipCodeRef = useRef('')
    const phoneRef = useRef('')
    const websiteRef = useRef('')

    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const breeds = breedRef.current.value
        .split(',')
        .map((breed) => capitalizeFirstLetter(breed.trim()));

        const newBreeder = {
            breeds: breeds,
            orgName: orgNameRef.current.value,
            contactName: contactNameRef.current.value,
            address: addressRef.current.value,
            state: stateRef.current.value,
            city: cityRef.current.value,
            zipCode: zipCodeRef.current.value,
            phone: phoneRef.current.value,
            website: websiteRef.current.value,
        }
        try {
            const newBreederResponse = await createBreederRequest(newBreeder)
            navigate('/dogs/breeders')
        } catch (err) {
            setError(err)
        }
    }
    
    return (
        <>
        {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="breeds">Breeds:</label>
                    <input type="text" id="breeds" className="form-control" ref={breedRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="orgName">Breeding Company:</label>
                    <input type="text" id="orgName" className="form-control" ref={orgNameRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="contactName">Breeder Contact:</label>
                    <input type="text" id="contactName" className="form-control" ref={contactNameRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" className="form-control" ref={addressRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" className="form-control" ref={cityRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="state">State:</label>
                    <select name="state" id="state" className="form-control" ref={stateRef}>
                        {statesEnum.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input type="number" id="zipCode" className="form-control" ref={zipCodeRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" className="form-control" ref={phoneRef} placeholder="555-555-5555" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" className="form-control" placeholder="https://www.website.com" ref={websiteRef} />
                </div>
                <button type="submit" className="btn btn-primary" id="newDogButton">Add the Breeder</button>
                
            </form>
        </>
    )
}
