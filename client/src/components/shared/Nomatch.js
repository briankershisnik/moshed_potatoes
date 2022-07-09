import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 -  Page Not Found</h1>
    <Link to='/'>
      <button> Return Home</button>  
    </Link>
  </>
)

export default Nomatch;