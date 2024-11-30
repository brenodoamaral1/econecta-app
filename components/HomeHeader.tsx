import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CalculadoraVerde from './CalculadoraVerde'; // Importa o componente CalculadoraVerde
import AprendeMais from './AprendeMais'; // Importa o componente AprendeMais
import ComunidadeConectada from './ComunidadeConectada'; // Importa o componente ComunidadeConectada

const SearchComponent: React.FC = () => {
  // Estado inicial com "Calculadora Verde" já ativo
  const [activeComponent, setActiveComponent] = useState<string>('CalculadoraVerde');

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
        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'CalculadoraVerde' && styles.highlightButton,
          ]}
          onPress={() => setActiveComponent('CalculadoraVerde')}
        >
          <Text
            style={[
              styles.buttonText,
              activeComponent === 'CalculadoraVerde' && styles.highlightText,
            ]}
          >
            Calculadora Verde
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'AprendeMais' && styles.highlightButton,
          ]}
          onPress={() => setActiveComponent('AprendeMais')}
        >
          <Text
            style={[
              styles.buttonText,
              activeComponent === 'AprendeMais' && styles.highlightText,
            ]}
          >
            Aprende Mais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'ComunidadeConectada' && styles.highlightButton,
          ]}
          onPress={() => setActiveComponent('ComunidadeConectada')}
        >
          <Text
            style={[
              styles.buttonText,
              activeComponent === 'ComunidadeConectada' && styles.highlightText,
            ]}
          >
            Comunidade Conectada
          </Text>
        </TouchableOpacity>
      </View>

      {/* Renderização Condicional */}
      <View style={styles.contentContainer}>
        {activeComponent === 'CalculadoraVerde' && <CalculadoraVerde />}
        {activeComponent === 'AprendeMais' && <AprendeMais />}
        {activeComponent === 'ComunidadeConectada' && <ComunidadeConectada />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,  
    elevation: 5
  },
  highlightButton: {
    backgroundColor: '#B6D985',
  },
  buttonText: {
    fontSize: 13,
    color: '#333',
    justifyContent: 'center',
    textAlign: 'center',
  },
  highlightText: {
    color: '#2c6e49',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 16,
  },
});

export default SearchComponent;
