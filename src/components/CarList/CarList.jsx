import PropTypes from 'prop-types';

import CarItem from "../CarItem/CarItem";
import styles from "./Carlist.module.css"

const Carlist = ({ items }) => {
    return (
        <ul className={styles.list}>
            {items.map(item => <CarItem item={item} key={item._id} />)}
        </ul>
    )
}

Carlist.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Carlist;
