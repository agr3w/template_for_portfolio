// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';

const Contact = ({ contact }) => {
  const { t } = useTranslation();
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
    // Aqui você pode implementar o envio do formulário, como integração com uma API
    console.log(formData);
    // Resetar o formulário
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <Container className={styles.contact}>
      <Typography variant="h4" gutterBottom>
      {t('Contact.name_page')}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          label={t('Contact.label_name')}
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
          label={t('Contact.label_message')}
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
          {t('Contact.send')}
        </Button>
      </Box>
      {/* <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Email</Typography>
          <Typography>{contact.email}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Telefone</Typography>
          <Typography>{contact.phone}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Endereço</Typography>
          <Typography>{contact.address}</Typography>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default Contact;