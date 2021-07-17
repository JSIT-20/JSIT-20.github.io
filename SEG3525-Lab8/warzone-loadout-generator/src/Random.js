import { Button, InputGroup } from "react-bootstrap";
import {useState} from 'react';
import $ from 'jquery';
import RandomSettings from './RandomSettings.js'
import RandomGenerated from './RandomGenerated'


const Random = () => {
    const [ready, setReady] = useState(false)
    const [overkill, setOverkill] = useState('')
    const [primary, setPrimary] = useState('')
    const [secondary, setSecondary] = useState('')
    const [numAt1, setNumAt1] = useState('5');
    const [numAt2, setNumAt2] = useState('5');

    function getLoad(r, o, p, s, one, two){
        setReady(r)
        console.log(o, p, s)
        setOverkill(o)
        setPrimary(p)
        setSecondary(s)
        setNumAt1(one)
        setNumAt2(two)
    }
    return(
        <div className="random">
            {!ready && <RandomSettings onReadyState={getLoad}></RandomSettings>}
            {ready && <RandomGenerated overkill={overkill} primary={primary} secondary={secondary} numAt1 = {numAt1} numAt2 = {numAt2}></RandomGenerated>}
        </div>
    )
}
 
export default Random;