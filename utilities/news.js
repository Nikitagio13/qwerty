import { View, Text, StyleSheet } from "react-native"



const News = (item) => {
    return(
    <View style={styles.mainContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.timeAndAuthor}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    </View>);
}

export const MapNews = (news) =>{
    return news.items.map(News);
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 40,
        maxWidth: '94%'
    },
    timeAndAuthor: {
        flexDirection: 'row',
        paddingTop: 18,
    },
    time: {
        marginLeft: 10,
        color: '#696B6E',
        fontSize: 12,
    },
    author: {
        color: '#696B6E',
        fontSize: 12,
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
    }
})