import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, Chip } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import Link from 'next/link';
import { Client } from '../../interfaces';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    '&:last-child': {
      paddingBottom: 16,
    },
    paddingLeft: 24,
    paddingRight: 24,
  },
  baseText: {
    flex: 6,
    marginLeft: 4,
    marginRight: 4,
    width: 220,
    textAlign: 'center',
  },
  typeText: {
    flex: 3,
    marginLeft: 4,
    marginRight: 4,
    width: 220,
    textAlign: 'center',
  },
  addressText: {
    flex: 14,
    marginLeft: 4,
    marginRight: 4,
    width: 360,
    textAlign: 'center',
  },
  button: {
    width: 120,
  },
});

interface ClientProps {
  client: Client;
}
const ClientCard: FC<ClientProps> = ({ client }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Avatar
          alt="Profile Picture"
          src="https://cdn.mos.cms.futurecdn.net/KBRt27HYvgfcj7kZ2J34qL-1200-80.jpg"
        />
        <Typography className={classes.baseText} variant="body2" component="div">
          {client.firstName}
        </Typography>
        <Typography className={classes.baseText} variant="body2" component="div">
          {client.lastName}
        </Typography>
        <div className={classes.typeText}>
          <Chip color="secondary" icon={<Face />} label="PREMIUM" />
        </div>
        <Typography className={classes.addressText} variant="body2" component="div">
          {`${client.address} - ${client.city} `}
        </Typography>
        <Link href={`/cars?client=${client._id}`}>
          <Button className={classes.button} variant="outlined" color="primary">
            VER COCHES
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
