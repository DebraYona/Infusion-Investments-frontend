import React, { FC } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CarClient from './card-unit';
import { Car } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 'auto',
      marginRight: '10px',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface CardClientProps {
  cars: Car[];
}

const CarListClient: FC<CardClientProps> = ({ cars = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cars.map((car) => (
          <Grid key={car._id} item>
            <CarClient car={car} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CarListClient;
