import { useState } from 'react';
import {Text, View, Pressable, } from 'react-native';
import Header from './Header';
import Footer from './Footer' 
import styles from '../style/style';
import {
    NBR_OF_DICES,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS } from '../constants/Game'
import { Container, Row, Col } from 'react-native-flex-grid';
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';

let board = [];


export default function Gameboard()  {

    const [playerName, setPlayerName] = useState('');
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState('Throw dices');
    const [gameEndStatus, setGameEndStatus] = useState(false);

    const [selectedDices, setSelectedDices] =
        useState(new Array(NBR_OF_DICES).fill(false));

    const [diceSpots, setDiceSpots] = 
        useState(new Array(NBR_OF_DICES).fill(0));
    
    const [selectedDicePoints, setSelectedDicePoints] = 
        useState(new Array(MAX_SPOT).fill(false));
    
    const [dicePointsTotal, setDicePointsTotal] =
        useState(new Array (MAX_SPOT).fill(0));



    const row = [];
    for (let dice = 0; dice < NBR_OF_DICES; dice++) {
        row.push(
            <Col key={"dice" + dice}>
            <Pressable
                key={"dice" + dice}
                onPress={() => selectDice(dice)}
                >
                <MaterialCommunityIcons
                    name={board[dice]}
                    key={"dice" + dice}
                    size={50}
                    color={getDiceColor(dice)}
                    >
                       
                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        );
    }

    const pointsToSelectRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
      pointsToSelectRow.push(
        <Col key={"buttonsRow" + diceButton}>
            <Pressable 
            key={"buttonsRow" + diceButton}
            // onPress later...
            >

                <MaterialCommunityIcons 
                key={"buttonsRow" + diceButton}
                name={"numeric-" + (diceButton + 1) + "-circle"}
                size={35}
                // color later...
                >
                </MaterialCommunityIcons>
            </Pressable>
        </Col>
      )
    }

    const selectDice = (i) => {
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
    }

    function getDiceColor(i) {
        return selectedDices[i] ? "black" : "steelblue"
    }

    const throwDices = () => {
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
                board[i] = 'dice-' + randomNumber;
            }
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
    }

    return(
        <>
        <Header />
        <View>
            <Container>
                <Row>
                    {row}
                </Row>
            </Container>
            <Text>Throws left: {nbrOfThrowsLeft}</Text>
            <Text>{status}</Text>
            <Pressable onPress={() => throwDices()}>
                <Text>THROW DICES</Text>
                
            </Pressable>
            <Container>
                <Row>
                    {pointsToSelectRow}
                </Row>
            </Container>
        </View>
        <Footer />
        </>
    )
}