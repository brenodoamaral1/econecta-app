import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import HomeHeader from '../../../components/HomeHeader'
import AprendeMais from '../../../components/AprendeMais'


const Home = () => {
  return (
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <HomeHeader />
      </View>
      <View>
        <AprendeMais />
      </View>
    </View>
  </ScrollView>  
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})

export default Home