import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//ICONS FOR MAIN PAGE
import IconHome from 'react-native-vector-icons/Octicons';
import IconMarket from 'react-native-vector-icons/AntDesign';
import IconArrows from 'react-native-vector-icons/MaterialIcons';
import IconWallet from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMore from 'react-native-vector-icons/Feather';
import IconDollar from 'react-native-vector-icons/FontAwesome';


export const Icons = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.alignIcons}>
                <IconHome name={'home'} size={30} color={'#8F9093'} />
                <Text style={styles.textStyle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alignIcons}>
                <IconMarket name={'appstore1'} size={30} color={'#8F9093'} />
                <Text style={styles.textStyle}>Market</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowsBackground}>
                <IconArrows name={'compare-arrows'} size={35} color={'#696B6E'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.alignIcons}>
                <IconWallet name={'wallet-outline'} size={35} color={'#8F9093'} />
                <Text style={styles.textStyle}>Portfolio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alignIcons}>
                <IconMore name={'more-horizontal'} size={35} color={'#8F9093'} />
                <Text style={styles.textStyle}>More</Text>
            </TouchableOpacity>
        </View>
    )
}

export const MainPageIcons = () => {
    return (
        <View>
            <View style={styles.containerForTotal}>
                <IconDollar name={'dollar'} size={40} color={'#111315'}/>
                <Text style={styles.totalAmount}>12.535.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingHorizontal: 10
    },
    alignIcons: {
        justifyContent: "center",
        alignItems: 'center'
    },
    textStyle: {
        color: '#8F9093'
    },
    arrowsBackground: {
        justifyContent: 'center',
        backgroundColor: '#e7e5e3',
        borderRadius: '50%',
        padding: 13
    },
    containerForTotal: {
       flexDirection: 'row',
       marginTop: 15
    },
    totalAmount: {
        fontSize: 40,
        fontWeight: '700',
        position: 'absolute',
        left: 25,
        top: -4
    }   
})