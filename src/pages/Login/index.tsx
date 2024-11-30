import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox'

interface LoginProps {
  navigation: any; // Altere se usar tipagem específica para navegação
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    navigation.navigate("TabRoutes");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.header}>
        <Text style={styles.logoText}>econecta</Text>
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Nome de usuário ou e-mail */}
        <TextInput
          style={styles.input}
          placeholder="nome de usuário ou e-mail"
          placeholderTextColor="#6C6C6C"
        />

        {/* Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#6C6C6C"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.passwordToggle}
          >
            <Feather
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#6C6C6C"
            />
          </TouchableOpacity>
        </View>

        {/* Opções */}
        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <Checkbox
              value={rememberMe}
              onValueChange={setRememberMe}
              style={styles.checkbox}
            />
            <Text style={styles.rememberMeText}>Lembrar-me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Link para Cadastro */}
        <TouchableOpacity
          style={styles.registerContainer}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>
            Não tem uma conta?{" "}
            <Text style={styles.registerLink}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CAF50",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Arial",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 14,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
  },
  rememberMeText: {
    fontSize: 12,
    color: "#6C6C6C",
  },
  forgotPassword: {
    fontSize: 12,
    color: "#4CAF50",
    textDecorationLine: "underline",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#8BC34A",
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  registerContainer: {
    marginTop: 10,
  },
  registerText: {
    fontSize: 12,
    color: "#6C6C6C",
  },
  registerLink: {
    color: "#4CAF50",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Login;
