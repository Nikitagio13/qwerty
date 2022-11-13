import { View, Text, StyleSheet } from "react-native";

import IconArrowDown from 'react-native-vector-icons/AntDesign';
import IconArrowUp from 'react-native-vector-icons/AntDesign';
import IconReload from 'react-native-vector-icons/AntDesign';
import IconPlus from 'react-native-vector-icons/Entypo';
import IconMinus from 'react-native-vector-icons/Entypo';

export const BottomSheetStyle = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.texts}>start a new trade</Text>
                <View style={styles.containerForBso}>
                    <Text style={styles.bso}>Buy</Text>
                    <Text style={styles.bsoDescription}>Buy ETFs, stocs, or mutual funds</Text>
                    <IconArrowDown name={'arrowdown'} size={30} style={styles.icons}/>
                    <Text style={styles.bso}>Sell</Text>
                    <Text style={styles.bsoDescription}>Sell all or a portion of a holding</Text>
                    <IconArrowUp name={'arrowup'} size={30} style={styles.icons}/>
                    <Text style={styles.bso}>Orders</Text>
                    <Text style={styles.bsoDescription}>All of your active or pending orders</Text>
                    <IconReload name={'reload1'} size={30} style={styles.icons}/>
                </View>
                <Text style={styles.texts}>move money</Text>
                <Text style={styles.dw}>Deposit</Text>
                <Text style={styles.dwDescription}>Buy ETFs, stocs, or mutual funds</Text>
                <IconPlus name={'plus'} size={35} style={styles.iconsDw}/>
                <Text style={styles.dw}>Withdraw</Text>
                <Text style={styles.dwDescription}>Lorem Ipsum Lorem Ipsum</Text>
                <IconMinus name={'minus'} size={35} style={styles.iconsDw}/>
            </View>
        )}
    

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: -30,
    },
    texts: {
        color: '#8F9093',
        textTransform: 'uppercase',
        fontSize: 13,
        marginTop: 60,
    },
    bso: {
        marginTop: 40,
        fontWeight: '700',
        marginLeft: 40,
    },
    containerForBso: {
        marginTop: -25,
    },
    dw: {
        fontWeight: '700',
        marginLeft: 40,
        marginTop: 30,
    },
    bsoDescription: {
        marginHorizontal: 40,
        paddingTop: 10,
        marginBottom: -35
    },
    dwDescription: {
        marginHorizontal: 40,
        paddingTop: 10,
        marginBottom: -35
    },
    icons: {
        color: '#65C296',
        position: 'relative',
        bottom: 5,
    },
    iconsDw: {
        color: '#65C296',
        position: 'relative',
        bottom: 3,
    }
})