import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Ou outra lib de ícones

const SearchComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Campo de busca */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="O que você deseja procurar?"
          style={styles.input}
        />
        <Feather name="search" size={20} color="#6c757d" />
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.highlightButton]}>
          <Text style={[styles.buttonText, styles.highlightText]}>
            Calculadora Verde
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aprende Mais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comunidade Conectada</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DEEFC6',
    borderRadius: 35,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  highlightButton: {
    backgroundColor: '#B6D985',
  },
  buttonText: {
    fontSize: 13,
    color: '#333',
    justifyContent: 'center',
    textAlign: 'center'
  },
  highlightText: {
    color: '#2c6e49',
    fontWeight: 'bold',
  },
});

export default SearchComponent;
