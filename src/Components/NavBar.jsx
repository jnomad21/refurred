import { Link } from 'react-router-dom';

export default function NavBar() {
return(
    <>
<Link to="/dogs/new">Add a dog</Link><br />
<Link to="/dogs">Home</Link>
</>
)
}