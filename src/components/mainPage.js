import { useEffect, useState } from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native"
import { MainPageIcons } from '../../utilities/icons'
import { MapCompanies } from "../../utilities/companies";
import { Watchlist, TopMovers, RealtedNews } from "../../utilities/categories";
import { MapNews } from "../../utilities/news";

import IconHome from 'react-native-vector-icons/Octicons';
import IconMarket from 'react-native-vector-icons/AntDesign';
import IconArrows from 'react-native-vector-icons/MaterialIcons';
import IconWallet from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMore from 'react-native-vector-icons/Feather';

export const MainPage = ({navigation}) => {
    const [news, setNews] = useState([]);
    const [companies, setCompanies] = useState([]);

    const getNews = async () => {
        try {
            const response = await fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/stock/news');
            const json = await response.json();
            setNews(json);
        } catch (error) {
            console.error(error);
        }
    }

    const getCompanies = async () =>{
        try {
            const response = await fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/stock/companies');
            const json = await response.json();
            console.log(json);
            setCompanies(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getNews();
        getCompanies();
    }, []);

    const printButtonLable = (item) => {
        console.log(item)
    }


    return (
        <View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.totalInvesting}>total investing</Text>
                    <MainPageIcons />
                    <Text style={styles.totalInvestingPercent}>+$32.5 (0.48%)</Text>
                    <Text style={styles.buyingPower}>buying power</Text>
                    <View>
                        <Watchlist />
                        <MapCompanies items={companies}/>
                        <TopMovers
                            buttons={['Trending', 'Top Gainers', 'Top Losers']} 
                            actionOnPress={printButtonLable}
                        />
                        <RealtedNews />
                        <MapNews items={news} />
                    </View>
                </View>
                <View>

                </View>
            </ScrollView>

               {/* თავიდან Icons ცალკე კომპონენტად მქონდა შემქნილი და აქ შემომქონდა, 
               უბრალოდ რატომღაც ნავიგაციას ვერ ვაკეთებდი onPress-ზე გვერდებს შორის 
               და დროის ნაკლებობის გამო ასე მომიწია დაწერა...  */}

            <View style={styles.container}>
                <TouchableOpacity style={styles.alignIcons} >
                    <IconHome name={'home'} size={30} color={'#65C296'} />
                    <Text style={styles.textStyle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignIcons} onPress={() => {navigation.navigate('Market')}}>
                    <IconMarket name={'appstore1'} size={30} color={'#8F9093'} />
                    <Text style={styles.textStyle}>Markets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.arrowsBackground} >
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
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#FFF',
        height: '87%',
        borderWidth: 1,
        borderColor: '#F3F3F3',
    },
    contentContainer: {
        marginLeft: 20,
        marginTop: 68,
        marginBottom: 70
    },
    totalInvesting: {
        color: '#8F9093',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
    },
    watchlist: {
        fontSize: 20,
        fontWeight: '700',
    },
    wrapperForWatchlist: {
        flexDirection: 'row',
        marginTop: 130
    },
    watchlistAll: {
        marginLeft: 230,
    },
    totalInvestingPercent: {
        position: 'relative',
        bottom: 50,
        left: 20,
        color: '#28CD41',
    },
    buyingPower: {
        color: '#8F9093',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        position: 'relative',
        top: 20
    },
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
})
