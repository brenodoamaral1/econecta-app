import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Header from "../../../components/Header";
import  ProgressBar  from "../../../assets/ProgressBar.svg";
import  CheckboxMarcada  from "../../../assets/CheckboxMarcada.svg";
import  Checkbox  from "../../../assets/Checkbox.svg";
import  Materiais  from "../../../assets/Materiais.svg";
import  Redução  from "../../../assets/Redução.svg";

const ImpactoAmbiental: React.FC = () => (
  <ScrollView style={styles.container}>

    <Header />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Faltam 200 pontos para chegar ao nível </Text>
      <Text style={styles.titleOuro}>Ouro</Text>
    </View>
    <ProgressBar height={'200'} width={'100%'} />

    {/* Como alcançar o próximo nível */}
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle1}>Como alcançar</Text>
        <Text style={styles.cardTitle}> o próximo nível?</Text>
        <View style={styles.item}>
          <CheckboxMarcada />
          <Text style={styles.itemText}>
            Faça 5 postagens <Text style={styles.progressText}>(5/5)</Text>
          </Text>
        </View>
        <View style={styles.item}>
          <Checkbox />
          <Text style={styles.itemText}>
            Assista 2 videoaulas <Text style={styles.progressText}>(1/2)</Text>
          </Text>
        </View>
        <View style={styles.item}>
          <Checkbox />
          <Text style={styles.itemText}>
            Venda 5 produtos <Text style={styles.progressText}>(3/5)</Text>
          </Text>
        </View>
      </View>

      {/* O que você já conquistou */}
      <View style={[styles.card, styles.completedCard]}>
        <Text style={styles.cardTitle1}>O que você já conquistou</Text>
        <Text style={styles.cardTitle}></Text>
        <Text style={styles.itemText}>Faça 5 postagens</Text>
        <Text style={styles.itemText}>
          Vendeu 10 garrafas de vidro
        </Text>
        <Text style={styles.itemText}>
          Assistiu a uma videoaula DIY
        </Text>
        <Text style={styles.itemText}>
          Interagiu na comunidade
        </Text>
      </View>
    </View>
    <Text style={styles.header}>Seu impacto no meio ambiente</Text>

    <FlatList
      data={[
        {
          id: '1',
          icon: <Materiais height={250} width={240} />,
        },
        {
          id: '2',
          icon: <Redução height={250} width={240} />,
        },
        {
          id: '3',
          icon: <Materiais height={250} width={240} />,
        },
      ]}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.impactCard}>
          {item.icon}
        </View>
      )}
    />


  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  title: {
    color: '#4D4D4D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleOuro: {
    color: '#C9BD7A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    backgroundColor: "#DFF5E3", // Verde claro
  },
  cardTitle1: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#4D4D4D",
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#4D4D4D",
    alignSelf: 'center',
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkBox: {
    fontSize: 10,
    color: "#4C97BF", // Azul para ícones ou emojis
    marginRight: 2,
  },
  itemText: {
    fontSize: 10,
    color: "#4D4D4D",
    marginBottom: 5,
    marginLeft: 5,
  },
  progressText: {
    fontSize: 12,
    color: "#808080",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "left",
  },
  impactContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  impactCard: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  impactTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  impactDescription: {
    fontSize: 12,
    color: "#4D4D4D",
    marginTop: 8,
    textAlign: "center",
  },
});

export default ImpactoAmbiental;
