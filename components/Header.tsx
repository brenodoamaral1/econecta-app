import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
 // Certifique-se de ter o ícone na pasta correta

interface HeaderProps {
  name: string;
  membershipLevel: string; // Exemplo: "PRATA", "OURO"
  profileImage: string; // URL ou caminho da imagem
}

const Header: React.FC<HeaderProps> = ({ name, membershipLevel, profileImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Olá, {name}!</Text>
        <View style={styles.membershipContainer}>
          {/* <StarIcon width={16} height={16} fill="#A3A3A3" style={styles.starIcon} /> */}
          <Text style={styles.membershipText}>{membershipLevel}</Text>
        </View>
      </View>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  membershipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  starIcon: {
    marginRight: 4,
  },
  membershipText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#A3A3A3",
    textTransform: "uppercase",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Header;