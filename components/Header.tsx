import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Divider from './Divider';

import Star from '../assets/Star.svg';

const Header: React.FC = () => {
  return (
    <View>
        <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.greeting}>Olá, Koda Lima!</Text>
            <View style={styles.levelContainer}>
            <Star />
            <Text style={styles.level}>PRATA</Text>
            </View>
        </View>
        <Image
            source={{
            uri: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Substitua pela URL da sua imagem
            }}
            style={styles.profileImage}
        />
        </View>
        <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    marginTop: 60,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  levelContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
    marginLeft: 5,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
});

export default Header;
