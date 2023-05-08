import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import React, { useState } from "react";

function FormularioCadastro({aoEnviar, validarCPF}) {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)

  const [erros, setErros] = useState({cpf: {valido: true, texto:''}})

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
        required
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
        required
        fullWidth
      />

      <TextField 
        value={cpf}
        onChange={(evento)=> {
          setCpf(evento.target.value)
        }}  
        onBlur={(evento)=> {
          const ehValido = validarCPF(cpf)
          setErros({cpf: ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf" 
        label="cpf" 
        variant="outlined" 
        margin="normal" 
        type="number"
        required
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