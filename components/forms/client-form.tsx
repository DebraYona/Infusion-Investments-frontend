import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import {
  firtNameSelector,
  citySelector,
  addressSelector,
  lastNameSelector,
} from '../../store/selectors/client';
import {
  createClient,
  changeFirstname,
  changeCity,
  changeAddress,
  changeLastname,
} from '../../store/slices/client';

const useStyles = makeStyles({
  button: {
    marginLeft: 'auto',
  },
  modalBody: {
    paddingTop: '0.5rem',
    paddingBottom: '1.5rem',
  },
});
export default function ClientForm() {
  const [open, setOpen] = React.useState(false);
  const firstName = useSelector(firtNameSelector);
  const lastName = useSelector(lastNameSelector);
  const address = useSelector(addressSelector);
  const city = useSelector(citySelector);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOnClick = () => {
    dispatch(createClient());

    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeFirstname = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeFirstname(newValue));
  };
  const handleChangeLastname = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeLastname(newValue));
  };
  const handleChangeAddress = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeAddress(newValue));
  };
  const handleChangeCity = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeCity(newValue));
  };

  return (
    <>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Registrar cliente
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Registrar cliente</DialogTitle>
        <DialogContent className={classes.modalBody}>
          <DialogContentText>Registrar en la plataforma un nuevo cliente</DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombres"
                fullWidth
                autoComplete="given-name"
                onChange={handleChangeFirstname}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Apellidos"
                fullWidth
                autoComplete="family-name"
                onChange={handleChangeLastname}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Direccion"
                fullWidth
                autoComplete="shipping address-line1"
                onChange={handleChangeAddress}
                value={address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="Ciudad"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={handleChangeCity}
                value={city}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOnClick} color="primary">
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
