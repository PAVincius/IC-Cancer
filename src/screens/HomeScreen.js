import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import { MonoText } from '../../components/StyledText';
import { Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import styles from '../../constants/Styles';
import { useAuth } from '../auth';

import CardMyData from '../../components/CardMyData';
import Colors from '../../constants/Colors';

export default function HomeScreen({navigation}) {
  const [, { logout }] = useAuth();

  return (
    <View style={{flex:1, alignItems: 'center', flexDirection: 'column'}}>
        <View style={[styles.header, {padding: 15, height: 80, backgroundColor: '#fff',}]}>
            <View style={{width: 40 }}>
                <Icon
                    name='exit'
                    style={{marginTop: 10}}
                    onPress={ logout }
                />
                <Text>Sair</Text>
            </View>
        </View>
        <ScrollView>
            <View style={stylesCard.container}>
                <TouchableOpacity style={stylesCard.card}
                    onPress={() => {navigation.navigate('Informações Pessoais')}}>
                  <View>
                      <Text style={stylesCard.cardText}>Olá, Eliane Santos</Text>
                      <Text style={stylesCard.cardText}>CPF: 923.884.721-28</Text>
                  </View>
                  <Image
                      source={require('../../assets/images/user.png')}
                      style={stylesCard.cardImage}
                  />
                </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.homeTitleText}>
                Bem vinda !
              </Text>
              <Text>
                Enquanto esteve fora:
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View style={styles.homeButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                  <Image
                  style={styles.imageHomeContainer}
                  source={require('../../assets/images/icon1.png')}
                  resizeMode='contain'
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.homeButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                  <Image
                    style={styles.imageHomeContainer}
                    source={require('../../assets/images/icon2.png')}
                    resizeMode='contain'
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View style={styles.homeButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('Canal Aberto')}}>
                  <Image
                    style={styles.imageHomeContainer}
                    source={require('../../assets/images/icon3.png')}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.homeButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                  <Image
                    style={styles.imageHomeContainer}
                    source={require('../../assets/images/icon4.png')}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.homeTitleText}>Outros serviços:</Text>
            </View>
            <View>
              <TouchableOpacity
                  onPress={() => {navigation.navigate('Agenda')}}
                  style={[styles.homeButton, {marginLeft: '10%'}]}
              >
                <Image
                  style={[styles.imageHomeContainer, {height: '60%', marginTop: 10, alignSelf:'center'}]}
                  source={require('../../assets/images/agenda.png')}
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
};

const stylesCard = StyleSheet.create({
  container: {
      marginTop: 20,
      width: '96%',
  },
  cardText: {
      fontSize: 16,
      padding: 6
  },
  card: {
     backgroundColor: Colors.primaryLight,
     marginBottom: 10,
     width: '100%',
     shadowColor: '#000',
     shadowOpacity: 0.8,
     shadowRadius: 0.1,
     shadowOffset: {
         width: 0,
         height: 8
     },
     flexDirection: 'row',
     borderRadius: 10,
     padding: 5
  },
  cardImage: {
      width: '24%',
      height: 60,
      resizeMode: 'cover',
      borderRadius: 50,
      alignSelf: 'center',
      marginLeft: '30%'
  },
  loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})

