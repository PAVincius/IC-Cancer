import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import styles from '../../constants/Styles';

const AdressLab = (props) => (
    <View style={styles.dataContainer}>
        <View style={[styles.dataMargin, {width: '100%'}]}>
            <Text style={styles.dataLabel}>
                Nome:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.nameLab}
                onChangeText={text => props.setFieldValue('nameLab', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '100%'}]}>
            <Text style={styles.dataLabel}>
                Endereço:
            </Text>
            <TextInput  
                style={styles.dataInput}
                value={props.values.adressLab}
                onChangeText={text => props.setFieldValue('adressLab', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '100%'}]}>
            <Text style={styles.dataLabel}>
                Complemento:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.complementLab}
                onChangeText={text => props.setFieldValue('complementLab', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '70%'}]}>
            <Text style={styles.dataLabel}>
                Bairro:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.bairroLab}
                onChangeText={text => props.setFieldValue('bairroLab', text)}
            />
        </View>
        <View style={styles.dataMargin}>
            <Text style={styles.dataLabel}>
                Número:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.numberLab}
                onChangeText={text => props.setFieldValue('numberLab', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '40%'}]}>
            <Text style={styles.dataLabel}>
                Cidade:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.cityLab}
                onChangeText={text => props.setFieldValue('cityLab', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '16%'}]}>
            <Text style={styles.dataLabel}>
                UF:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.ufLab}
                onChangeText={text => props.setFieldValue('ufLab', text)}
            />
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        nameLab: '',
        adressLab: '',
        complementLab: '',
        bairroLab: '',
        numberLab: '',
        cityLab: '',
        ufLab: '',
    }),

    validationSchema: Yup.object().shape({
        nameLab: Yup.string()
            .min(2, 'Muito curto')
            .max(50, 'Muito grande')
            .required('Obrigatório'),
            complement: Yup.string()
            .required('Obrigatório'),
        numberLab: Yup.number()
            .required('Obrigatório')
            .positive()
            .integer(),
        bairroLab: Yup.string()
            .required('Obrigatório'),
        cityLab: Yup.string()
            .required('Obrigatório'),
        ufLab: Yup.string()
            .required('Obrigatório'),
    }),
    
    handleSubmit: (values, {setSubmitting, setErrors}) => {
        console.log(values);

        { props.isSubmitting && <ActivityIndicator /> };
        
        apiService.post('/authenticate', values)
        .then(/* sucesso */)
        .catch(err => {
            setSubmitting(false);
            setErrors({ message: err.message });
        });

        { props.errors.message && <Text>{props.errors.message}</Text> };
    }
})(AdressLab);