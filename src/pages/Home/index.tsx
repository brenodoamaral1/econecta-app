import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView  } from "react-native";
import Header from "../../../components/Header";
import HomeHeader from "../../../components/HomeHeader"; 
import CalculadoraVerde from "../../../components/CalculadoraVerde";
import { Picker } from "@react-native-picker/picker";


const App: React.FC = () => {

  return (  
    <ScrollView style={styles.container}>
      
      <Header />

      <HomeHeader />
      
    </ScrollView> 
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
