import { Button, InputGroup, Card } from "react-bootstrap";
import {useState} from 'react';
import $ from 'jquery';

const RandomSettings = (props) => {
    const [clickAdvanced, setClickAdvanced] = useState(false);
    const [overkill, setOverkill] = useState('No');
    const [primary, setPrimary] = useState('Any');
    const [secondary, setSecondary] = useState('Any');
    const [numAt1, setNumAt1] = useState('5');
    const [numAt2, setNumAt2] = useState('5');
    
    
        return ( 
            <div className="content">
                <Button variant='primary' onClick={() => {props.onReadyState(true, overkill, primary, secondary, numAt1, numAt2)}}>Generate Random Loadout</Button>{' '}
                <Button variant='primary' onClick={()=>{setClickAdvanced(!clickAdvanced)}}>Advanced Settings</Button>
                {clickAdvanced &&
                    <Card className="mt-5">
                        <Card.Body>
                            <div className="advSettings">

                                <label>Force overkill?</label>
                                <select
                                    value={overkill}
                                    onChange={(e) => setOverkill(e.target.value)}
                                    >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>

                                <label>Specify a Primary weapon class?</label>
                                <select
                                    value={primary}
                                    onChange={(e) => setPrimary(e.target.value)}
                                    >
                                    <option value="Any">Any</option>
                                    <option value='Snipers'>Snipers</option>
                                    <option value='Assault Rifles'>Assault Rifles</option>
                                </select>

                                <label>Specify a Secondary weapon class?</label>
                                <select
                                    value={secondary}
                                    onChange={(e) => setSecondary(e.target.value)}
                                    >
                                    <option value="Any">Any</option>
                                    {overkill === 'No' && <option value='Pistols'>Pistols</option>}
                                    {overkill === 'No' && <option value='Launchers'>Launchers</option>}
                                    {overkill === 'No' && <option value='Melee'>Melee</option>}
                                    {overkill === 'Yes' && <option value='Snipers'>Snipers</option>}
                                    {overkill === 'Yes' && <option value='Assault Rifles'>Assault Rifles</option>}
                                </select>

                                <label>Number of Attachments for primary weapon?</label>
                                <select
                                    value={numAt1}
                                    onChange={(e) => setNumAt1(e.target.value)}
                                    >
                                    <option value="5">5</option>
                                    <option value='4'>4</option>
                                    <option value='3'>3</option>
                                    <option value="2">2</option>
                                    <option value='1'>1</option>
                                    
                                </select>

                                <label>Number of Attachments for secondary weapon?</label>
                                <select
                                    value={numAt2}
                                    onChange={(e) => setNumAt2(e.target.value)}
                                    >
                                    <option value="5">5</option>
                                    <option value='4'>4</option>
                                    <option value='3'>3</option>
                                    <option value="2">2</option>
                                    <option value='1'>1</option>
                                </select>
                                </div>
                        </Card.Body>
                    </Card>
                }
            </div>
         );
}
 
export default RandomSettings;