import {useState } from react;
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


export default home = ({navigation}) => {
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
            <>
            {!hasPlayerName}
            <Text>For scoreboard enter your name...</Text>
            <TextInput onChangeText={setPlayerName} autoFocus={true} />
            <Pressable
            onPress={() => handlePlayerName(playerName)}>
                <Text>OK</Text>
            </Pressable>
            </>
            :
            <>
            <Text>Rules of the game...</Text>
            <Text multiline="True">
                :D::DD::D:D:D:D:D:D:::D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:
            </Text>
            <Text multiline="true">Copy more text here...</Text>
            <Text>Good luck, {playerName}</Text>
            <Pressable>
                onPress={()=> navigation.navigate(
                    'Gameboard', {player: playerName})}
                    <Text>PLAY</Text>
            </Pressable>
            </>
            
        </View>
        <Footer></Footer>
        </>
    )
}