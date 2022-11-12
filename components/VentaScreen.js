import React, { useEffect, useState } from 'react';
import { TextInput, ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

  export default function FuncionVentasS() {
  const [idvendedor, setIdvendedor] = useState([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comision, setComision] = useState('');

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#AAEBD7' }}>
      <Text style={{ color: "#4BA3DE", fontWeight: 700, fontSize: 35, textAlign: "center" }}>Vendedor</Text>
       <TextInput
          style={styles.inputs}
          placeholder="Id de vendedor"
          secureTextEntry={true}
          onChangeText={value => setIdvendedor(value)}
          value={idvendedor}>           
        </TextInput>

        <TextInput
          style={styles.inputs}
          placeholder="Nombre"
          secureTextEntry={true}
          onChangeText={value => setNombre(value)}
          value={nombre}>           
        </TextInput>

        <TextInput
          style={styles.inputs}
          placeholder="Correo electronico"
          secureTextEntry={true}
          onChangeText={value => setEmail(value)}
          value={email}>           
        </TextInput>

        <TextInput
          style={styles.inputs}
          placeholder="Comision"
          secureTextEntry={true}
          onChangeText={value => setComision(value)}
          value={comision}>           
        </TextInput>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#11A88C',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 5,
    
  },
  formulario: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    paddingRight: 12,
  }, 
  colorBtn: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#007BFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  },
  picker:{
    height: 50, 
    width: 180, 
    margin:5, 
    borderWidth: 1,
    borderColor: '#11A88C',
    borderRadius: 10,
  },
  content: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 5,
  },
 
});