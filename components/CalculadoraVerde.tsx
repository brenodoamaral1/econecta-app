import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";

const CalculadoraVerde: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const recommendations = [
    {
      id: "1",
      image: "https://i.pinimg.com/originals/3b/94/9b/3b949bb850f9b7042d2f8304be7494d1.jpg",
      avatar: "https://static.vecteezy.com/ti/fotos-gratis/t2/26408779-mulher-movel-camera-casa-emocao-pessoa-selfie-blogueiro-telefone-smartphone-foto.jpg",
    },
    {
      id: "2",
      image: "https://alunoon.com.br/infantil/atividades/Meio%20Ambiente/240920231701281/20d/2.jpg",
      avatar: "https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg",
    },
    {
      id: "3",
      image: "https://live.staticflickr.com/6123/5960973772_b5f83736c4.jpg",
      avatar: "https://i.pinimg.com/736x/90/f1/d8/90f1d8ae353765328020fec34a25c7ab.jpg",
    },
  ];

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <View style={styles.container}>
      
      <View style={styles.calculatorContainer}>
        <Text style={styles.title}>Calculadora Verde</Text>
        <View style={styles.inputRow}>
          
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Material</Text>
          </TouchableOpacity>
          
          <View style={styles.counter}>
            <TouchableOpacity onPress={decrement} style={styles.counterButton}>
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <TextInput
              value={quantity.toString()}
              style={styles.counterInput}
              editable={false}
            />
            <TouchableOpacity onPress={increment} style={styles.counterButton}>
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.calculateButton}>
          <Text style={styles.calculateButtonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* Recomendações */}
      <Text style={styles.sectionTitle}>Recomendações</Text>
      <FlatList
  data={recommendations}
  horizontal
  keyExtractor={(item) => item.id}
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <View style={styles.recommendationItem}>
      {/* Imagem principal */}
      <Image source={{ uri: item.image }} style={styles.recommendationImage} />
      {/* Avatar */}
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
    </View>
  )}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  calculatorContainer: {
    backgroundColor: "#83D1C4",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C97BF",
    marginBottom: 12,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  dropdown: {
    flex: 1,
    backgroundColor: "#DEEFC6",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    height: 45,
    justifyContent: 'center'
  },
  dropdownText: {
    fontSize: 14,
    backgroundColor: '#DEEFC6',
    color: '#333',
    alignItems: 'center'
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DEEFC6",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  counterButton: {
    padding: 8,
    backgroundColor: '#DEEFC6'
  },
  counterText: {
    fontSize: 18,
    color: "#333",
  },
  counterInput: {
    width: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    backgroundColor: '#DEEFC6',
  },
  calculateButton: {
    backgroundColor: "#4C97BF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  calculateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  recommendationItem: {
    marginRight: 16,
    alignItems: "center",
  },
  recommendationImage: {
    width: 110,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    position: "absolute",
    bottom: 10,
    left: 30,
  },
});

export default CalculadoraVerde;
