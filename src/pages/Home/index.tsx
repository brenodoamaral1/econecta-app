import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView  } from "react-native";
import Header from "../../../components/Header";
import HomeHeader from "../../../components/HomeHeader"; 
import ComunidadeConectada from '../../../components/ComunidadeConectada'

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
    backgroundColor: '#fff',
  },
})

export default Home