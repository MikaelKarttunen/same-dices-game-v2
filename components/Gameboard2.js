import {useState } from react;
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
import { MaterialCommunityIcons } from '@expo/vector-icons/';

let board = [];

export default Gameboard = ({ navigation, route }) => {

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

    useEffect(() => {
        if (playerName ==='' && route.params?.player) {
            setPlayerName(route.params.player);
        }
    }, []);

    const row = [];
    for (let dice = 0; dice <NBR_OF_DICES; dice++) {
        row.push(
            <Pressable
                key={"row" + dice}
                >
                <MaterialCommunityIcons
                    name={board[dice]}
                    key={"row" + dice}
                    size={50}
                    >
                       
                    </MaterialCommunityIcons>
                </Pressable>
        )
    }

    return(
        <>
        <Header />
        <View>
            <Text>Gameboard will be here...</Text>
            <Text>Player: </Text>
        </View>
        </>
    )
}