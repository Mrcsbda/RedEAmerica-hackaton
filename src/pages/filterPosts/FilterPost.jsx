import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './filterPost.scss'
import { useNavigate, useParams } from 'react-router-dom';
import CardContentVideo from '../../components/cardContentVideo/CardContentVideo';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import CardContentPodcast from '../../components/cardContentPodcast/CardContentPodcast';
import CardContentDocumnts from '../../components/cardContentDocuments/CardContentDocuments';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { actionGetPostssAsync } from '../../store/actions/post/gettAllPosts';
import { filterByCategory, filterByCountry, filterBySearch, filterByTypeFormat } from '../../store/slides/posts/postsThunk';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/utils/utils';

const FilterPost = () => {

    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedContent, setSelectedContent] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { filterAplied } = useParams();

    // const allPostsRedux = useSelector((state) => state.posts.posts);
    const allPostsRedux = useSelector((state) => state.posts.copyPost);

    useEffect(() => {
        if (!filterAplied) {
            dispatch(actionGetPostssAsync())
        }
    }, [dispatch]);


    const categories = [
        'Desarrollo Comunitario',
        'Inversión Social:',
        'Educación para el Desarrollo Sostenible',
        'Emprendimiento Social',
        'Salud y Bienestar:',
        'Medio Ambiente y Sostenibilidad:',
        'Desarrollo Económico Local',
    ];

    const countries = [
        'honduras',
        'colombia',
        'venezuela',
        'brasil',
        'méxico',
        'guatemala',
        'costa rica',
        'ecuador',
        'perú',
        'chile',
        'argentina'
    ];

    const contentTypes = [
        "video",
        "podcast",
        "pdf"
    ]


    const handleSearchClick = (event) => {
        if (event.key === 'Enter') {
            dispatch(filterBySearch(searchValue))
        }
    };

    const defaultPropsCountries = {
        options: countries,
        getOptionLabel: (option) => option,
    };
    const defaultPropsCategories = {
        options: categories,
        getOptionLabel: (option) => option,
    };

    const defaultPropsContentTypes = {
        options: contentTypes,
        getOptionLabel: (option) => option,
    };

    const flatProps = {
        options: countries.map((option) => option),
    };

    const handleGoToPost = (post) => {
        navigate(`/home/post/${post}`);
    };

    const renderCard = (post) => {

        switch (post.typeFormat) {
            case 'video':
                return (
                    <div onClick={() => handleGoToPost(post.id)}>
                        <CardContentVideo image={post.imagePost} title={post.title} content={post.content} />
                    </div>
                );
            case 'podcast':
                return (
                    <div onClick={() => handleGoToPost(post.id)}>
                        <CardContentPodcast image={post.imagePost} title={post.title} content={post.content} />
                    </div>
                );
            case 'pdf':
                return (
                    <div onClick={() => handleGoToPost(post.id)}>
                        <CardContentDocumnts image={post.imagePost} title={post.title} content={post.content} />
                    </div>
                );
            case 'image':
                return (
                    <div onClick={() => handleGoToPost(post.id)}>
                        <CardContentVideo image={post.imagePost} title={post.title} content={post.content} />
                    </div>
                );
            default:
                return null;
        }
    };


    const handleFilterCountry = ((event, newValue) => {
        dispatch(filterByCountry(newValue))
    }
    )

    const handleFilterCategory = ((event, newValue) => {


        dispatch(filterByCategory(newValue))

    }
    )

    const handleFiltertypeFormat = ((event, newValue) => {
        dispatch(filterByTypeFormat(newValue))
    }
    )

    return (
        <>
            {/*****************Seccion uno*****************/}
            <section className='filter__section__search'>
                <article className='filter__article__search'>
                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar documento…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={handleSearchClick}
                        />
                    </Search>
                </article>
                <article className='filter__article__title'>
                    <div style={{ width: 200 }}>
                        <Autocomplete
                            className='aa'
                            {...defaultPropsCountries}
                            id="select-on-focus"
                            selectOnFocus
                            value={selectedCountry}
                            onChange={(event, newValue) => handleFilterCountry(event, newValue)}
                            // onChange={(event, newValue) => handleChange(event, newValue, 'country')}
                            renderInput={(params) => <TextField {...params} label="País" margin="normal" />}
                        />

                    </div>
                    <div style={{ width: 250 }}>
                        <Autocomplete
                            className='aa'
                            {...defaultPropsCategories}
                            id="select-on-focus"
                            selectOnFocus
                            value={selectedCategory}
                            onChange={(event, newValue) => handleFilterCategory(event, newValue)}
                            // onChange={(event, newValue) => handleChange(event, newValue, 'category')}
                            renderInput={(params) => <TextField {...params} label="Categoría" margin="normal" />}
                        />

                    </div>
                    <div style={{ width: 250 }}>
                        <Autocomplete
                            className='aa'
                            {...defaultPropsContentTypes}
                            id="select-on-focus"
                            selectOnFocus
                            value={selectedContent}
                            onChange={(event, newValue) => handleFiltertypeFormat(event, newValue)}
                            //onChange={(event, newValue) => handleChange(event, newValue, 'contentTypes')}
                            renderInput={(params) => <TextField {...params} label="Tipo de contenido" margin="normal" />}
                        />
                    </div>

                </article>
            </section>

            <section className='filter__section__container'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                    gutter={'2rem'}
                >
                    {allPostsRedux && allPostsRedux.length > 0 ? (
                        <Masonry gutter={'2rem'} style={{ display: 'flex', justifyContent: 'center' }}>
                            {allPostsRedux.map(renderCard)}
                        </Masonry>
                    ) : (
                        <p>No se encontraron resultados</p>
                    )}

                </ResponsiveMasonry>
            </section>
        </>
    )
}

export default FilterPost