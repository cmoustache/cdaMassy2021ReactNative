import React from "react";
import{ StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { View, Text, SectionList, StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from "react-redux";
import MbrGrpEFG from "./MbrGrpEFG"

const GrpEFGs = () => {

    const mbrGrpEFGs = useSelector((state) => state.reducer.mbrGrpEFGs); 

    // const mbrGrpEFGsObj = mbrGrpEFGs.reduce((accum, current) => {
    //   let groupeCreateur = accum.find((x) => x.idCreateur === current.idCreateur);
    //   if (!groupeCreateur) {
    //     groupeCreateur = { idCreateur: current.idCreateur, data: [] };
    //     accum.push(groupeCreateur);
    //   }
    //   groupeCreateur.data.push(current);
    //   return accum;
    // }, []);

    // fetch('https://cdamassy2021/Time=21')
    // .then(r => r.json())
    // .then(r => {

    const mbrGrpEFGsObj = mbrGrpEFGs.reduce((r,s) => {
    r.push({idCreateur: s.idCreateur,  data: s.nom});
    return r;
  }, []);

//   this.setState({ movieData });
// });
  
    //console.log("%j", mbrGrpEFGsObj);
  //console.log(JSON.stringify(mbrGrpEFGsObj))

    return (
     <SafeAreaView style={styles.container}>
        <SectionList
            sections= {mbrGrpEFGsObj}
            keyExtractor={ (item, index) => (item.idPersonne + index)}
            renderItem = {({ item }) => ( 
                <View style = {styles.container}>
                    <GrpEFG mbrGrpEFG={item} />
                </View>
            )}
            renderSectionHeader= {({ section }) => (
              <View style={{ padding: 8, backgroundColor: '#4fc3c8' }}>
                <Text style={{ color: 'white' }}>{section.key.toUpperCase()}</Text>
              </View>
            )}
            stickySectionHeadersEnabled
        />
    </SafeAreaView>
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

export default GrpEFGs
