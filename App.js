import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [weight, onChangeWeight] = useState(0)
  const [height, onChangeHeight] = useState(0)
  var bmi = useState(calculateBMI(weight, height))
  var isMetric = false;

  function calculateBMI(weight, height){
    if (isMetric){
      bmi = (weight/height/height)*10000
    }
    else{
      bmi = (703*weight/height**2)
    }
    return bmi.toFixed(1);
  }

  return (
    <View style={styles.container}>

      <View style={styles.rowView}>
        <Text style={styles.textView}>weight: </Text>
        <TextInput
          style={styles.textField}
          onChangeText = {text=>onChangeWeight(text)}
          value={weight}
          keyboardType='numeric'
        />
        <Text style={styles.unitStyle}>KG</Text>
      </View>

      <View style={styles.rowView}>

        <Text style={styles.textView}>height: </Text>
        <TextInput
          style={styles.textField}
          onChangeText = {text=>onChangeHeight(text)}
          value={height}
          keyboardType='numeric'
        />
        <Text  style={styles.unitStyle}>CM</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.textView}>BMI: </Text>
        <Text style={styles.bmiView}>{calculateBMI(weight,height)}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636364',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: "center"
  },
  textField: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 50,
    textAlign: "center",
    color: 'blue',
    fontSize: 30,
    margin: 10,
    fontFamily: 'Avenir'
  },
  textView: {
    flexDirection: 'row',
    fontSize: 40,
    color: '#fffadd',
    fontFamily: 'Avenir'
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Avenir'
  },
  bmiView: {
    fontSize: 60,
    color: 'white',
    width: 150,
    textAlign: 'center',
    fontFamily: 'Avenir'
  },
  unitStyle:{
    color: 'white',
    fontFamily: 'Avenir'
  }
});
