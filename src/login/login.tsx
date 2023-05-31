import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


export const login = () => {
  return (
<form>
      <Grid container spacing={2} style={{
        width: "95%",
        padding: "3rem"
      }}>
        <Grid item xs={12}>
          <TextField
            label="usuario"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            <NavLink to={'registros'}>
              Iniciar Sesión
            </NavLink>
          </Button>
        </Grid>
      </Grid>
    </form>
    )
}

