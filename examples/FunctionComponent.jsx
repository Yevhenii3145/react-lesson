import React from 'react';
import { useState, useEffect } from "react";
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Button from './components/Button/Button'
import { ColorRing } from 'react-loader-spinner'
import Modal from './components/Modal/Modal'
import { searchPosts } from "./components/GetData/Getting"
import './components/styles.css'

const modalInitialState = {
    src: "",
    alt: "",
}

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(null)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ ...modalInitialState });

    const [search, setSearch] = useState("");


    useEffect(() => {
        const fetchCPictures = async () => {
            try {
                setLoading(true);
                const data = await searchPosts(search, page);
                setItems(prevItems => [...prevItems, ...data.hits])
                setTotal(data.total)
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        if (search) {
            fetchCPictures();
        }
    }, [search, page]);

    const getValueOfSearch = ({ search }) => {
        setSearch(search);
        setPage(1);
        setItems([]);
    }
    const loadMore = () => setPage(prevPage => prevPage + 1);

    const openModal = (data) => {
        setModalOpen(true);
        setModalContent({ src: data.largeImageURL, alt: data.tags })
    }

    const closeModal = () => {
        setModalOpen(false);
        setModalContent({ ...modalInitialState })
    }

    const totalPages = Math.round(total / 12)
    const lastPage = page === totalPages
    const isPosts = Boolean((!lastPage) && (items.length))

    return (
        <div className='app'>
            <Searchbar onSubmit={getValueOfSearch} />
            <ImageGallery items={items} onClick={openModal} />
            {isPosts && <Button onClick={loadMore} text="Load more"></Button>}
            {loading && <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />}
            {modalOpen && <Modal onClose={closeModal} link={modalContent.src} descr={modalContent.alt} />}
            {error && <p>Не удалось загрузить посты</p>}
        </div>
    )
}

export default App;