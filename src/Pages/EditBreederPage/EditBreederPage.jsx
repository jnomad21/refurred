import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getBreederRequest} from "../../utilities/dogs-api";
import EditBreederForm from '../../Components/BreederDetail/EditBreederForm/EditBreederForm'

export default function EditBreederPage() {
    let { breederId } = useParams();
    const [breeder, setBreeder] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function getBreeder() {
            try {
                const fetchedBreeder = await getBreederRequest(breederId);
                if (fetchedBreeder) {
                    setBreeder(fetchedBreeder);
                } else {
                    setError('No Breeder Found');
                }
            } catch (err) {
                setError('Error fetching Breeder data');
            } finally {
                setLoading(false);
            }
        }

        getBreeder();
    }, [breederId]);

    // console.log(Breeder);

    return (
        <main>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <EditBreederForm breeder={breeder} setBreeder={setBreeder} />
            )}
        </main>
    );
}