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
import { useRouter } from 'next/router';
import {
  carModelSelector,
  yearSelector,
  placaSelector,
  valvesSelector,
  photoSelector,
  oilSelector,
} from '../../store/selectors/car';
import {
  createCar,
  changeClient,
  changeCarModel,
  changeYear,
  changePlaca,
  changeValves,
  changeOil,
  changePhoto,
} from '../../store/slices/car';

const useStyles = makeStyles({
  button: {
    marginLeft: 'auto',
  },
  modalBody: {
    paddingTop: '0.5rem',
    paddingBottom: '1.5rem',
  },
});

export default function CarForm() {
  const [open, setOpen] = React.useState(false);
  const carModel = useSelector(carModelSelector);
  const year = useSelector(yearSelector);
  const placa = useSelector(placaSelector);
  const valves = useSelector(valvesSelector);
  const oil = useSelector(oilSelector);
  const photo = useSelector(photoSelector);
  const dispatch = useDispatch();
  const { query } = useRouter();

  const handleOnClick = () => {
    dispatch(createCar(query.client as string));

    setOpen(false);
  };

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeModel = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeCarModel(newValue));
  };
  const handleChangeYear = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeYear(newValue));
  };
  const handleChangePlaca = (e: any) => {
    const newValue = e.target.value;
    dispatch(changePlaca(newValue));
  };
  const handleChangeValves = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeValves(newValue));
  };
  const handleChangeOil = (e: any) => {
    const newValue = e.target.value;
    dispatch(changeOil(newValue));
  };
  const handleChangePhoto = (e: any) => {
    const newValue = e.target.value;
    dispatch(changePhoto(newValue));
  };
  return (
    <>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Registrar Auto
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear Auto</DialogTitle>
        <DialogContent className={classes.modalBody}>
          <DialogContentText>Registrar en la plataforma un nuevo Auto</DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="carModel"
                name="carModel"
                label="Modelo"
                fullWidth
                autoComplete="given-name"
                onChange={handleChangeModel}
                value={carModel}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="placa"
                name="placa"
                label="Placa"
                fullWidth
                autoComplete="family-name"
                onChange={handleChangePlaca}
                value={placa}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="oil"
                name="oil"
                label="Cambio de aceite"
                fullWidth
                autoComplete="shipping address-line1"
                onChange={handleChangeOil}
                value={oil}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="valvulas"
                name="valvulas"
                label="N° Valvulas"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={handleChangeValves}
                value={valves}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="year"
                name="year"
                label="Año"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={handleChangeYear}
                value={year}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="photo"
                name="photo"
                label="image URL"
                fullWidth
                autoComplete="shipping address-line1"
                onChange={handleChangePhoto}
                value={photo}
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
