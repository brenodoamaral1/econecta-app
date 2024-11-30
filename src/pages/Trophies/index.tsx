import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ImpactoAmbiental: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seu impacto no meio ambiente</Text>

      <View style={styles.impactContainer}>
        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Materiais Reutilizados</Text>
          <Text style={styles.impactDescription}>12.5kg de resíduos reciclados.</Text>
        </View>

        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Redução de Emissões de CO₂</Text>
          <Text style={styles.impactDescription}>8.0kg de CO₂ evitados.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  impactContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  impactCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 8,
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
