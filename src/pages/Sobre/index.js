import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logout from '../Login'

import firebase from '../../config/firebaseConnection/firebaseConnection';

export default function Sobre() {

const navigation = useNavigation()

async function sair() {
  await firebase
  .auth().signOut()
 alert("Saiu")
  navigation.navigate("Login")
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style={{borderWidth:1, padding:10, margin:10, borderRadius:8}}
      onPress={sair}
      >
        
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
