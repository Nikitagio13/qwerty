import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";

export const SearchCategories = ({buttons, actionOnPress}) => {
    
    const [buttonClicked, setButtonClicked] = useState(0)
    const handleClick = (item, id) => {
        setButtonClicked(id)
        actionOnPress(item)
    }

    return (
        <View>
            <View style={styles.searchCategoriesContainer}>
                {
                    buttons.map((buttonLable, index) => {
                        return (
                            <View>
                                <TouchableOpacity 
                                    onPress={(item) => handleClick(item, index)}
                                    style={[
                                        index === buttonClicked ? styles.searchCategoriesButtonsActive : styles.searchCategoriesButtonsInactive
                                    ]}
                                    key={index}
                                    >
                                    <Text
                                        style={index === buttonClicked ? styles.searchCategoriesTextActive : styles.searchCategoriesTextInactive}
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


const styles = StyleSheet.create({
    searchCategoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -20,
        marginTop: 30,
    },
    searchCategoriesButtonsInactive: {
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: '#F3F3F3'
    },
    searchCategoriesButtonsActive: {
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: '50%',
        backgroundColor: '#EDF6F3',
        borderWidth: 1,
        borderColor: '#e4e4e4',
    },
    searchCategoriesTextActive: {
        color: 'black',
        fontSize: 14,
    },
    searchCategoriesTextInactive: {
        color: '#696B6E',
        fontSize: 14
    } 
})