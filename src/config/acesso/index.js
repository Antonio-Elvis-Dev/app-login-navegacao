import React, { useState } from "react";
import firebase from "../firebaseConnection/firebaseConnection";
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [user, setUser] = useState("");

export async function Cadastrar() {
  await firebase.auth().createUserWithEmailAndPassword(email, password).then((value)=>{
    alert(`User criado: ${value.user.email}`)
    setEmail(value.user.email)
  })
}

export async function Logar() {}

export async function Sair() {}

