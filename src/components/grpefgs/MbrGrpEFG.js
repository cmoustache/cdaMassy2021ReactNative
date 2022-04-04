import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const MbrGrpEFG = ({navigation, mbrGrpEFG}) => {

    //const onPress = () => navigation.navigate("UserDetails", {idPersonne:mbrGrpEfg.idPersonne})
    const onPress = () => console.log(mbrGrpEFG.nom)
    return (

        <TouchableOpacity onPress = {onPress} >
            <View style = {styles.mbrGrpEFG} >
                <Text> "{mbrGrpEFG.prenom} {mbrGrpEFG.nom}" </Text>
            </View>
        </TouchableOpacity>
    )
} 

const styles =  StyleSheet.create({
    mbrGrpEFG: {
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: '1',
        borderBottomColor: 'lightgray'
    }
})

export default MbrGrpEFG