import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';

const Contact = ({navigation}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            ddd: '',
            celular: '',
            dddTel: '',
            telefone: '',
        }
    });

    return(
        <LinearGradient
            start={{x: 1.2, y: 0.6}} end={{x: 0.1, y: 0.1}}
            colors={['#fff',Colors.blue]}
            style={{flex:1}}>
            <SafeAreaView style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={[styles.dataMargin, {width: '96%'}]}>
                    <Text style={styles.dataLabel}>
                        Nome:
                    </Text>
                    <TextInput  style={styles.dataInput}
                        placeholder={'Nome'}
                        secureTextEntry={false}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={Colors.placeHolderColor}
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                    />
                </View>
                <View style={[styles.dataMargin, {width: '16%'}]}>
                    <Text style={styles.dataLabel}>
                        DDD:
                    </Text>
                    <TextInput  style={styles.dataInput}
                        placeholder={'DDD'}
                        secureTextEntry={false}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={Colors.placeHolderColor}
                        value={formik.values.ddd}
                        onChangeText={formik.handleChange('ddd')}
                    />
                </View>
                <View style={[styles.dataMargin, {width: '35%', marginRight: '27%'}]}>
                    <Text style={styles.dataLabel}>
                        Celular:
                    </Text>
                    <TextInput  style={styles.dataInput}
                        placeholder={'Celular'}
                        secureTextEntry={false}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={Colors.placeHolderColor}
                        value={formik.values.celular}
                        onChangeText={formik.handleChange('celular')}
                    />
                </View>
                <View style={styles.dataMargin}>
                    <Text style={styles.dataLabel}>
                        DDD:
                    </Text>
                    <TextInput  style={styles.dataInput}
                        placeholder={'DDD'}
                        secureTextEntry={false}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={Colors.placeHolderColor}
                        value={formik.values.dddTel}
                        onChangeText={formik.handleChange('dddTel')}
                    />
                </View>
                <View style={[styles.dataMargin, {width: '35%'}]}>
                    <Text style={styles.dataLabel}>
                        Telefone:
                    </Text>
                    <TextInput  style={styles.dataInput}
                        placeholder={'Telefone'}
                        secureTextEntry={false}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={Colors.placeHolderColor}
                        value={formik.values.telefone}
                        onChangeText={formik.handleChange('telefone')}
                    />
                </View>
            </SafeAreaView>
        <View style={{alignItems:'center', marginVertical:'4%'}}>
          <TouchableOpacity onPress={formik.handleSubmit}
                  style={[styles.defaultButton,{backgroundColor: Colors.primary}]}
              >
                  {formik.isSubmitting ? (
                      <ActivityIndicator color="#FFF" />
                  ) : (
                      <Text style={styles.ButtonText}>Adicionar</Text>
                  )}
          </TouchableOpacity>
        </View>
        </LinearGradient>
    );
}

export default Contact;
