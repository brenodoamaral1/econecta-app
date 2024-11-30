import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import PostPicture from '../assets/PostPicture.svg'

const CriarPostagem: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>×</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Criar postagem</Text>
        <TouchableOpacity>
          <Text style={styles.postButton}>Postar</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.contentContainer}>
      {/* Corpo da Postagem */}
      <View style={styles.body}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} // Substitua pela URL real do avatar
            style={styles.avatar}
          />
          <Text style={styles.username}>Koda Lima</Text>
        </View>
        <TextInput
          placeholder="O que você está pensando?"
          style={styles.textInput}
          multiline
        />
      </View>
        <TouchableOpacity style={styles.postPicture}>
            <PostPicture />
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 250,
    left: 80,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,  
    elevation: 5
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgb(236,236,236)',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    fontSize: 30,
    color: '#888',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postButton: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  body: {
    padding: 16,
    backgroundColor: '#fff'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  postPicture: {
    backgroundColor: '#fff',
    marginTop: 300,
  },
});

export default CriarPostagem;
