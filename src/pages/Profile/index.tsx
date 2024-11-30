import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons"; // Ícones de exemplo
import ProfileIcon from '../../../assets/ProfileIcon.svg'
import NotificationIcon from '../../../assets/NotificationIcon.svg'
import LocIcon from '../../../assets/LocIcon.svg'
import HelpIcon from '../../../assets/HelpIcon.svg'
import DeleteIcon from '../../../assets/DeleteIcon.svg'
import LeaveIcon from '../../../assets/LeaveIcon.svg'

const Perfil: React.FC = () => {
  const [notificacoes, setNotificacoes] = useState<boolean>(true);
  const [localizacao, setLocalizacao] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      {/* Cabeçalho com a imagem */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Substitua pela URL real da imagem
          }}
          style={styles.profileImage}
        />
      </View>
      
      {/* Itens de Configuração */}
      <View style={styles.itemContainer}>
      <Text style={styles.profileName}>Koda Lima</Text>
        {/* Informações de perfil */}
        <TouchableOpacity style={styles.item}>
          <ProfileIcon />
          <Text style={styles.itemText}>Informações de perfil</Text>
        </TouchableOpacity>

        {/* Notificações */}
        <View style={styles.item}>
          <NotificationIcon />
          <Text style={styles.itemText}>Notificações</Text>
          <Switch
            value={notificacoes}
            onValueChange={() => setNotificacoes(!notificacoes)}
            thumbColor={notificacoes ? "#46953C" : "#46953C"}
            trackColor={{ false: "#46953C", true: "#B6D985" }}
          />
        </View>

        {/* Localização */}
        <View style={styles.item}>
          <LocIcon />
          <Text style={styles.itemText}>Localização</Text>
          <Switch
            value={localizacao}
            onValueChange={() => setLocalizacao(!localizacao)}
            thumbColor={localizacao ? "#46953C" : "#46953C"}
            trackColor={{ false: "#46953C", true: "#B6D985" }}
          />
        </View>

        {/* Ajuda */}
        <TouchableOpacity style={styles.item}>
          <HelpIcon />
          <Text style={styles.itemText}>Ajuda</Text>
        </TouchableOpacity>

        {/* Apagar conta */}
        <TouchableOpacity style={styles.item}>
          <DeleteIcon />
          <Text style={[styles.itemText, styles.dangerText]}>
            Apagar conta
          </Text>
        </TouchableOpacity>

        {/* Sair */}
        <TouchableOpacity style={styles.item}>
          <LeaveIcon />
          <Text style={[styles.itemText, styles.dangerText]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#BFE7E0",
    alignItems: "center",
    paddingTop: 150,
    paddingBottom: 20,
    marginTop: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 60,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4D4D4D",
    marginTop: -15,
    marginBottom: 30,
    alignSelf: 'center',
  },
  itemContainer: {
    marginTop: 60,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#4D4D4D",
    flex: 1,
    marginLeft: 10,
  },
  dangerText: {
    color: "#F54D4D",
  },
});

export default Perfil;
