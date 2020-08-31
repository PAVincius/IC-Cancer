import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import styles from '../../constants/Styles';

const PersonalInformation = (props) => (
  <View style={styles.dataContainer}>
    <View style={[styles.dataMargin, {width: '100%'}]}>
      <Text style={styles.dataLabel}>
        Nome:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.name}
        onChangeText={text => props.setFieldValue('name', text)}
      />
    </View>
    
    <View style={[styles.dataMargin, {width: '100%'}]}>
      <Text style={styles.dataLabel}>
        Nome da Mãe:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.motherName}
        onChangeText={text => props.setFieldValue('motherName', text)}
      />
    </View>
    <View style={styles.dataMargin}>  
      <Text style={styles.dataLabel}>
        Cartão do SUS:
      </Text>
      <TextInput
        style={[styles.dataInput, {width: 150}]}
        value={props.values.sus}
        onChangeText={text => props.setFieldValue('sus', text)}
      />
    </View>
    <View style={styles.dataMargin}>
      <Text style={styles.dataLabel}>
        CPF:
      </Text>
      <TextInput
        style={[styles.dataInput, {width: 120}]}
        value={props.values.cpf}
        onChangeText={text => props.setFieldValue('cpf', text)}
      />
    </View>
    <View style={styles.dataMargin}>
      <Text style={styles.dataLabel}>
        RG:
      </Text>
      <TextInput
        style={[styles.dataInput, {width: 100}]}
        value={props.values.rg}
        onChangeText={text => props.setFieldValue('rg', text)}
      />
    </View>
    <View style={styles.dataMargin}>
      <Text style={styles.dataLabel}>
        Dt. Emissão:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.dtEmissao}
        onChangeText={text => props.setFieldValue('dtEmissao', text)}
      />
    </View>
    <View style={styles.dataMargin}>  
      <Text style={styles.dataLabel}>
        Emissor:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.emissor}
        onChangeText={text => props.setFieldValue('emissor', text)}
      />
    </View>
    <View style={styles.dataMargin}>
      <Text style={styles.dataLabel}>
        Dt. Nascimento:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.dtNascimento}
        onChangeText={text => props.setFieldValue('dtNascimento', text)}
      />
    </View>
    <View style={styles.dataMargin}>
      <Text style={styles.dataLabel}>
        Idade:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.idade}
        onChangeText={text => props.setFieldValue('idade', text)}
      />
    </View>
    <View style={styles.dataMargin}>
      <Text style={styles.dataLabel}>
        Gênero:
      </Text>
      <TextInput
        style={[styles.dataInput, {width: 100}]}
        value={props.values.genero}
        onChangeText={text => props.setFieldValue('genero', text)}
      />
    </View>
    <View style={[styles.dataMargin, {marginBottom: 10}]}>
      <Text style={styles.dataLabel}>
        Nacionalidade:
      </Text>
      <TextInput
        style={styles.dataInput}
        value={props.values.nacionalidade}
        onChangeText={text => props.setFieldValue('nacionalidade', text)}
      />
    </View>
    <View style={[styles.dataMargin, {marginLeft: 14}]}>
      <TouchableOpacity onPress={props.handleSubmit}>
        <View style={[styles.StyledButton, {height: 30}]}>
            <Text style={{color: '#fff', fontSize: 20}}>Atualizar</Text>
        </View>
      </TouchableOpacity>
    </View>        
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ 
    name: '', 
    motherName: '',
    sus: '',
    cpf: '',
    rg: '',
    dtEmissao: '',
    emissor: '',
    dtNascimento: '',
    idade: '',
    genero: '',
    nacionalidade: '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito curto')
      .max(50, 'Muito grande')
      .required('Obrigatório'),
    motherName: Yup.string()
      .min(2, 'Muito curto')
      .max(50, 'Muito grande')
      .required('Obrigatório'),
    sus: Yup.string()
      .min(14, 'Muito curto')
      .max(16, 'Muito grande')
      .required('Obrigatório'),
    cpf: Yup.string()
      .min(10, 'Muito curto')
      .max(12, 'Muito grande')
      .required('Obrigatório'),
    rg: Yup.string()
      .required('Obrigatório'),
    dtEmissao: Yup.date()
      .required('Obrigatório'),
    emissor: Yup.string()
      .required('Obrigatório'),
    dtNascimento: Yup.date()
      .required('Obrigatório'),
    idade: Yup.number()
      .required('Obrigatório'),
    genero: Yup.string()
      .required('Obrigatório'),
    nacionalidade: Yup.string()
      .required('Obrigatório'),
  }),

  handleSubmit: (values, { setSubmitting, setErrors }) => {
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
})(PersonalInformation);