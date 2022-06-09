import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking } from 'react-native';

const colorGithub = '#010409'
const colorFontGithub = '#C9D1D9'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/90587828?v=4'
const urlToMyGithub = 'https://github.com/MateusGerigk'
const App = () =>{
  const handlePressGoToGithub = async () => {
    console.log('Verificando Link')
    const res = await Linking.canOpenURL(urlToMyGithub)

    if (res){ 
      await Linking.openURL(urlToMyGithub)
      console.log('Link aprovado! Abrindo Link...')
    }
  }
  return (
    <SafeAreaView style ={style.container}> 
      <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
        <View style={style.content}>
          <Image style={style.avatar}source={{uri: imageProfileGithub}}/>
          <Text accessibilityLabel='Nome Mateus Gerigk' style={[style.defaultText, style.name]}>Mateus Gerigk</Text>
          <Text accessibilityLabel='Apelido Mateus Gerigk'style={[style.defaultText, style.nickName]}>MateusGerigk</Text>
          <Text accessibilityLabel='Descrição >Irati-PR | 26 anos | 
            Bacharel em Administração e estudante de Tecnologia em Análise e Desenvolvimento de Sistemas.' style={[style.defaultText, style.description]}>Irati-PR | 26 anos | 
            Bacharel em Administração e estudante de Tecnologia em Análise e Desenvolvimento de Sistemas.</Text>
      <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
          <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
        </View>
      </Pressable>
        </View>
    </SafeAreaView>
  )
}
export default  App

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // EXPANDIR PARA A TELA TODA
    justifyContent:'center',
  },
  content:{
    alignItems:'center',
    padding: 20,

  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor:'purple',
    borderWidth: 2,  
    },
  defaultText:{
    color:'white',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 24,
    color: colorFontGithub,
  },
  nickName:{
    fontSize: 18,
    color: '#4f565e',
  },
  description:{
    fontSize: 14,
    color: colorFontGithub,
  },
  button:{
    marginTop: 20,
    backgroundColor: '#4f565e',
    borderRadius: 10,
    padding: 20,
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 16,
  }
  })
