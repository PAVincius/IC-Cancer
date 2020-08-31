import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import styles from '../../constants/Styles';

const Contact = (props) => (
    <View style={styles.dataContainer}>
        <View style={[styles.dataMargin, {width: '100%'}]}>
            <Text style={styles.dataLabel}>
                E-mail:
            </Text>
            <TextInput
                style={[styles.dataInput, { marginRight: 5}]}
                value={props.values.email}
                onChangeText={text => props.setFieldValue('email', text)}
            />
        </View>
        <View style={styles.dataMargin}>
            <Text style={styles.dataLabel}>
                DDD:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.ddd}
                onChangeText={text => props.setFieldValue('ddd', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '40%', marginRight: 100}]}>
            <Text style={styles.dataLabel}>
                Celular:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.celular}
                onChangeText={text => props.setFieldValue('celular', text)}
            />
        </View>
        <View style={styles.dataMargin}>
            <Text style={styles.dataLabel}>
                DDD:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.dddTel}
                onChangeText={text => props.setFieldValue('dddTel', text)}
            />
        </View>
        <View style={[styles.dataMargin, {width: '40%'}]}>
            <Text style={styles.dataLabel}>
                Telefone:
            </Text>
            <TextInput
                style={styles.dataInput}
                value={props.values.telefone}
                onChangeText={text => props.setFieldValue('telefone', text)}
            />
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        ddd: '',
        celular: '',
        dddTel: '',
        telefone: '',
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('E-mail invalido')
            .required('Obrigatório'),
        ddd: Yup.number()
            .required('Obrigatório')
            .positive()
            .integer(),
        celular: Yup.string()
            .required('Obrigatório'),
        dddTel: Yup.number()
            .required('Obrigatório')
            .positive()
            .integer(),
        telefone: Yup.string()
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
})(Contact);