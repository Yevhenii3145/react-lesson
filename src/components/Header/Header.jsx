import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ text }) => (
    <h1 className={styles.header}>{text}</h1>
)

Header.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Header;
