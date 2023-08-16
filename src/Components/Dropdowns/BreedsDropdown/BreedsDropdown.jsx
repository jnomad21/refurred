export default function BreedsDropdown(){
    const [breeds, setBreed] = useState([]);
}

<div className="form-group mb-3">For which breed?
{/* Breeds component with dropdown goes here instead of static dropdown below. */}
    <select className="form-control">
        <option value={1}>Shnouzer</option>
        <option value={2}>Laberdoodle</option>
        <option value={3}>German Sheppard</option>
        <option value={4}>Dauchsund</option>
        <option value={5}>Collie</option>
    </select>
</div>