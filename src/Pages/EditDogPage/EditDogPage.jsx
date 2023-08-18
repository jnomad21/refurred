import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDogRequest} from "../../utilities/dogs-api";
import EditDogForm from '../../Components/DogDetail/EditDogForm/EditDogForm'

export default function EditDogPage() {
    let { dogId } = useParams();
    const [dog, setDog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function getDog() {
            try {
                const fetchedDog = await getDogRequest(dogId);
                if (fetchedDog) {
                    setDog(fetchedDog);
                } else {
                    setError('No dog Found');
                }
            } catch (err) {
                setError('Error fetching dog data');
            } finally {
                setLoading(false);
            }
        }

        getDog();
    }, [dogId]);

    // console.log(dog);

    return (
        <main>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <EditDogForm dog={dog} setDog={setDog} />
            )}
        </main>
    );
}