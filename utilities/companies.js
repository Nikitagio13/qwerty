import { View, Text, Image, StyleSheet } from "react-native"



const Companies = (item) => {
    return (
        <View>
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={{ uri: item.logo }}/>
                <View style={styles.container}>
                    <Text style={styles.code}>{item.code}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.forPrice}>
                    <Text style={styles.price}>{`$${item.price}`}</Text>
                    <Text style={styles.change}>{`${item.change} (0.3%)`}</Text>
                    </View>
                </View>
            </View>
        </View>
        );
}

export const MapCompanies = (companies) => {
    return companies.items.map(Companies);
}

const styles = StyleSheet.create({
    mainContainer: {
        marginLeft: -20,
        marginTop: 30,
        marginBottom: -30,
    },
    code: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: -36,
        marginLeft: 70,
        width: 47,
    },
    name: {
        fontSize: 12,
        color: '#8F9093',
        marginTop: 5,
        marginLeft: 70,
        width: 62,
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        position: 'relative',
        bottom: 39,
    },
    change: {
        fontSize: 12,
        position: 'relative',
        bottom: 32,
        
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        marginLeft: 20,
    },
    forPrice: {
        alignItems: 'flex-end',
        marginRight: 20
    },
})