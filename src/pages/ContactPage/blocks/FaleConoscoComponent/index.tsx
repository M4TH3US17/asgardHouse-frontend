import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { IFaleConoscoProps } from '../../types/interface';

import './index.scss';

export const FaleConoscoComponent: React.FC<IFaleConoscoProps> = ({ }: IFaleConoscoProps): JSX.Element => {
  return (
    <Box className='faleconosco'>
      <Box className='faleconosco-form'>

        <Box className='faleconosco-form-text-container'>
          <Box className='faleconosco-form-text'>
            <Typography className='faleconosco-form-title'> Fale Conosco </Typography>
            <Typography className='faleconosco-form-subtitle'> Estamos felizes em responder a qualquer dúvida que você possa ter e ajudar a
              determinar qual dos nossos serviços melhor atende às suas necessidades. </Typography>
          </Box>

          <Box className="work-area">
            <Typography component='h5' className="box-title mb-30 text-white">Como nos Trabalhamos?</Typography>

            <Box className="work-item_wrapper">
              <Box className="work-item">
                <Typography component='span' className="work-item_number">01</Typography>
                <Typography component='p' className="work-text">Descricao Descricao Descricao</Typography>
              </Box>

              <Box className="work-item">
                <Typography component='span' className="work-item_number">02</Typography>
                <Typography component='p' className="work-text">Descricao Descricao Descricao</Typography>
              </Box>

              <Box className="work-item">
                <Typography component='span' className="work-item_number">03</Typography>
                <Typography component='p' className="work-text">Descricao Descricao Descricao</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className='faleconosco-form-field'>

          <Box className='faleconosco-form-desc'>
            <Typography className='form-description'> Preencha as informações abaixo </Typography>
          </Box>

          <Box className='faleconosco-form-field-container'>
            <TextField
              required
              id="outlined-required"
              label="Qual seu nome?"
              className='faleconosco-form-field-item'
            />

            <TextField
              required
              id="outlined-required"
              label="Qual seu telefone?"
              className='faleconosco-form-field-item'
            />

            <TextField
              required
              id="outlined-required"
              label="Qual seu email?"
              className='faleconosco-form-field-item'
            />

            <TextField
              label="Como podemos te ajudar?"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className='faleconosco-form-field-item'
            />

            <Box component='div' className='faleconosco-form-button-container'>
              <Button variant="contained" className='faleconosco-form-button'> ENVIAR MENSAGEM </Button>
            </Box>
          </Box>
        </Box>

      </Box>

    </Box>
  );
};