import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';



class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm' >
        <Typography variant="h3" component="h1" color='primary' align="center">
        Formulário de cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm (dados) {
  console.log(dados)

}

function validarCPF (cpf){

  if(cpf.length !== 11){
    return {valido: false, texto: 'CPF deve conter 11 digitos.'}
  }else{

    return {valido: true, texto: ''}
  }
}


export default App;