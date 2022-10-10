import React from "react";
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

export default function Login() {
  const navigation = useNavigation();
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
          />
          <Text style={styles.texto}>Senha</Text>
          <TextInput style={styles.input} placeholder="Senha" />
        </View>

        <View style={styles.areaButton}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Feed")}
          >
            <Text style={{ fontSize: 25, textAlign: "center" }}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCad}>
            <Text style={{ fontSize: 18, textAlign: "center", color:'blue' }}>
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
