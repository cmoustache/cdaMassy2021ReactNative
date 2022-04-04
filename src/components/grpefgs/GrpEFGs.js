import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";
import MbrGrpEFG from "./MbrGrpEFG";

const MbrGrpEFGs = () => {
  const mbrGrpEFGs = useSelector((state) => state.reducer.mbrGrpEFGs);

  // const groupBy = (array, key) => {
  //     // Return the end result
  //     return array.reduce((result, currentValue) => {
  //         // If an array already present for key, push it to the array. Else create an array and push the object
  //         (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
  //     // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
  //     return result;
  //   }, {}); // empty object is the initial value for result object
  // };
  // Group by idCreateur (c'est à dire par Groupe Exercice)
  //   const mbrGrpEFGsByGroups = groupBy(mbrGrpEFGs, 'idCreateur');

  const DATA = mbrGrpEFGs.reduce((accum, current) => {
    let groupeCreateur = accum.find((x) => x.idCreateur === current.idCreateur);
    if (!groupeCreateur) {
      groupeCreateur = { idCreateur: current.idCreateur, data: [] };
      accum.push(groupeCreateur);
    }
    groupeCreateur.data.push(current);
    return accum;
  }, []);

  console.log("%j", DATA);

  const Item = ({ idCreateur }) => (
    <View style={styles.item}>
      <Text style={styles.idCreateur}>{idCreateur}</Text>
    </View>
  );

  const App = () => (
    //<SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item idCreateur={item} />}
      renderSectionHeader={({ section: { idCreateur } }) => (
        <Text style={styles.header}>{idCreateur}</Text>
      )}
    />
    //</SafeAreaView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff",
    },
    idCreateur: {
      fontSize: 24,
    },
  });
};

export default GrpEFGs;
