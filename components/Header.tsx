import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
 // Certifique-se de ter o ícone na pasta correta

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Olá, Koda Lima!</Text>
        <View style={styles.membershipContainer}>
          {/* <StarIcon width={16} height={16} fill="#A3A3A3" style={styles.starIcon} /> */}
          <Text style={styles.membershipText}>PRATA</Text>
        </View>
      </View>
      <Image
        style={styles.profileImage}
        source={{uri: '../../assets/images/profileimage1.jpg'}}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
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