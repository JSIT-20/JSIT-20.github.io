import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Home = () => {
    
    const history = useHistory();

    return (
        <div className="content">
            <h2>Welcome to Warzone Loadout Generator</h2>
            <p>hey all</p>
            <Button variant="primary" onClick={() =>{history.push("/random")}}>Generate a Random Loadout</Button>{' '}
            <Button variant='primary'>View Popular Loadouts</Button>

        </div> 
     );
}
 
export default Home;