import React from 'react'
import PropTypes from 'prop-types';
import '../styles.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ items, onClick }) {
    return (
        <div>
            <ul className="imageGallery">
                {items.map(({ id, webformatURL, largeImageURL, tags }, index) => (
                    <ImageGalleryItem
                        key={index}
                        link={webformatURL}
                        alt={tags}
                        onClick={() => onClick({ largeImageURL, tags })}
                        linka={largeImageURL}
                        descript={tags}
                    />))}
            </ul>
        </div>
    )
}

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onClick: PropTypes.func,
}