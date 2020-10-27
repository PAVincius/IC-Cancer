import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../../constants/Styles';
import { Ionicons } from '@expo/vector-icons/';

import Colors from '../../constants/Colors';
import { TabBg } from '../../components/Tabbg';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

//line 19 start header

export default function Noticias({navigation}){
  return(
    <View style={{flex:1, flexDirection:'column'}}>
        <View>
          <ImageBackground style={styles.noticiasImage} source={require('../../assets/images/noticiasmascara.png')}>
            <LinearGradient
              colors={[Colors.BlueGrey, 'transparent']}
              style={styles.noticias}>
            <View style={{flexDirection:'row', justifyContent:'space-between', margin:20, alignItems:'center'}}>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate('Home')}}>
                <Ionicons
                  name="ios-arrow-back"
                  size={30}
                  color={Colors.White}
                />
              </TouchableWithoutFeedback>
              <Text style={[styles.textbold,{fontSize:22, color:Colors.White}]}>
                Últimas atualizações Covid-19
              </Text>
              <Text style={[styles.textbold,{fontSize:12, color:Colors.White}]}>
                Goiânia/GO
              </Text>
            </View>
            </LinearGradient>
          </ImageBackground>
          <View>
            <View style={[styles.noticias2,{marginTop: '-8%'}]}>
              <View>
                <Text style={[styles.textbold,{color:Colors.DarkPurple}]}>
                  Lorem ipsum
                </Text>
                <View style={{flexDirection:'row'}}>
                  <Ionicons
                    name="ios-pin"
                    size={20}
                    color={Colors.Green}
                  />
                  <Text style={{marginLeft:10}}>
                  Goiânia/GO
                  </Text>
                </View>
                <Text style={{marginVertical:10}}>
                  09:30 AM
                </Text>
                <View style={styles.separator}></View>
              </View>
              <ScrollView>
                <Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={[styles.bordercontainer,{width:160, height: 100}]}>
                    <Image
                      style={{flex:1, width:null, borderRadius:15}}
                      source={require('../../assets/images/Imagem19.png')}
                      resizeMode='cover'>
                    </Image>
                  </View>
                  <View style={[styles.bordercontainer,{width:160, height: 100}]}>
                    <Image
                      style={{flex:1, width:null, borderRadius:15}}
                      source={require('../../assets/images/POST-5_10.png')}
                      resizeMode='cover'>
                    </Image>
                  </View>
                </View>
                <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolorLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolorLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolorLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                </Text>
              </ScrollView>
            </View>
          </View>

        </View>
    </View>
  );
};
