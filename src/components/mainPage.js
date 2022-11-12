import { View, Text, ScrollView, StyleSheet } from "react-native"
import { Icons, MainPageIcons } from '../../utilities/icons'


export const MainPage = () => {
    return (
        <View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.totalInvesting}>total investing</Text>
                    <MainPageIcons />
                </View>
                <View>
                    
                </View>
            </ScrollView>
                <Icons />
        </View>
    )
} 

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#4343',
        height: '87%',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },
    contentContainer: {
        marginLeft: 20,
        marginTop: 68
    },
    totalInvesting: {
        color: '#8F9093',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
    }
})