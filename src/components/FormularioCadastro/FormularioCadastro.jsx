import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import React, { useState } from "react";

function FormularioCadastro({aoEnviar}) {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
      }}
    >
      <TextField 
        value={nome}
        onChange={(evento)=> {
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

      <TextField 
        value={cpf}
        onChange={(evento)=> {
          setCpf(evento.target.value)
        }}  
        id="cpf" 
        label="cpf" 
        variant="outlined" 
        margin="normal" 
        fullWidth
      />

      <FormControlLabel  
        checked={promocoes}   
        label='Promoções' 
        control={
          <Switch 
              onChange={(evento)=> {
                setPromocoes(evento.target.checked)
              }}  
              nome='promoções'
              checked={promocoes}
              color="primary"      
          />
      }/>

      <FormControlLabel 
        checked={novidades}  
        label='Novidades' 
        control={
          <Switch 
              onChange={(evento)=> {
                setNovidades(evento.target.checked)
              }}  
              nome='novidades'
              checked={novidades}
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