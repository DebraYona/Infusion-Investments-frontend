import { makeStyles, Button } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles({
  page: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
  },
  bgImage: {
    display: 'block',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  clientsButton: {
    position: 'absolute',
    top: '15%',
    right: '5%',
  },
  repairsButton: {
    position: 'absolute',
    top: 'calc(12% + 100px)',
    right: '5%',
  },
});

const IndexPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img
        className={classes.bgImage}
        src="https://t1-cms-4.images.toyota-europe.com/toyotaone/eses/header-toyota-consejos-mantenimiento-neum%C3%A1ticos-desktop_tcm-1014-712086.jpg"
        alt=""
      />
      <Link href="/clients">
        <Button className={classes.clientsButton} variant="contained" color="primary">
          VER CLIENTES
        </Button>
      </Link>
      <Link href="/repairs">
        <Button className={classes.repairsButton} variant="contained" color="primary">
          VER REPARACIONES
        </Button>
      </Link>
    </div>
  );
};

export default IndexPage;
