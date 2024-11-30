import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const recommendations = [
  {
    id: '1',
    title: 'Transformando lixo em luxo',
    subtitle: 'DIY Reciclagem',
    image: 'https://www.reciclasampa.com.br/imgs/conteudos/10_organizador_infentil.png', // Substitua pela URL real
    profileImage: 'https://img.freepik.com/free-photo/stylish-beautiful-young-afro-american-her-twenties-posing-isolated-indoors-with-confident-smile-crossing-arms-her-chest-people-lifestyle-fashion-concept_343059-1812.jpg?t=st=1732935005~exp=1732938605~hmac=06aaa0691cd0666e849a31312c1a0a4caf7b2b3a54a78b065150c2a85f83dfa1&w=900',
  },
  {
    id: '2',
    title: 'Transformando lixo em luxo',
    subtitle: 'DIY Reciclagem',
    image: 'https://www.soescola.com/wp-content/uploads/2017/05/reciclagem-sucata-ideias-atividades.png', // Substitua pela URL real
    profileImage: 'https://img.freepik.com/free-photo/waist-up-shot-happy-carefree-attractive-curly-haired-girl-with-tattooed-arms-toothy-white-smile-cross-hands-chest-gazing-camera-enthusiastic-standing-white-wall_176420-37620.jpg?t=st=1732935043~exp=1732938643~hmac=0e44ec7c6f6a8d09dada30a96d0fa50a65bd796bc5c520c430d826f5f2043eba&w=900', // Substitua pela URL real
  },
];

const AprendeMais: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recomendações para você</Text>
      {recommendations.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Image
              source={{ uri: item.profileImage }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  playIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AprendeMais;
