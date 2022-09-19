import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Image, StyleSheet } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <Background>
      <Image source={require('../assets/chef.png')} style={styles.image} />
      <Header>The Fastest and Best Food Blog</Header>
      <Paragraph>
        Our job is to fill your tummy with delicious food and fast delivery
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 350,
      marginBottom: 8,
    },
  })

export default Home