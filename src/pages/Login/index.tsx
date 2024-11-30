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
import Checkbox from "expo-checkbox";

interface LoginProps {
  navigation: any;
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
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Nome de usuário ou e-mail */}
        <TextInput
          style={styles.input}
          placeholder="nome de usuário ou e-mail"
          placeholderTextColor="#ADB89D"
        />

        {/* Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#ADB89D"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.passwordToggle}
          >
            <Feather
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#83D1C4"
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
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 81,
  },
  logoImage: {
    width: 200,
    height: 50,
    resizeMode: "contain",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    textAlign: 'left',
    justifyContent: 'flex-start'
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4D4D4D",
    marginBottom: 20,
    alignSelf: 'flex-start'
    
  },
  input: {
    width: "100%",
    backgroundColor: "#DEEFC6",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 14,
    color: "#4D4D4D",
    
  },
  passwordContainer: {
    width: "100%",
    position: "relative",
  },
  passwordToggle: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
    width: 16,
    height: 16,
  },
  rememberMeText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold'
  },
  forgotPassword: {
    fontSize: 12,
    color: "#000000",
    fontWeight: 'bold'
  },
  loginButton: {
    width: "50%",
    backgroundColor: "#B6D985",
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 180,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#004D85",
  },
  registerContainer: {
    marginTop: 10,
  },
  registerText: {
    fontSize: 12,
    color: "#6C6C6C",
  },
  registerLink: {
    color: "#004D85",
    fontWeight: 'bold'
  },
});

export default Login;
