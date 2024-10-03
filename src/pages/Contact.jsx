// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log(formData);
    // Resetar o formulário
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <Container className={styles.contact}>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="mensagem"
          label="Mensagem"
          name="mensagem"
          multiline
          rows={4}
          value={formData.mensagem}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
