import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { Image, TextInput, View, Button, Text, KeyboardAvoidingView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../../constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { useFormik } from 'formik';
import {widthPercentageToDP,heightPercentageToDP} from '../../constants/Styles'

const LoginScreen = ({navigation}) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        }
    })

    return(
        <LinearGradient 
            colors={[Colors.primary, Colors.secondaryLight]}
            style={{flex:1}}>
           <SafeAreaView style={{flexDirection: 'column',alignItems: 'center'}}>
               <Animatable.Image
                    animation="bounceIn"
                    duration={2000}
                    style={styles.imageContainer}
                    source={require('../../assets/images/logoicvetorizada.png')}
                />
                <KeyboardAvoidingView >
                    <View>
                        <View style={{flexDirection:'column'}}>
                            <Animatable.View
                                animation="bounceIn"
                                duration={2200}
                                style={styles.textInput}>
                                <Ionicons name="md-person" size={25}/>
                                <TextInput style={{marginLeft:10}}
                                    placeholder={'Username'}
                                    secureTextEntry={false}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.placeHolderColor}
                                    value={formik.values.username}
                                    onChangeText={formik.handleChange('username')}
                                />
                            </Animatable.View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Animatable.View
                                animation="bounceIn"
                                duration={2200}
                                style={styles.textInput}>
                                <Ionicons name="md-key" size={25}/>
                                <TextInput style={{marginLeft:10}}
                                    placeholder={'Password'}
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.placeHolderColor}
                                    value={formik.values.password}
                                    onChangeText={formik.handleChange('password')}
                                />
                            </Animatable.View>
                            <Animatable.Text 
                                animation="bounceIn"
                                style={styles.subTextInput}>Esqueceu sua senha?</Animatable.Text>
                            <Animatable.Text
                                animation="bounceIn"
                                style={styles.subTextInput}
                                onPress={()  => {navigation.navigate('DrawerRoot')}}
                            >
                                    Primeiro acesso?</Animatable.Text>
                        </View>
                        <TouchableOpacity onPress={()  => {navigation.navigate('DrawerRoot')}}>
                            <View style={styles.StyledButton}>
                                <Text style={styles.ButtonText}>L O G I N</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
};
export default LoginScreen;