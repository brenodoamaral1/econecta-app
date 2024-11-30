import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const campaigns = [
  {
    id: "1",
    image:
      "https://media.licdn.com/dms/image/v2/C5612AQGxNIechRff9w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1634725836954?e=2147483647&v=beta&t=WJDcF7yhWYAdoI006uaP9E9X75NAAr-KGQrjVB3WM-Y",
    title: "Ajude a levar água para a comunidade",
    raised: "R$10.000",
    goal: "R$50.000",
    progress: 20,
  },
  {
    id: "2",
    image:
      "https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg",
    title: "Viva o verde: replantio de árvores",
    raised: "R$25.000",
    goal: "R$60.000",
    progress: 40,
  },
];

const Campanha: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campanhas Ativas</Text>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#6c757d" />
        <TextInput placeholder="Buscar campanhas" style={styles.searchInput} />
      </View>

      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.campaignCard}>
            <Image source={{ uri: item.image }} style={styles.campaignImage} />
            <Text style={styles.campaignTitle}>{item.title}</Text>
            <Text style={styles.campaignDetails}>
             <Text style={styles.raisedAmount}>{item.raised}</Text> de {item.goal}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progress,
                  { width: `${item.progress}%` },
                ]}
              />
            </View>
          </View>
        )}
      />

      {/* Minhas campanhas */}
      <Text style={styles.sectionTitle}>Minhas campanhas</Text>
        <View style={styles.emptyCampaignContainer}>
        {/* Fantasminha e conteúdo */}
        <Image
            source={require('../assets/ghost.png')}
            style={styles.emptyCampaignImage}
        />
        <View style={styles.emptyCampaignContent}>
            <Text style={styles.emptyCampaignText}>Você ainda não criou</Text>
            <TouchableOpacity style={styles.createButton}>
        <View style={styles.createButtonContent}>
            <Image
            source={require('../assets/plus.png')}
            style={styles.createButtonImage}
            />
            <Text style={styles.createButtonText}>Criar campanha</Text>
        </View>
        </TouchableOpacity>

        </View>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BFE7E0",
    borderRadius: 35,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
  },
  campaignCard: {
    backgroundColor: "#ececec",
    borderRadius: 8,
    marginRight: 16,
    padding: 8,
    width: 200,
    overflow: "hidden",
  },
  campaignImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",
  },
  campaignTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  campaignDetails: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
  },
  raisedAmount: {
    color: "#4C97BF",
    fontWeight: "bold",
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#eaf0ec",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#4C97BF",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
  emptyCampaignContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 26
  },
  emptyCampaignImage: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  emptyCampaignContent: {
    flex: 1, // Faz o conteúdo ocupar o restante do espaço
  },
  emptyCampaignText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  createButton: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fff",
    borderRadius: 10, 
    padding: 3,
    alignSelf: "flex-start", 
  },
  createButtonContent: {
    flexDirection: "row", 
    alignItems: "flex-start", 
    marginTop: 11
  },
  createButtonImage: {
    width: 49, 
    height: 35, 
  },
  createButtonText: {
    color: "#4C97BF", 
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 7
  },
});

export default Campanha;
