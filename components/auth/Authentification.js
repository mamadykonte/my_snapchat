import React, { useState} from 'react';
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
const AuthComponent = ({ title, AuthConfig, root }) => {
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dataLogin = { email: email, password: password };
    const url = "http://snapi.epitech.eu:8000" + root;
    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (!regex.test(dataLogin.email)) {
                setError("Veillez saisir le bon format d'email");
            }else if (dataLogin.password.length < 8 && title === "Inscription") {
              setError(
                "mot de passe trop courte saisissez minimum 8 caractere"
              );
            } else AuthConfig(url, dataLogin);
        } catch (error) {
            console.log(error);
            setError('Identifiant incorrect');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.formBox}>
                <Text style={style.title}>{title}</Text>
                <View style={style.inputBox}>
                    <Text style={style.label}>ADRESSE E-MAIL</Text>
                    <View>
                        <TextInput onChangeText={e => setEmail(e)} style={style.input} />

                    </View>
                </View>
                <View style={style.inputBox}>
                    <Text style={style.label}>MOT DE PASSE</Text>
                    <TextInput onChangeText={e => setPassword(e)} style={style.input} />
                </View>
            </View>
            <Text style={style.error}>{error}</Text>
            <Button onPress={e => handleSubmit(e)} style={style.btnLogin} title={title} />
        </View>
    );
};
export default AuthComponent;

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    label: { color: "#0091ff" },

    input: {
        borderBottomWidth: 1,
    },

    title: { fontSize: 24, textAlign: "center", margin: 20 },

    formBox: {},
    inputBox: {
        marginBottom: 10
    },
    btnLogin: {
        position: "absolute",
        bottom: " 2%",
        padding: "7px 20px",
        borderRadius: 15,
        backgroundColor: "#5c5c5ccf",
        color: "white",
    },
    error: {
        color: "red"
    }
});
