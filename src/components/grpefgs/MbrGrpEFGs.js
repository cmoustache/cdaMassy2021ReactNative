import React from "react";
import{ StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from "react-redux";
import MbrGrpEFG from "./MbrGrpEFG"

const MbrGrpEFGs = () => {

    const mbrGrpEFGs = useSelector((state) => state.reducer.mbrGrpEFGs);  
    return (
    // <SafeAreaView style={styles.container}>
        <FlatList
            data = {mbrGrpEFGs}
            keyExtractor={ (mbrGrpEFG) => String(mbrGrpEFG.idPersonne)}
            renderItem = {({ item }) => ( 
                <View style = {styles.container}>
                    <MbrGrpEFG mbrGrpEFG={item} />
                </View>
            )}
        />
   // </SafeAreaView>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#f9c2ff",
            padding: 20,
            marginVertical: 8
        },
        header: {
            fontSize: 32,
            backgroundColor: "#fff"
        },
        footer: {
            fontSize: 24
        }
    });

export default MbrGrpEFGs
