import PropTypes from 'prop-types';
import styles from "./CarItem.module.css";

const CarItem = ({ item }) => {
    const { title, imageUrl, color, raiting, sold, istop } = item;

    return (
        <div className={styles.cardBorder}>
            <img src={imageUrl} alt={title} className={styles.peacture} />
            <p>Модель: {title}</p>
            <p>Колір: {color}</p>
            <p>Рейтинг: {raiting}</p>
            {!sold && <button type="submit">Купити</button>}
            {istop && <p>Топ за рейтингом</p>}
        </div>
    )
}

CarItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default CarItem;