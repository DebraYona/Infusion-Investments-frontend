/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    positionFooter: {
      padding: '10px 0px',
      color: 'white',
      backgroundColor: '#343458',

    },
   
  });

export default function Footer() {
    const classes = useStyles();

  return(
    <footer className={classes.positionFooter}>
      <small>
      © {new Date().getFullYear()}, Powered by
      {` `}
      </small>
      <a className="linkStyle" href="https://www.simios.dev/">Debra</a>
    </footer>
);
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node.isRequired
};
