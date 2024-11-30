import React, { useState } from "react";
import Header from "../../../components/Header";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Campanha from "../../../components/Campanhas";
import Mapa from "../../../components/Mapa";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("Campanha"); // Estado para controlar o componente ativo

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Bem-vindo ao portal EcoAjuda</Text>

      {/* Botões de navegação */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.navButton,
            activeComponent === "Campanha" && styles.activeButton,
          ]}
          onPress={() => setActiveComponent("Campanha")}
        >
          <Text
            style={[
              styles.navButtonText,
              activeComponent === "Campanha" && styles.activeButtonText,
            ]}
          >
            Campanhas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            activeComponent === "Mapa" && styles.activeButton,
          ]}
          onPress={() => setActiveComponent("Mapa")}
        >
          <Text
            style={[
              styles.navButtonText,
              activeComponent === "Mapa" && styles.activeButtonText,
            ]}
          >
            Mapa de alerta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Renderização condicional do componente */}
      <View>
        {activeComponent === "Campanha" && <Campanha />}
        {activeComponent === "Mapa" && <Mapa navigation={undefined} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 26,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 7,
    backgroundColor: "#eaf0ec",
    marginHorizontal: 7,
    justifyContent: 'center',
    width: 150,
    height: 50,
  },
  activeButton: {
    backgroundColor: "#4C97BF",
  },
  navButtonText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center", 
    alignSelf: 'center',
  },
  activeButtonText: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
});

export default App;
