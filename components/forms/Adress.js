import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import styles from '../../constants/Styles';

const Adress = (props) => (
    <View style={styles.dataContainer}>
        <View style={[styles.dataMargin, {width: '100%'}]}>
            <Text style={styles.dataLabel}>
                Endereço:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.adress}
                onChangeText={text => props.setFieldValue('adress', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '100%'}]}>
            <Text style={styles.dataLabel}>
                Complemento:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.complement}
                onChangeText={text => props.setFieldValue('complement', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '70%'}]}>
            <Text style={styles.dataLabel}>
                Bairro:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.bairro}
                onChangeText={text => props.setFieldValue('bairro', text)}
            />
        </View>
        <View style={styles.dataMargin}>
            <Text style={styles.dataLabel}>
                Número:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.number}
                onChangeText={text => props.setFieldValue('number', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '40%'}]}>
            <Text style={styles.dataLabel}>
                Cidade:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.city}
                onChangeText={text => props.setFieldValue('city', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '16%'}]}>
            <Text style={styles.dataLabel}>
                UF:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.uf}
                onChangeText={text => props.setFieldValue('uf', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '60%'}]}>
            <Text style={styles.dataLabel}>
                CEP:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.cep}
                onChangeText={text => props.setFieldValue('cep', text)}
            />
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        adress: '',
        complement: '',
        number: '',
        bairro: '',
        city: '',
        uf: '',
        cep: '',
    }),
    validationSchema: Yup.object().shape({
        adress: Yup.string()
            .required('Obrigatório'),
        complement: Yup.string()
            .required('Obrigatório'),
        number: Yup.number()
            .required('Obrigatório')
            .positive()
            .integer(),
        bairro: Yup.string()
            .required('Obrigatório'),
        city: Yup.string()
            .required('Obrigatório'),
        uf: Yup.string()
            .required('Obrigatório'),
        cep: Yup.string()
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
})(Adress);