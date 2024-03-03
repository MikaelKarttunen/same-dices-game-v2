import {useState} from 'react';
import {Text, TextInput, View, Pressable, Keyboard } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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


export default function Home() {
    const [playerName,setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return(
        <>
        <Header />
            <View>
            <MaterialCommunityIcons
                name="information"
                size={90}
                color="steelblue"
            />
            <Text>For scoreboard enter your name... </Text>
            <TextInput
                onChangeText={() => handlePlayerName(playerName)}
                autoFocus={true}
            />
            </View>
        <Footer />
        </>
    )
}