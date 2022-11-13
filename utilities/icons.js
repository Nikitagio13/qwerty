import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//ICONS FOR MAIN PAGE
import IconDollar from 'react-native-vector-icons/FontAwesome';
import IconTrendingUp from 'react-native-vector-icons/Feather';


export const MainPageIcons = () => {
    return (
        <View>
            <View style={styles.containerForTotal}>
                <IconDollar name={'dollar'} size={40} color={'#111315'}/>
                <Text style={styles.totalAmount}>12.535.00</Text>
            </View>
            <View style={styles.trendingUp}>
                <IconTrendingUp name={'trending-up'} size={15} color={'#28CD41'}/>
            </View>
            <View style={styles.buyingPowerContainer}>
                <IconDollar name={'dollar'} size={20} color={'#111315'}/>
                <Text style={styles.buyingPowerText}>840.50</Text>
                <TouchableOpacity style={styles.depositButton}>
                    <Text style={styles.depositText}>+  Deposit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    trendingUp: {
        marginTop: 10
    },
    buyingPowerContainer: {
        flexDirection: 'row',
        position: 'relative',
        top: 100,
    },
    buyingPowerText: {
        fontWeight: '700',
        fontSize: 20,
        position: 'relative',
        bottom: 2,
        left: 2
    },
    depositButton: {
        position: 'relative',
        left: 140,
        bottom: 5,
        backgroundColor: '#F3F3F3',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: '50%'
    },
    depositText: {
        fontSize: 14,
        fontWeight: '700'
    }  
})