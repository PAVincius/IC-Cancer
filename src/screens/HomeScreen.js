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
    <ScrollView>
    <View style={{flex:1, alignItems: 'center', flexDirection: 'column'}}>
        <View style={[styles.header, {padding: 15, height: 70, backgroundColor: '#fff', }]}>
            <View style={{width: 40, backgroundColor: Colors. primary}}>
                <Icon
                    name='exit'
                    style={{marginTop: 10}}
                    onPress={ logout }
                /> 
                <Text>Sair</Text>
            </View>
            
        </View>
      <View style={stylesCard.container}>
          <TouchableOpacity style={stylesCard.card}
              onPress={() => {navigation.navigate('Informações Pessoais')}}
          >
              <View>
                  <Text style={stylesCard.cardText}>Olá, Rodrigo Santos</Text>
                  <Text style={stylesCard.cardText}>CPF: 923.884.721-28</Text>
              </View>
              <Image
                  source={require('../../assets/images/user.png')}
                  style={stylesCard.cardImage}
              />
          </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.homeTitleText}>
          Bem vinda !
        </Text>
        <Text>
          Enquanto esteve fora:
        </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={styles.homeButton}>
          <Image
            style={styles.imageHomeContainer}
            source={require('../../assets/images/icon1.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.homeButton}>
          <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/icon2.png')}
             resizeMode='contain'
          />
        </View>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={styles.homeButton}>
          <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/icon3.png')}
             resizeMode='contain'
          />
        </View>
        <View style={styles.homeButton}>
          <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/icon4.png')}
             resizeMode='contain'
          />
        </View>
      </View>
      <TouchableOpacity 
          onPress={() => {navigation.navigate('Agenda')}}
          style={styles.homeButton}
      >
           <Image
             style={[styles.imageHomeContainer, {height: '75%', marginTop: 15}]}
             source={require('../../assets/images/agenda.png')}
             resizeMode='contain'
          />
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const stylesCard = StyleSheet.create({
  container: {
      marginTop: 20
  },
  cardText: {
      fontSize: 16,
      padding: 6
  },
  card: {
     backgroundColor: '#fff',
     marginBottom: 10,
     marginLeft: '2%',
     width: '96%',
     shadowColor: '#000',
     shadowOpacity: 0.8,
     shadowRadius: 0.1,
     shadowOffset: {
         width: 0,
         height: 8
     },
     flexDirection: 'row',
     borderRadius: 6,
     padding: 5
  },
  cardImage: {
      width: '20%',
      height: 60,
      resizeMode: 'cover',
      borderRadius: 50,
      alignSelf: 'center'
  },
  loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})

