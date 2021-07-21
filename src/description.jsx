/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Descripcion = ({ mensaje }) => <h3>{mensaje}</h3>;

Descripcion.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Descripcion;
