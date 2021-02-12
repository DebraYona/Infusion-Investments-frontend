import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { Car } from '../../interfaces';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    border: 10,
    borderRadius: 10,
    borderColor: 'black',
  },
  content: {},
  button: {
    border: 10,
    borderRadius: 10,
    background: '#0f72b8',
    width: '200px',
    color: 'white',
    margin: 'auto',
    flex: 'align-justify',
  },
  details: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0px 30px',
  },
});
interface CardClientProps {
  car: Car;
}

const CarClient: FC<CardClientProps> = ({
  car = {
    carModel: 'Volkswagen Tiguan',
    placa: 'X000E4',
    oil: '4000',
    valves: '4/8',
    year: '2020',
    photo:
      'https://img.autocosmos.com/noticias/fotos/preview/NAZ_d7119edb71eb4a438c8ef94808dd62a2.jpg',
  },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Volkswagen Tiguan 2021"
          height="140"
          image={car.photo}
          title="Volkswagen Tiguan 2021"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {car.carModel}
          </Typography>
          <div className={classes.details}>
            <Typography paragraph>Placa </Typography>
            <Typography paragraph>{car.placa}</Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Cambio de aceite
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${car.oil} Kms`}
            </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              N° válvulas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${car.valves} valvulas`}
            </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Año
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {car.year}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/repairs?car=${car._id}`}>
          <Button className={classes.button} size="small">
            Reparaciones
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CarClient;
