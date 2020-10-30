import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from '../../constants/Styles';
import { useAuth } from '../auth';
import {LinearGradient} from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import { TabBg } from '../../components/Tabbg';

export default function Home({navigation}) {
  const [, { logout }] = useAuth();

  return (
    <View>
      <View style={{flexDirection: 'column', alignItems: 'center',marginBottom:'25.25%'}}>
        <LinearGradient
          colors={[Colors.themeOne_gradient, Colors.themeOne_gradient2]}
          style={styles.header}>
          <View style={[styles.header, {padding: '10%', height: 150}, {flexDirection: 'row'}]}>
            <View style={{marginTop: '2%'}}>
              <Text style={[styles.homeTitleText,{color: Colors.Blue}]}>
                Bem Vinda,
              </Text>
              <Text style={[styles.homeTitleText,{color: Colors.White}]}>
                Amanda
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('Profile')}}>
              <Image style={[styles.IconProfile,{borderWidth: 5}]} source={require('../../assets/images/avatar11.png')}/>
            </TouchableWithoutFeedback>
          </View>
        </LinearGradient>
        <View style={styles.fastbuttom}>
          <View style={styles.circle}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
              <Image
                style={styles.IconProfile, {margin:20}}
                source={require('../../assets/images/nurse.png')}
                />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.textbold,{marginTop:'12.5%'}]}>
                Clínicas
              </Text>
              <Text style={styles.text}>
                Clínicas ao redor
              </Text>
            </View>
          </View>
          <View style={styles.circle}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
              <Image
                style={styles.IconProfile, {margin:26}}
                source={require('../../assets/images/pill.png')}
                resizeMode='contain'
                />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.textbold}>
                Medidas
              </Text>
              <Text style={styles.text}>
                Medidas de Saúde
              </Text>
            </View>
          </View>
          <View style={styles.circle}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
              <Image
                style={styles.IconProfile, {margin:23}}
                source={require('../../assets/images/microscope.png')}
                resizeMode='contain'
                />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.textbold}>
                Exames
              </Text>
              <Text style={styles.text}>
                Resultados dos últimos exames
              </Text>
            </View>
          </View>
        </View>
      </View>
        <ScrollView>
            <View>
              <Text style={[styles.textbold,{color: Colors.Blue, marginLeft: '4%'}]}>
                Últimas Notícias
              </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.bordercontainer} onPress={() => {navigation.navigate('Noticias')}}>
                <Image
                  style={{flex:1, width:null, borderRadius:15}}
                  source={require('../../assets/images/noticiasmascara.png')}
                  resizeMode='cover'>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bordercontainer}>
                <Image
                  style={{flex:1, width:null, borderRadius:15}}
                  source={require('../../assets/images/noticiasmascara.png')}
                  resizeMode='cover'>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bordercontainer}>
                <Image
                  style={{flex:1, width:null, borderRadius:15}}
                  source={require('../../assets/images/noticiasmascara.png')}
                  resizeMode='cover'>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bordercontainer}>
                <Image
                  style={{flex:1, width:null, borderRadius:15}}
                  source={require('../../assets/images/noticiasmascara.png')}
                  resizeMode='cover'>
                </Image>
              </TouchableOpacity>
            </ScrollView>
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
              <Text style={[styles.textbold,{color: Colors.Blue, marginLeft: '4%'}]}>
                Notificações
              </Text>
              <TouchableOpacity>
                <Text style={[styles.textbold,{color: Colors.Green2,marginRight: '4%'}]}>
                  Ver todas
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={{flexDirection: 'column', justifyContent:'space-between', alignContent:'center'}}>
                <View style={styles.homenotification}>
                  <Image style={[styles.IconProfileSmall,{marginTop:'-25%'}]} source={require('../../assets/images/avatar22.png')}/>
                  <Text style={[styles.textbold,{color:Colors.DarkPurple, fontSize:14, margin:5}]}>Dra. Alina James</Text>
                  <Text style={[styles.text,{color:Colors.SoftGrey, marginTop:'5%',fontSize:11, margin:10}]}>Mandou uma mensagem para você</Text>
                  <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    <View>
                      <Text style={{fontSize:12, marginRight:12}}>08:31</Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12, marginLeft:12}}>10/09/20</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'column', justifyContent:'space-between', alignContent:'center'}}>
                <View style={styles.homenotification}>
                  <Image style={[styles.IconProfileSmall,{marginTop:'-25%'}]} source={require('../../assets/images/avatar33.png')}/>
                  <Text style={[styles.textbold,{color:Colors.DarkPurple, fontSize:14, margin:5}]}>Dr. Steve Robert</Text>
                  <Text style={[styles.text,{color:Colors.SoftGrey, marginTop:'5%',fontSize:11, margin:10}]}>A data da sua consulta está próxima</Text>
                  <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    <View>
                      <Text style={{fontSize:12, marginRight:12}}>09:00</Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12, marginLeft:12}}>09/09/20</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'column', justifyContent:'space-between', alignContent:'center'}}>
                <View style={styles.homenotification}>
                  <Image style={[styles.IconProfileSmall,{marginTop:'-25%'}]} source={require('../../assets/images/avatar44.png')}/>
                  <Text style={[styles.textbold,{color:Colors.DarkPurple, fontSize:14, margin:5}]}>Dra. Selina Figer</Text>
                  <Text style={[styles.text,{color:Colors.SoftGrey, marginTop:'5%',fontSize:11, margin:10}]}>Mandou um áudio para você</Text>
                  <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    <View>
                      <Text style={{fontSize:12, marginRight:12}}>10:37</Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12, marginLeft:12}}>08/09/20</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'column', justifyContent:'space-between', alignContent:'center'}}>
                <View style={styles.homenotification}>
                  <Image style={[styles.IconProfileSmall,{marginTop:'-25%'}]} source={require('../../assets/images/avatar55.jpg')}/>
                  <Text style={[styles.textbold,{color:Colors.DarkPurple, fontSize:14, margin:5}]}>Dra. Bruna Silva</Text>
                  <Text style={[styles.text,{color:Colors.SoftGrey, marginTop:'5%',fontSize:11, margin:10}]}>Mandou uma mensagem para você</Text>
                  <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    <View>
                      <Text style={{fontSize:12, marginRight:12}}>15:10</Text>
                    </View>
                    <View>
                      <Text style={{fontSize:12, marginLeft:12}}>11//09/20</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              
            </ScrollView>
            <Text style={[styles.textbold,{color: Colors.Blue, marginLeft: '4%'}]}>
                Enquanto esteve fora
            </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Config')}}>
                  <Text>Configurations</Text>
            </TouchableOpacity>
            <View style={styles.homenotification}>

            </View>
            <View style={styles.homenotification}>

            </View>
            <View style={styles.homenotification}>

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

