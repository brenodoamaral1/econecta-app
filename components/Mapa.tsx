import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import AlertaPin from '../assets/AlertaPin.svg'
import { SafeAreaView } from "react-native-safe-area-context";

interface InputFields {
  titulo: string;
  outraCategoria: string;
  localizacao: string;
}

interface AdicionarAlertaProps {
  navigation: any; // Altere para o tipo correto se você estiver usando react-navigation
}

const MapaAlerta: React.FC<AdicionarAlertaProps> = ({ navigation }) => {
  const [category, setCategory] = useState<string>("");
  const [inputs, setInputs] = useState<InputFields>({
    titulo: "",
    outraCategoria: "",
    localizacao: "",
  });

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleInputChange = (name: keyof InputFields, value: string) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    // Reset dos campos após envio
    setCategory("");
    setInputs({
      titulo: "",
      outraCategoria: "",
      localizacao: "",
    });
  };

  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <AlertaPin />
        <Text style={styles.title}>Mapa de Alerta</Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -16.68919316138317,
          longitude: -49.273407485741714,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude:-16.713129216448422, longitude: -49.28718162582892 }}
          title="Localização"
          description="Local do alerta"
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>⚠️</Text>
          </View>
        </Marker>
      </MapView>


      <Text style={styles.subTitle}>Categoria</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === "Queimada" ? styles.selectedCategory : null
          ]}
          onPress={() => handleCategoryChange("Queimada")}
        >
          <Text
            style={[
              styles.categoryText,
              category === "Queimada" ? styles.selectedCategoryText : null
            ]}
          >
            Queimada
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === "Poluição" ? styles.selectedCategory : null
          ]}
          onPress={() => handleCategoryChange("Poluição")}
        >
          <Text
            style={[
              styles.categoryText,
              category === "Poluição" ? styles.selectedCategoryText : null
            ]}
          >
            Poluição
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            category === "Outros" ? styles.selectedCategory : null
          ]}
          onPress={() => handleCategoryChange("Outros")}
        >
          <Text
            style={[
              styles.categoryText,
              category === "Outros" ? styles.selectedCategoryText : null
            ]}
          >
            Outros
          </Text>
        </TouchableOpacity>
      </View>

      {category === "Outros" ? (
        <>
          <Text style={styles.subTitle}>Outra categoria</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Deslizamento"
            placeholderTextColor="#808080"
            value={inputs.outraCategoria}
            onChangeText={(text) => handleInputChange("outraCategoria", text)}
          />
        </>
      ) : null }

      <Text style={styles.subTitle}>Localização</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua, Bairro, Cidade"
        placeholderTextColor="#808080"
        value={inputs.localizacao}
        onChangeText={(text) => handleInputChange("localizacao", text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Enviar</Text>
      </TouchableOpacity>
      
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    marginLeft: 10,
    color: "rgba(176, 35, 4, 1)",
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 150,
    backgroundColor: "rgba(142, 188, 218, 0.2)",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
  },
  image: {
    width: 230,
    height: 110,
    marginRight: 20,
    borderRadius: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#4D4D4D",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryButton: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  selectedCategory: {
    backgroundColor: "rgba(176, 35, 4, 1)",
  },
  categoryText: {
    color: "#808080",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  map: {
    marginTop: 10,
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  marker: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 20,
    padding: 5,
  },
  markerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  submitButton: {
    height: 40,
    backgroundColor: "rgba(176, 35, 4, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 110,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MapaAlerta;
