import { makeStyles, Typography, IconButton } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { ChevronLeft } from '@material-ui/icons';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import ClientCard from '../components/client/client-card';
import ClientForm from '../components/forms/client-form';
import { clientsListSelector } from '../store/selectors/client';
import { getClientList } from '../store/slices/client';
import { Client } from '../interfaces';
import Layout from '../components/nav/newLayout';

const useStyles = makeStyles({
  page: {
    padding: '1.9rem 3.2rem',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  titleText: {
    margin: 0,
    marginLeft: '1.2rem',
  },
  clientList: {
    width: '100%',
  },
});

const Clients: NextPage = () => {
  const classes = useStyles();
  const clientsList = useSelector(clientsListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientList());
  }, []);
  const body = () => {
    return (
      <div className={classes.page}>
        <div className={classes.title}>
          <Link href="/">
            <IconButton aria-label="goBack">
              <ChevronLeft fontSize="large" />
            </IconButton>
          </Link>
          <Typography className={classes.titleText} variant="h3" gutterBottom>
            Lista de Clientes
          </Typography>
          <ClientForm />
        </div>

        <div className={classes.clientList}>
          {clientsList.map((client: Client) => (
            <ClientCard key={client._id} client={client} />
          ))}
        </div>
      </div>
    );
  };
  return <Layout title="Clientes">{body()}</Layout>;
};

export default Clients;
