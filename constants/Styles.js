import * as React from 'react';
import { Platform, StyleSheet, ColorPropType} from 'react-native';

import {Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors';
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};

//Os styles estão em ordem alfabetica
const styles = StyleSheet.create({
    //B
    backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
    },
    IconProfile: {
      width: widthPercentageToDP('20%'),
      height: heightPercentageToDP('10%'),
      borderRadius: widthPercentageToDP('20%'),
      borderColor: Colors.White,
    },
    IconProfileSmall: {
      width: widthPercentageToDP('15%'),
      height: heightPercentageToDP('8%'),
      borderRadius: widthPercentageToDP('20%'),
      borderColor: Colors.White,
    },
    IconButtom: {
      width: widthPercentageToDP('20%'),
      height: heightPercentageToDP('10%'),
      borderRadius: widthPercentageToDP('20%'),
    },
    bar: {
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('6%'),
      borderTopLeftRadius: 20,
      borderTopRightRadius: 4,
    },
    ButtonText: {
      fontSize: 28,
      color: Colors.LoginText,
      position: 'absolute',
      top: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //C
    container: {
      flex: 1,
    },
    //D
    dataInput: {
      height: heightPercentageToDP('6%'),
      borderRadius: 8,
      padding: 8,
      fontSize: 15,
      backgroundColor: '#fff',
      marginRight: 3,
      shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowRadius: 0.1,
      shadowOffset: {
       width: 0,
       height: 3,
     },
      elevation: 5,
    },
    dataLabel: {
      fontSize: 15,
      fontWeight: 'bold',
      marginVertical: heightPercentageToDP('1%'),
    },
    dataMargin: {
      marginHorizontal: heightPercentageToDP('0.6%'),
      marginLeft: widthPercentageToDP('1.6%')
    },
    //H
    header:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('23%'),
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    noticias:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('20%'),
      justifyContent: 'space-between',
      overflow: 'hidden',
      opacity: 1,
      flexDirection:'column',
      justifyContent:'center'
    },
    noticias2:{
      backgroundColor: Colors.White,
      width: widthPercentageToDP('90%'),
      height: heightPercentageToDP('100%'),
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      alignSelf:'center',
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 0.1,
      shadowOffset: {
       width: 0,
       height: 1,
     },
      elevation: 10,
    },
    textbold:{
      fontWeight: 'bold',
      fontSize: 16,
    },
    text:{
      fontSize: 12,
      textAlign: 'center'
    },
    bordercontainer:{
      backgroundColor: Colors.White,
      width: widthPercentageToDP('50%'),
      height: heightPercentageToDP('17%%'),
      borderRadius: 15,
      margin: 10,
      marginVertical: 15,
      shadowColor: '#000',
      shadowOpacity: 0.6,
      shadowRadius: 0.1,
      shadowOffset: {
       width: 0,
       height: 3,
     },
      elevation: 5,
    },
    separator:{
      backgroundColor: Colors.Grey,
      width: widthPercentageToDP('80%'),
      height: heightPercentageToDP('0.15%'),
      opacity: 0.2,
      marginVertical: '5%'
    },
    homenotification:{
      flexDirection:'column',
      alignItems:'center',
      backgroundColor: Colors.White,
      width: widthPercentageToDP('32.5%'),
      height: heightPercentageToDP('17%%'),
      marginTop: widthPercentageToDP('10%'),
      borderRadius: 10,
      margin: 10,
      marginVertical: 15,
      shadowColor: '#000',
      shadowOpacity: 0.6,
      shadowRadius: 0.1,
      shadowOffset: {
       width: 10,
       height: 10,
     },
      elevation:5,
    },
    noticiasImage:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('30%%'),
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    homeButton:{
      margin: 10,
      borderRadius: 10,
      backgroundColor: Colors.White,
      alignItems: 'center',
      width: widthPercentageToDP('30%'),
      height: heightPercentageToDP('15%'),
      shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowRadius: 0.1,
      shadowOffset: {
       width: 0,
       height: 8,
     },
      elevation: 3,
    },
    homeTitleText:{
      fontSize: heightPercentageToDP('3.5%'),
      fontWeight: 'bold'
    },
    circle: {
      backgroundColor: Colors.White,
      width: widthPercentageToDP('19%'),
      height: heightPercentageToDP('9.5%'),
      borderRadius: widthPercentageToDP('19%'),
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowRadius: 20,
      shadowOffset: {
       width: 0.6,
       height: 0.7,
     },
      elevation: 10,
    },
    fastbuttom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: widthPercentageToDP('80%'),
      marginVertical: widthPercentageToDP('-10%'),
    },
    //I
    imageContainer: {
      resizeMode: 'contain',
      height: heightPercentageToDP('20%'),
      marginBottom: '20%',
      marginTop: '30%'
    },
    imageContainerGreat: {
      resizeMode: 'contain',
      height: heightPercentageToDP('90%'),
      alignContent: 'center'
    },
    imageContainerMedium: {
      resizeMode: 'contain',
      height: heightPercentageToDP('35%')
    },
    imageHomeContainer: {
      resizeMode: 'contain',
      height: heightPercentageToDP('12.5%'),
      alignContent: 'center'
    },
    //M
    marginBasic: {
      margin: 20,
      justifyContent: 'flex-start'
    },
    //N
    navigationFilename: {
      marginTop: 5,
    },
    //P
    defaultButton:{
      width: widthPercentageToDP('90%'),
      height: heightPercentageToDP('8%'),
      borderRadius: 20,
      margin:5,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent:'center',
      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 0.5,
      shadowOffset: {
       width: 3,
       height: 3,
     },
      elevation: 5,
      padding: 12
    },
    //S
    SafeView:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('30%'),
      resizeMode: 'contain'
    },
    StyledButton: {
      width: widthPercentageToDP('85%'),
      height: heightPercentageToDP('7%'),
      backgroundColor: Colors.blue,
      borderRadius: 10,
      alignContent: 'center',
      alignItems: 'center',
      marginTop: heightPercentageToDP('3%'),
      padding: 14,
    },
    subTextInput:{
      marginTop: heightPercentageToDP('2%'),
      fontSize: heightPercentageToDP('2.2%'),
      alignSelf: 'flex-end',
      margin:2,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    //T
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    textBasic: {
      textAlign: 'justify',
      fontSize: heightPercentageToDP('2%'),
      marginVertical: heightPercentageToDP('1%')
    },
    textInput:{
      width: widthPercentageToDP('85%'),
      height: heightPercentageToDP('6%'),
      marginTop: heightPercentageToDP('2.5%'),
      backgroundColor: Colors.white,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    titleText:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: heightPercentageToDP('3%'),
      marginVertical: heightPercentageToDP('5%')
    },
    tomTab: {
      borderRadius: 20,
      height: heightPercentageToDP('20%'),
    },
  });
  export default styles;
