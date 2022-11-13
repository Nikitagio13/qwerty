import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SearchCategories } from "../../utilities/searchCategories";
import { MapCompanies } from "../../utilities/companies";
import { useState, useEffect, useCallback, useRef } from "react";
import { BottomSheetStyle } from "./bottomSheet/bottomSheetStyle";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

import IconHome from 'react-native-vector-icons/Octicons';
import IconMarket from 'react-native-vector-icons/AntDesign';
import IconArrows from 'react-native-vector-icons/MaterialIcons';
import IconWallet from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMore from 'react-native-vector-icons/Feather';
import IconSearch from 'react-native-vector-icons/Fontisto';


export const Market = ({navigation}) => {
    const [companies, setCompanies] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const sheetRef = useRef(null);

    const snapPoints = ["65%"];

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
        getCompanies();
    }, []);
    const printButtonLable = (item) => {
        console.log(item)
    }

    const openBottomSheet = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
        setIsOpen(true);
    }, [])
    return (
        <View>
        <ScrollView style={[styles.scrollContainer, {backgroundColor: isOpen ? '#111315' : '#FFF'}, {opacity: isOpen ? 0.8 : 1}]}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>Markets</Text>
                <TextInput
                 style={[styles.search, {backgroundColor: isOpen ? '#111315' : '#F3F3F3'}, {opacity: isOpen ? 0.8 : 1}]} 
                 placeholder={ "Search" } 
                 placeholderTextColor="#8F9093"
                 />
                 <IconSearch name={'search'} size={15} style={styles.iconSearch}/>
                 <SearchCategories
                    buttons={['Categories', 'Exchanges', 'Countries']} 
                    actionOnPress={printButtonLable}
                />
                <View style={styles.containerForCompanies}>
                    <MapCompanies items={companies}/>
                </View>
            </View>
        </ScrollView>
        {/* რეალურ პროექტზე ასე ცხადია არასდროს ვიზავდი :დ უბრალოდ "ბაგის" გამოსწორების დრო რომ არ მქონდა ამიტომ 'მომიწია' დუბლიკაციის გაკეთება.
            სხვა შემთხვევაში მაქსიმალურად ყველაფერს დინამიურად დავწერდი*/}
        <View style={styles.container}>
                <TouchableOpacity style={styles.alignIcons} onPress={() => {navigation.navigate('MainPage')}}>
                    <IconHome name={'home'} size={30} color={'#696B6E'} />
                    <Text style={styles.textStyle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignIcons}>
                    <IconMarket name={'appstore1'} size={30} color={'#65C296'} />
                    <Text style={styles.textStyle}>Markets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.arrowsBackground} onPress={() => openBottomSheet(0)}>
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
             <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                onClose={() => setIsOpen(false)}
                style={styles.container}
            >
                <BottomSheetView style={styles.bottomsheet}>
                    <BottomSheetStyle />
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#FFF',
        height: '87%',
        borderColor: '#F3F3F3',
    },
    contentContainer: {
        marginLeft: 20,
        marginTop: 68,
        marginBottom: 70
    },
    container: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingBottom: 37,
        paddingHorizontal: 10,
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
    text: {
        fontSize: 32,
        fontWeight: '700'
    },
    search: {
        backgroundColor: '#F3F3F3',
        marginRight: 20,
        marginTop: 150,
        paddingLeft: 50,
        fontSize: 16,
        paddingVertical: 15,
        borderRadius: '50%'
    },
    iconSearch: {
        position: 'relative',
        bottom: 32,
        left: 20,
        color: '#8F9093'
    },
    containerForCompanies: {
        marginTop: 20
    },
    bottomsheet: {
        backgoundColor: 'red',
    },
})