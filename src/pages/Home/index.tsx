import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView  } from "react-native";
import Header from "../../../components/Header"; // O Header que criamos anteriormente
import { Picker } from "@react-native-picker/picker";


const App: React.FC = () => {
  const recommendations = [
    { id: "1", image: "https://via.placeholder.com/100", name: "Recomendação 1" },
    { id: "2", image: "https://via.placeholder.com/100", name: "Recomendação 2" },
    { id: "3", image: "https://via.placeholder.com/100", name: "Recomendação 3" },
  ];

  return (
  <SafeAreaView>  
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header
        name="Koda Lima"
        membershipLevel="PRATA"
        profileImage=""
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="O que você deseja procurar?"
          placeholderTextColor="#A8D5A8"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Calculadora Verde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButtonOutline}>
          <Text style={styles.categoryButtonOutlineText}>Aprende Mais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButtonOutline}>
          <Text style={styles.categoryButtonOutlineText}>Comunidade Conectada</Text>
        </TouchableOpacity>
      </View>

      {/* Calculator */}
      <View style={styles.calculatorContainer}>
        <Text style={styles.calculatorTitle}>Calculadora Verde</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="Material" value="material" />
        </Picker>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>0</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.calculateButton}>
          <Text style={styles.calculateButtonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* Recommendations */}
      <Text style={styles.recommendationsTitle}>Recomendações</Text>
      <FlatList
        data={recommendations}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.recommendationItem}>
            <Image source={{ uri: item.image }} style={styles.recommendationImage} />
            <Text style={styles.recommendationName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView> 
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E7F3E7",
    borderRadius: 10,
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
  },
  searchButton: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 18,
    color: "#67B567",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: "#67B567",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  categoryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoryButtonOutline: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#67B567",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  categoryButtonOutlineText: {
    color: "#67B567",
    fontWeight: "bold",
  },
  calculatorContainer: {
    backgroundColor: "#E7F3E7",
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
  },
  calculatorTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#67B567",
    borderRadius: 20,
  },
  quantityButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  calculateButton: {
    backgroundColor: "#67B567",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  calculateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  recommendationItem: {
    marginRight: 16,
    alignItems: "center",
  },
  recommendationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  recommendationName: {
    fontSize: 14,
    color: "#333",
  },
});

export default App;
