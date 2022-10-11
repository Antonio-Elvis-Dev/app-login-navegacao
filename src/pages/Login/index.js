import React, { useState } from "react";
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

import { StatusBarHeight } from "../../config/components";

import firebase from "../../config/firebaseConnection/firebaseConnection";

console.disableYellowBox = true;

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState("");

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((value) => {
        alert(`User criado: ${value.user.email}`);
        setEmail(value.user.email);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          alert("Email invalido");
          return;
        } else {
          alert("ops algo deu errado");
          return;
        }
      });
  }

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((value) => {
        alert("Bem-vindo: " + value.user.email);
        setUser(value.user.email)
        navigation.navigate("Feed")
      })
      .catch((error)=>{
        alert("Algo deu errado")
        return
      })
    setEmail("");
    setSenha("");
  }

  async function sair() {
    await firebase
    .auth().signOut()
    setUser("")
    setSenha("")
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#7ee4db" }}>
      <SafeAreaView style={[styles.container, { marginTop: StatusBarHeight }]}>
        <View style={styles.areaImage}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.jpg")}
          />
        </View>
        <View style={styles.areaForm}>
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
          />
        </View>

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.buttonLogin} onPress={logar}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCad}>
            <Text
              style={{ fontSize: 18, textAlign: "center", color: "blue" }}
              onPress={cadastrar}
            >
              Cadastrar-se
            </Text>
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
    marginTop: 20,
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
    marginTop: "20%",
  },
  texto: {
    fontSize: 25,
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
