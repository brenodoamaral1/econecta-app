import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';

interface CarouselItem {
  id: string;
  image: string; // URL ou caminho da imagem
}

interface CarouselProps {
  data: CarouselItem[]; // Lista de imagens a serem exibidas no carrossel
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <View style={styles.card}>
      {/* Carrossel de Imagens */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.postImage} />
          </View>
        )}
        style={styles.imageCarousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
  },
  imageCarousel: {
    marginTop: 8,
  },
  postImage: {
    width: 200, // Largura das imagens no carrossel
    height: 150,
    borderRadius: 8,
    marginRight: 8, // Espaçamento entre imagens
  },
});

export default Carousel;
