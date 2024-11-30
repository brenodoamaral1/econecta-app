import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Carousel from './Carousel';

import Like from '../assets/Like.svg'
import Dislike from '../assets/Dislike.svg'
import Share from '../assets/Share.svg'
import Comments from '../assets/Comments.svg'

import { Divider } from 'react-native-paper';
import PostButton from './PostButton';
import CriarPostagem from './CriarPostagem';

const posts = [
  {
    id: '1',
    author: 'Cláudia Ferreira',
    time: 'há 53 minutos',
    content:
      'Pessoal, hoje tive um ótimo processo criativo, juntei todas as garrafas de vidro que tinha em casa e fiz bel... Ler mais',
    avatar: 'https://s3-alpha-sig.figma.com/img/7bc6/f809/dcb9b6edbd8398a1013b557f24a97506?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e6SgB~0tMF83hTmE8wy-U5EV1v4LdksL0v79GzSFmxIdoKJIASU~jsb8CgBvuDVmWCoUQQRgJ3gb4ulSK~Jr2-SF99tKdn-B4ShLqACwoFlw2aOwr5Pt6XA3UvPkc7wcFo8omYPebcJkHWaoGBSm0gUwPkVfqUFGBnh3dX~knHZ4a6q0lWcrIepswoRUfKtYKGk3fetCYTiX0aOYcRx7s7RqphgZaxFU~QNoypOPlDNz8~sedvIyCjxpLHN1twafYRVb3er51FmgD4FDFR4K1rMTKuWbOrkI3Ad69LMYCwsbRzqNubsIcOYXEt9YAPwYPz5ECrQywebHNaNDEIwj~A__', // Substitua pela URL do avatar de Cláudia
    images: [
      {
        id: '1',
        image:
          'https://s3-alpha-sig.figma.com/img/07ad/2926/5b316b1865967830ad7dfac6fdd4dc60?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRh2EW6NMBVVEhKPJZM4oquO~K7uVOfT5jxE~Iqu2ulrQlUe0xi5DopUntBx2pGkRgFsH~A2CvJJYOlTazOu7y~-kSpwGW1D0ZizTII-z~jeiokpnB5320BnW8cAmeJyhCYOTlFGZMmrUBsa~cNAalV-zgKQg4-Pxa1Z1wGtx-1XFDe7ZDNZ0z77oNOE6O7XtMJaZk-5BpDFfNNU44lgtiT-3CPUu2yPmByFCN80mweVE-l6rZui5wVPk4~wDrhMUTvnSoE2r80lDYqZssjpUAiWJB-7PwTA9vW0vr0wU~puEUohOtiOm-7wL9lCBc~kLzz7x7je2yLmH145jb1kcw__',
      },
      {
        id: '2',
        image:
          'https://s3-alpha-sig.figma.com/img/61fd/9f94/00adff034d3c5435043359ad6a256601?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfCWP3jDOg7zA53IkWnp9MzonZOl3rdQOgSvptLcWx3iY~gkmJa1FQUdHYzu1w~8-ltA2smPaqIXZxhV-6mbYw40dhXH8qhFMqMLvtf7vvOxprBGpW1vZyOQDJ5aezueXygRusX2qf0V32Gy6Q3E8q5kk9Hmo5HJUCliaexfCrqgZmg6-aUhTZrDMWN~CffP3fWcU7jxqgBRGe0NwoKvkhA6clZ1Y0P-QdmQpBwBxtgmYPfYRj2mfQTCz4BxQfeAp21NylCNQEKgyXSjHCaBPtLWDiywWNC7jFF~8fJg~I4-cJsi5VEERxDsNU-g7XTA769ZntnfW7jknDZZbRzEXg__',
      },
    ],
  },
  {
    id: '2',
    author: 'Ricardo Almeida',
    time: 'há 3 horas',
    content:
      'Qual vocês acham que deve ser meu novo projeto? Trouxe aqui um conceito relacionado à reciclagem!',
    avatar: 'https://s3-alpha-sig.figma.com/img/d03a/f530/5dc3fdbf77a093f942657ae0f7309cc6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HtTNZ4z4Dgn8RN8pBTiOmc6CZet8ryiDWD8obktKpMPnOpX3yqx2eQa3oqSRGCsvnzJ59FisN-vYTQ-WzMMQeLsdMfsUFdlsVKcijtL-Z99nYDWjkTeEZ4mM0tj63ZaZWnRLqCuYxuHIY5BIN~R7-0wOTn-4D9vkzI0QlUntJww6MX~TphxaF7r-bgM77IxjQ2rhjVV2eTXo~kAD8ts3S6ZbuHT4ROPshoY9tWxLcpkvgxL3ghGb~fPkz70GUrBuFWhO~rV0gMTf7DiyKdSip~twSdjCI8XR4VYCoZTcBJ3yxAAv42YO7VF1ZtELxGdnLeo2UA1~4dUqBRh9ugCIvg__', // Substitua pela URL do avatar de Ricardo
    images: [
      {
        id: '1',
        image: 'https://cdn.v2v.net/0x0/filters:format(jpeg):quality(80):fill(white,true)/a291708c-9a91-42f4-bc45-aa4465d16835.jpg?v=63791513125',
      },
      {
        id: '2',
        image: 'https://magazinefeminina.com.br/wp-content/uploads/2024/07/objetos-feitos-com-material-reciclado.webp',
      },
    ],
  },
];

const ComunidadeConectada: React.FC = () => {

    const [showCriarPostagem, setShowCriarPostagem] = useState(false);

    return (
      <View style={styles.container}>
        <View style={ styles.contentContainer }>
          {posts.map((post) => (
            <View key={post.id} style={styles.card}>
              {/* Autor e tempo */}
              <View style={styles.header}>
                <Image
                  source={{
                    uri: post.avatar, // Avatar específico do autor
                  }}
                  style={styles.avatar}
                />
                <View style={styles.headerText}>
                  <Text style={styles.author}>{post.author}</Text>
                  <Text style={styles.time}>{post.time}</Text>
                </View>
              </View>
  
              {/* Conteúdo */}
              <Text style={styles.content}>{post.content}</Text>
  
              {/* Carrossel de imagens específicas para cada post */}
              <Carousel data={post.images} />
  
              {/* Botões de interação */}
              <View style={styles.actionContainer}>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Like />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Dislike />
                  </TouchableOpacity>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Share />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Comments />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
        <PostButton onPress={() => setShowCriarPostagem(true)} />
        {/* Tela Criar Postagem */}
        {showCriarPostagem && (
        <CriarPostagem onClose={() => setShowCriarPostagem(false)} />
      )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: 'relative', // Define posição relativa para o PostButton
      flex: 1,
      backgroundColor: '#fff',
      
    },
    contentContainer: {
        marginBottom: 60,
    },
    card: {
      backgroundColor: '#fff',
      marginBottom: 16,
      padding: 16,
      borderRadius: 8,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    headerText: {
      flex: 1,
    },
    author: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    time: {
      fontSize: 12,
      color: '#777',
    },
    content: {
      fontSize: 14,
      color: '#333',
      marginBottom: 8,
    },
    actionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 8,
    },
    actionButton: {
      padding: 8,
    },
  });
  
  export default ComunidadeConectada;