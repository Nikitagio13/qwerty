import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react";



export const Watchlist = () => {
    return (
        <View>
           <View style={styles.wrapperForWatchlist}>
           <Text style={styles.watchlist}>Watchlist</Text>
                <TouchableOpacity style={styles.watchlistAll} >
                    <Text>All →</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
};
export const TopMovers = ({buttons, actionOnPress}) => {
    
    const [buttonClicked, setButtonClicked] = useState(0)
    const handleClick = (item, id) => {
        setButtonClicked(id)
        actionOnPress(item)
    }

    return (
        <View>
           <View style={styles.wrapperForWatchlist}>
           <Text style={styles.watchlist}>Top Movers</Text>
                <TouchableOpacity style={styles.watchlistAll}>
                    <Text>All →</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.topMoversContainer}>
                {
                    buttons.map((buttonLable, index) => {
                        return (
                            <View>
                                <TouchableOpacity 
                                    onPress={(item) => handleClick(item, index)}
                                    style={[
                                        index === buttonClicked ? styles.topMoversButtonsActive : styles.topMoversButtonsInactive
                                    ]}
                                    key={index}
                                    >
                                    <Text
                                        style={index === buttonClicked ? styles.topMoversTextActive : styles.topMoversTextInactive}
                                    >
                                    {buttonLable}
                                    </Text>
                                </TouchableOpacity>
                                <View>

                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
};
export const RealtedNews = () => {
    return (
        <View>
           <View style={styles.wrapperForWatchlist}>
           <Text style={styles.watchlist}>Related News</Text>
                <TouchableOpacity style={styles.watchlistAll}>
                    <Text>All →</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
};

const styles = StyleSheet.create({
    watchlist: {
        fontSize: 20,
        fontWeight: '700',
    },
    wrapperForWatchlist: {
        flexDirection: 'row',
        marginTop: 130,
        justifyContent: 'space-between',
        
    },
    watchlistAll: {
        marginRight: 20
    },
    topMoversContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -20,
        marginTop: 30
    },
    topMoversButtonsInactive: {
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: '50%'
    },
    topMoversButtonsActive: {
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: '50%',
        backgroundColor: '#F3F3F3'
    },
    topMoversTextActive: {
        color: '#111315',
        fontSize: 14
    },
    topMoversTextInactive: {
        color: '#696B6E',
        fontSize: 14
    } 
})