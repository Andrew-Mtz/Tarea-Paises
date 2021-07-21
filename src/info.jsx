/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Chiste = ({ chiste }) => <p>{chiste}</p>;
const Remate = ({ remate }) => <p>{remate}</p>;

Chiste.propTypes = {
  chiste: PropTypes.string.isRequired,
};

Remate.propTypes = {
  remate: PropTypes.string.isRequired,
};

export { Chiste, Remate };
