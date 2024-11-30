import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView  } from "react-native";
import Header from "../../../components/Header";
import HomeHeader from "../../../components/HomeHeader"; 

const Home: React.FC = () => {

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
    padding: 16,
    backgroundColor: "#fff",
  },
})

export default Home