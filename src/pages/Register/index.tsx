import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#A9A9A9" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A9A9A9" />

        <View style={styles.row}>
          <TextInput style={[styles.input, styles.rowItem]} placeholder="CPF" placeholderTextColor="#A9A9A9" />
          <TextInput style={[styles.input, styles.rowItem]} placeholder="Gênero" placeholderTextColor="#A9A9A9" />
        </View>

        <View style={styles.row}>
          <TextInput style={[styles.input, styles.rowItem]} placeholder="Nascimento" placeholderTextColor="#A9A9A9" />
          <TextInput style={[styles.input, styles.rowItem]} placeholder="CEP" placeholderTextColor="#A9A9A9" />
        </View>

        <TextInput style={styles.input} placeholder="Endereço" placeholderTextColor="#A9A9A9" />
        <TextInput style={styles.input} placeholder="Complemento" placeholderTextColor="#A9A9A9" />

        <View style={styles.row}>
          <TextInput style={[styles.input, styles.rowItem]} placeholder="Cidade" placeholderTextColor="#A9A9A9" />
          <TextInput style={[styles.input, styles.rowItem]} placeholder="Bairro" placeholderTextColor="#A9A9A9" />
        </View>

        {/* Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.passwordToggle}
          >
            <Feather
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#346788"
            />
          </TouchableOpacity>
        </View>

        {/* Confirmar Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Repetir Senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!confirmPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.passwordToggle}
          >
            <Feather
              name={confirmPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#346788"
            />
          </TouchableOpacity>
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={termsAccepted}
            onValueChange={setTermsAccepted}
            style={styles.checkbox}
            color={termsAccepted ? "#6192B1" : undefined}
          />
          <Text style={styles.termsText}>
            Eu li e concordo com os{" "}
            <Text style={styles.termsLink}>termos de uso</Text>
          </Text>
        </View>

        {/* Botão Cadastrar */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Link para Login */}
        <TouchableOpacity
          style={styles.loginLinkContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginLink}>
            Já possuo cadastro
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6192B1",
    marginBottom: 20,
    marginTop: 35
  },
  formContainer: {
    width: "90%",
  },
  input: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 14,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    width: "48%",
  },
  passwordContainer: {
    width: "100%",
    position: "relative",
  },
  passwordToggle: {
    position: "absolute",
    right: 20,
    top: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 10
  },
  checkbox: {
    marginRight: 8,
    color: '#6192B1'
    
  },
  termsText: {
    fontSize: 12,
    color: "#A9A9A9",
  },
  termsLink: {
    color: "#6192B1",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#6192B1",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    alignSelf: 'center',
    marginBottom: 16,
    width: '50%'
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  loginLinkContainer: {
    alignItems: "center",
  },
  loginLink: {
    fontSize: 14,
    color: "#6192B1",
    textDecorationLine: "underline",
  },
});

export default Register;
