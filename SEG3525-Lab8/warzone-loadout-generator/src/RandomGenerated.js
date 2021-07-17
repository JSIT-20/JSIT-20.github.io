import {getloadout} from './getloadout.js'
import { Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import {useState} from 'react';

const RandomGenerated = (props) => {

    const [loadout, setLoadout] = useState(getloadout(props.overkill, props.primary, props.secondary, props.numAt1, props.numAt2))

    const [clickAdvanced, setClickAdvanced] = useState(false);
    const [overkill, setOverkill] = useState(props.overkill);
    const [primary, setPrimary] = useState(props.primary);
    const [secondary, setSecondary] = useState(props.secondary);
    const [numAt1, setNumAt1] = useState(props.numAt1);
    const [numAt2, setNumAt2] = useState(props.numAt2);
    console.log(loadout)

    return ( 
        <div id="loadoutGenerated">
            <div id="loadoutView">
                <Container>
                    <Row>
                        <Col xs={5}>
                            <h2>Primary Weapon</h2>
                            <img className="gun" src={'/images/' + loadout.primary + '.png'}></img>
                            <p>{loadout.primary}</p>
                        </Col>
                        <Col xs={5}>
                            <h2>Secondary Weapon</h2>
                            <img className="gun" src={'/images/' + loadout.secondary + '.png'}></img>
                            <p>{loadout.secondary}</p>
                        </Col>
                        <Col xs={2}>
                            <h2>Perks</h2>
                            <p>Perk 1: {loadout.perk1}</p>
                            <p>Perk 2: {loadout.perk2}</p>
                            <p>Perk 3: {loadout.perk3}</p>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                    <Col xs={5}>
                            <h2>Primary Attachments</h2>
                            {loadout.primaryAttachments.map((att) => (
                                <p>{att[0] + "    required level: " + att[1]}</p>
                            ))}
                        </Col>
                        <Col xs={5}>
                            <h2>Secondary Attachments</h2>
                            {loadout.secondaryAttachments.map((att) => (
                                <p>{att[0] + "    required level: " + att[1]}</p>
                            ))}
                        </Col>
                        <Col xs={2}>
                            <h2>Grenades</h2>
                            <p>{loadout.lethal}</p>
                            <p>{loadout.tactical}</p>
                        </Col>
                    </Row>
                <p>Primary min level: {loadout.primaryMinLevel}</p>
                <p>Secondary min level: {loadout.secondaryMinLevel}</p>
                </Container>
            </div>

            <Button>New attachments with given weapon level</Button>
            <Button>Modify Restrictions</Button>
            <Button onClick={()=>{setLoadout(getloadout(overkill, primary, secondary, numAt1, numAt2))}}>Generate New Random Loadout</Button>

        </div>
     ); 
}
 
export default RandomGenerated;