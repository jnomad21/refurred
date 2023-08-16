
export default function DistanceDropdown({selectedDistance, setSelectedDistance}) {
    return (
        <>
        <div className="form-group mb-3">Within how many miles?
            <select value={selectedDistance} onChange = {(e) => setSelectedDistance(Number(e.target.value))} name="" className="form-control">
                <option value={10}> Within 10 miles</option>
                <option value={25}> Within 25 miles</option>
                <option value={75}> Within 75 miles</option>
                <option value={150}> Within 150 miles</option>
                <option value={500}> Within 500 miles</option>
            </select>
        </div>
        </>
    )
}