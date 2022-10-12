import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// import { StatusBarHeight } from "../../config/components";

import firebase from "../../config/firebaseConnection/firebaseConnection";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((value) => {
        // alert(value.user.uid)
        firebase.database().ref('usuarios').child(value.user.uid).set({
            nome:nome
        })
        alert("Usuario Criado")
        setNome('')
        setEmail('')
        setSenha('')
      })

      .catch((error) => {
        alert("Algo deu errado");
        return;
      });
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#7ee4db" }}>
      <SafeAreaView style={[styles.container]}>
        <View style={styles.areaImage}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.jpg")}
          />
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            Cadastrar-se
          </Text>
        </View>
        <View style={styles.areaForm}>
          <Text style={styles.texto}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Maria Joana"
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />
          <Text style={styles.texto}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: maria123@gmail.com"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
          <Text style={styles.texto}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
            // secureTextEntry={true}
          />
        </View>

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.buttonLogin} onPress={cadastrar}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#29ecf3",
  },
  areaForm: {
    justifyContent: "center",
    alignItems: "center",
  },
  areaButton: { alignItems: "center" },
  buttonLogin: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    marginTop: 10,
    backgroundColor: "#b4d8f5",
  },
  buttonCad: {
    borderRadius: 8,
    marginTop: 10,
  },
  areaImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
    marginTop: "10%",
  },
  texto: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginStart: "10%",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    fontSize: 18,
  },
});
