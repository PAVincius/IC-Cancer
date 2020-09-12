import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import { MonoText } from '../../components/StyledText';
import { Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import styles from '../../constants/Styles';

import CardMyData from '../../components/CardMyData';

export default function HomeScreen({navigation}) {

  return (
    <View style={{flex:1, alignItems: 'center', flexDirection: 'column'}}>
      <View style={{height: 60, marginTop: 40}}>
      <CardMyData/>
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
          onPress={() => {navigation.navigate('CardContact')}}
          style={styles.homeButton}
      >
           <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/agenda.png')}
             resizeMode='contain'
          />
      </TouchableOpacity>
    </View>
  );
}

