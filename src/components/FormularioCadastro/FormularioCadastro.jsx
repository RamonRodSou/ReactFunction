import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import React, { useState } from "react";

function FormularioCadastro() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome)
      }}
    >
      <TextField 
        value={nome}
        onChange={(evento)=> {
          let nomeTemporario = (evento.target.value)
          if (nomeTemporario.length >= 3) {
              nomeTemporario = nomeTemporario.substr(0,3)
          }
          setNome(evento.target.value)
        }} 

        id="nome" 
        label="Nome" 
        variant="outlined" 
        margin="normal" 
        fullWidth
      />

      <TextField 
          value={sobrenome}
          onChange={(evento)=> {
            setSobrenome(evento.target.value)       
          }} 

        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        margin="normal" 
        fullWidth
      />

      <TextField id="cpf" label="cpf" variant="outlined" margin="normal" fullWidth/>
      <FormControlLabel 
        label='Promoções' 
        control={
              <Switch 
              nome='promoções'
              defaultChecked
              color="primary"      
          />
      }/>
      <FormControlLabel 
        label='Novidades' 
        control={
              <Switch 
              nome='novidades'
              defaultChecked
              color="primary"      
          />
      }/>



      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;