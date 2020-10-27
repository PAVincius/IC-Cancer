import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../constants/Styles';
import { useAuth } from '../auth';
import {LinearGradient} from 'expo-linear-gradient';
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors';
import { TabBg } from '../../components/Tabbg';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({navigation}) {

  return (
    <View>
      <LinearGradient
          colors={[Colors.themeOne_gradient, Colors.themeOne_gradient2]}
          style={[styles.header,{height:300}]}>
          <View style={[styles.header, {padding: '15%', height: 300}, {flexDirection: 'column', justifyContent:'space-between', alignItems:'center'}]}>
            <Image style={[styles.IconProfile,{borderWidth: 5}]} source={require('../../assets/images/avatar11.png')}/>
            <View style={{marginVertical:10}}>
              <Text style={[styles.homeTitleText,{color: Colors.White}]}>
                Amanda Gonsalves
              </Text>
              <Text style={[styles.homeTitleText,{color: Colors.Blue}]}>
                CPF: 946.825.001-63
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={[styles.noticias2,{marginTop: '5%', margin:30}]}>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons
                name="md-filing"
                size={35}
                color={Colors.DarkPurple}
                style={{marginLeft:10}}
              />
            <Text style={[styles.textBasic,{fontSize:22, marginRight:100, color:Colors.SoftGrey}]}>Meus Exames</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color={Colors.DarkPurple}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons
                name="md-calendar"
                size={35}
                color={Colors.DarkPurple}
                style={{marginLeft:10}}
              />
            <Text style={[styles.textBasic,{fontSize:22, marginRight:100, color:Colors.SoftGrey}]}>Compromissos</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color={Colors.DarkPurple}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons
                name="md-search"
                size={35}
                color={Colors.DarkPurple}
                style={{marginLeft:10}}
              />
              <Text style={[styles.textBasic,{fontSize:22, marginRight:100, color:Colors.SoftGrey}]}>Consultas Online</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color={Colors.DarkPurple}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons
                name="md-time"
                size={35}
                color={Colors.DarkPurple}
                style={{marginLeft:10}}
              />
              <Text style={[styles.textBasic,{fontSize:22, marginRight:100, color:Colors.SoftGrey}]}>Lembretes</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color={Colors.DarkPurple}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons
                name="ios-star-outline"
                size={35}
                color={Colors.DarkPurple}
                style={{marginLeft:10}}
              />
              <Text style={[styles.textBasic,{fontSize:22, marginRight:100, color:Colors.SoftGrey}]}>Novidades</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color={Colors.DarkPurple}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons
                name="md-contacts"
                size={35}
                color={Colors.DarkPurple}
                style={{marginLeft:10}}
              />
              <Text style={[styles.textBasic,{fontSize:22, marginRight:100, color:Colors.SoftGrey}]}>Contatos</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color={Colors.DarkPurple}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
        </View>
    </View>
  );
}
