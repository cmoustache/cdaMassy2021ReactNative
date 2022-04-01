import React from 'react';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function PropositionForm({propId}) {
    const [libelle, setLibelle] = React.useState('');
    const onChangeLibelle = (libelle) => {
      setLibelle(libelle);
      // alert(`The name you entered was:` +name);
    }
  const [chosenOption, setChosenOption] = useState(''); //will store our current user options
  const options = [
    { label: 'indéfinie', value: 'indéfinie' },
    { label: 'correcte', value: 'correcte' },
    { label: 'incorrecte', value: 'incorrecte' },
  ]; //create our options for radio group
  return (
    <View  contentContainerStyle={styles.PropositionForm}>
      <View style={styles.libelleStyle}>
      <Text style={styles.title}> Proposition {propId}</Text>
      <Text style={styles.libelleLabel} > Ecrivez une proposition de réponse {chosenOption}:</Text>
          <View style={styles.libelleInput}>
            <TextInput
              multiline
              numberOfLines={5}
              // style={styles.input}
              onChangeText={onChangeLibelle}
              value={libelle}
              placeholder="Ecrivez votre proposition"
              keyboardType="default"
            />
          </View>
          <RadioForm style={styles.radio}
            radio_props={options}
            initial={0} //initial value of this group
            buttonColor={'white'}
            selectedButtonColor={'white'}
            animation={true}
            labelHorizontal={true}
            labelStyle={{
              fontSize: 16,
              color: 'white',
            }}
            onPress={(value) => {
              setChosenOption(value);
            }} //if the user changes options, set the new value
          />
      </View>
      </View >



  );
}



const styles = StyleSheet.create({

  title:{
		color: "#ffffff",
		fontSize: 16,
		fontWeight:'bold',
		width:256,
		paddingBottom:6,
  },
  libelleLabel:{
    color: "#ffffff",
    fontSize: 12,
  },
  libelleStyle: {
    borderRadius: 12,
    padding:12,
    backgroundColor:  "#60a1d6",
    color: "#ffffff",
    fontSize: 18,
    textAlign: "left",
    margin: 6,
  },
	libelleInput: {
		borderColor: '#0068bde5',
		borderRadius: 12,
		backgroundColor: '#dfecf7',
		padding:12,
    margin:8,
	},
QuestionForm: {
  alignItems:"center",
},
radio: {
 paddingLeft:16,
}
});