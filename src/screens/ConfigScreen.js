import * as React from 'react';
import { StatusBar, View, Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/themeActions';
import { redTheme, greenTheme, purpleTheme, darkTheme } from '../../constants/Themes';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons/';

export const ConfigScreen = ({navigation}) => {

    const theme = useSelector(state => state.themeReducer.theme);
    const dispatch = useDispatch();

    return(
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={theme.status_bar_style} />
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <LinearGradient
                colors={[theme.themeOne_gradient, theme.themeOne_gradient2]}
                style={styles.header}>
                <View style={[styles.header, {padding: '10%', height: 80}, {flexDirection: 'row'}]}>
                  <View style={{flexDirection:'row',flex:1, justifyContent:'center'}}>
                  <TouchableWithoutFeedback onPress={() => {navigation.navigate('Home')}}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={40}
                    color={Colors.White}
                  />
                  </TouchableWithoutFeedback>
                  <Text style={[styles.homeTitleText,{color: Colors.White, marginHorizontal:70}]}>
                    Configurações
                  </Text>
                  </View>
                </View>
              </LinearGradient>
              <Text style={[styles.textbold,{marginVertical:20,fontSize:20,color: Colors.Blue}]}>
                TalkBack (Acessibilidade)
              </Text>
              <Text style={[styles.textbold,{marginVertical:20,fontSize:20,color: Colors.Blue}]}>
                Notificações do App
              </Text>
              <Text style={[styles.textbold,{marginVertical:20,fontSize:20,color: Colors.Blue}]}>
                Personalizar Tema
              </Text>
              <View style={[styles.themecontainer2,{flexDirection:"row",justifyContent:'space-between'}]}>
                <TouchableWithoutFeedback
                    onPress={() => dispatch(switchTheme(greenTheme))}>
                    <LinearGradient colors={[Colors.themeOne_gradient2,Colors.themeOne_gradient]} style={styles.themecontainer}>
                    </LinearGradient>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => dispatch(switchTheme(redTheme))}>
                    <LinearGradient colors={[Colors.themeThree_gradient2,Colors.themeThree_gradient]} style={styles.themecontainer}>
                    </LinearGradient>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => dispatch(switchTheme(purpleTheme))}>
                    <LinearGradient colors={[Colors.themeTwo_gradient2,Colors.themeTwo_gradient]} style={styles.themecontainer}>
                    </LinearGradient>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => dispatch(switchTheme(darkTheme))}>
                    <LinearGradient colors={[Colors.Grey,Colors.LightGrey]} style={styles.themecontainer}>
                    </LinearGradient>
                  </TouchableWithoutFeedback>
              </View>
            </View>
        </ThemeProvider>
    );
}
/*
{theme.mode === "light" ? (
                    <Button onPress={() => dispatch(switchTheme(greenTheme))}>
                        <ButtonText>Change to Green Theme</ButtonText>
                    </Button>
                ) : (
                    <Button onPress={() => dispatch(switchTheme(lightTheme))}>
                        <ButtonText>Change to Light Theme</ButtonText>
                    </Button>
                )}
*/

