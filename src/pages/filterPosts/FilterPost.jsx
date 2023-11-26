import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
//import './home.scss'
import './filterPost.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import CardContentVideo from '../../components/cardContentVideo/CardContentVideo';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
//import './styles.css';
// import required modules
import { Grid, Pagination } from 'swiper/modules';
import CardContentPodcast from '../../components/cardContentPodcast/CardContentPodcast';
import CardContentDocumnts from '../../components/cardContentDocuments/CardContentDocuments';
import CardsByContent from '../../components/cardsByContent/CardsByContent';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { actionGetPostssAsync } from '../../store/actions/post/gettAllPosts';
import { getCompanyInfo } from '../../services/company';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.80),
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '600px',
    borderRadius: '24px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '600px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const FilterPost = () => {

    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedContent, setSelectedContent] = useState('');
    const [selectedAll, setSelectedAll] = useState('');
    const [visibleCategories, setVisibleCategories] = useState(10);
    const [localFilter, setLocalFilter] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { filterAplied } = useParams();
    console.log(filterAplied);

    const allPostsRedux = useSelector((state) => state.posts.posts);
    const [user, setUser] = useState({})
    useEffect(() => {
        dispatch(actionGetPostssAsync())
       // getData()
    }, [dispatch]);


    // const getData = async () => {
    //     const dataCompany = await getCompanyInfo("u8nAh7kdtnho8CXLyU0rtsumwvk2")

    //     setUser(dataCompany)
    // }
    // console.log(user);


    console.log(allPostsRedux);
    // const allPostsRedux = useSelector((state) => state.posts.posts);

    const post = [
        {
            id: "1",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "honduras",
            contentType: "podcast",
            categoryId: "Informes de gestión",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "2",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "colombia",
            contentType: "video",
            categoryId: "Educación",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "3",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "colombia",
            contentType: "documento",
            categoryId: "Salud",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "4",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "colombia",
            contentType: "video",
            categoryId: "Informes de gestión",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "5",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "colombia",
            contentType: "podcast",
            categoryId: "Salud",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "6",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "colombia",
            contentType: "podcast",
            categoryId: "Inclusión económica",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "7",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "venezuela",
            contentType: "video",
            categoryId: "informes de gestión",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "8",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "colombia",
            contentType: "documento",
            categoryId: "Comunidades Sostenibles",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "9",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "honduras",
            contentType: "video",
            categoryId: "Inclusión económica",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

        },
        {
            id: "10",
            title: "Las Comunidades Sostenibles, nuestro desafío",
            content: "contenido",
            format: "video",
            idCompany: "1",
            timeStamp: "2023",
            country: "venezuela",
            contentType: "podcast",
            categoryId: "Comunidades Sostenibles",
            urlFile: "",
            image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",
        }
    ]

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
        'Colombia',
        'venezuela',
        'brasil',
        'méxico',
        'guatemala',
        'costa rica',
        'ecuador',
        'perú',
        'Chile',
        'argentina'
    ];

    const contentTypes = [
        "video",
        "podcast",
        "documento"
    ]

    const handleContryAndCategoryClick = (country, category) => {
        navigate(`/home/filter/${country}/${category}`);
        setSelectedCategory(category);
        setSelectedAll(selectedCountry, selectedCategory)
        console.log(selectedCategory);
    };


    const handleCategoryClick = (category) => {
        navigate(`/home/filter/${category}`);
        setSelectedCategory(category);
        console.log(selectedCategory);
    };

    const handleLoadMoreCategories = () => {
        setVisibleCategories(categories.length);
    };

    const handleCountryClick = (country) => {
        navigate(`/home/filter/${country}`);
        setSelectedCountry(country);
        console.log(selectedCountry);
    };

    const handleSearchClick = (event) => {
        if (event.key === 'Enter') {
            console.log('Búsqueda realizada:', searchValue);
            navigate(`/home/filter/${searchValue}`);
        }
    };

    const handleContentClick = (content) => {
        navigate(`home/filter/${content}`);
        setSelectedContent(content);
        //   console.log(selectedContent);
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


    const handleChange = (event, newValue, context) => {

        switch (context) {
            case 'country':
                setSelectedCountry(newValue);
                // Otras acciones específicas para la selección de país
                break;
            case 'category':
                setSelectedCategory(newValue);
                // Otras acciones específicas para la selección de categoría
                break;
            case 'contentTypes':
                setSelectedContent(newValue);
                // Otras acciones específicas para la selección de categoría
                break;
            // Otros casos según tus necesidades
            default:
                break;
        }

        navigate(`/home/filter/${newValue}`);

        // const filteredPosts = post.filter(item => {
        //     // Aplica filtro por país
        //     if (selectedCountry && item.country !== selectedCountry) {
        //         return false;
        //     }

        //     // Aplica filtro por categoría
        //     if (selectedCategory && item.category !== selectedCategory) {
        //         return false;
        //     }

        //     // Aplica filtro por tipo de contenido
        //     if (selectedContent && item.contentType !== selectedContent) {
        //         return false;
        //     }

        //     // Puedes agregar más condiciones según tus necesidades
        //     // Por ejemplo, si seleccionas país y categoría, verifica si el post cumple ambas condiciones
        //     if (selectedCountry && selectedCategory) {
        //         // Asumiendo que `item.category` es un array y deseas verificar si contiene la categoría seleccionada
        //         if (!item.categoryId.includes(selectedCategory)) {
        //             return false;
        //         }
        //     }

        //     // Si no se ha encontrado ninguna discrepancia, muestra el elemento
        //     return true;
        // });

        //setFilteredData(filteredPosts);

    };

    console.log(selectedCountry);

    // const filteredPosts = allPostsRedux?.filter(async (post) => {
    //     const lowerCaseFilter = filterAplied.toLowerCase();
    //     const titleMatches = post.title.toLowerCase().includes(lowerCaseFilter);
    //     const contentMatches = post.content.toLowerCase().includes(lowerCaseFilter);
    //     const categoryMatchesFilterAplied = post.category === filterAplied;
    //     const contentMatchesFilterAplied = post.typeFormat === filterAplied;
    
    //     // Obtener userId del post
    //     const userId = post.userId;
    //     console.log(userId);
    
    //     // Obtener información del usuario
    //     const dataCompany = await getCompanyInfo(userId);
    //     console.log(dataCompany);
    
    //     // Verificar si se obtuvo la información del usuario y tiene la propiedad country
    //     const userCountryMatches = dataCompany && dataCompany.country === selectedCountry;
    
    //     return (
    //         titleMatches ||
    //         contentMatches ||
    //         categoryMatchesFilterAplied ||
    //         contentMatchesFilterAplied ||
    //         userCountryMatches
    //     );
    // });
    
    

    const filteredPosts = allPostsRedux?.filter((post) => {
        console.log(post);
        const lowerCaseFilter = filterAplied.toLowerCase();
        const titleMatches = post.title.toLowerCase().includes(lowerCaseFilter);
        const contentMatches = post.content.toLowerCase().includes(lowerCaseFilter);
        const categoryMatchesFilterAplied = post.category === filterAplied;
        const contentMatchesFilterAplied = post.typeFormat === filterAplied;
         const categoryMatches = post.category === selectedCategory;
        const contentTypeMatches = post.typeFormat === selectedContent;

        return titleMatches || contentMatches ||  categoryMatches || contentTypeMatches || categoryMatchesFilterAplied || contentMatchesFilterAplied;
    });


    // const filteredPosts = allPostsRedux?.filter((post) => {
    //     const countryAndCategoryMatches = selectedCountry && selectedCategory && post.country === selectedCountry && post.category === selectedCategory;
    //     const lowerCaseFilter = filterAplied.toLowerCase();
    //     const titleMatches = post.title.toLowerCase().includes(lowerCaseFilter);
    //     const contentMatches = post.content.toLowerCase().includes(lowerCaseFilter);
    //    // const countryMatches = post.country === selectedCountry;
    //     const categoryMatches = post.category === selectedCategory;
    //     const contentTypeMatches = post.typeFormat === selectedContent;

    //     return titleMatches || contentMatches || countryAndCategoryMatches ||  categoryMatches || contentTypeMatches;
    // });



    //const [filteredData, setFilteredData ] = useState(null)



    // Actualiza el estado del resultado filtrado


    // console.log(filteredData);

    const handleGoToPost = (post) => {
        navigate(`/home/post/${post}`);
        console.log(post);
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
            case 'documento':
                return (
                    <div onClick={() => handleGoToPost(post.id)}>
                        <CardContentDocumnts image={post.imagePost} title={post.title} content={post.content} />
                    </div>
                );
            default:
                return null;
        }
    };


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
                            onChange={(event, newValue) => handleChange(event, newValue, 'country')}
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
                            onChange={(event, newValue) => handleChange(event, newValue, 'category')}
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
                            onChange={(event, newValue) => handleChange(event, newValue, 'contentTypes')}
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
                    <Masonry gutter={'2rem'} style={{ display: 'flex', justifyContent: 'center' }}>
                        {filteredPosts?.map(renderCard)}
                    </Masonry>
                </ResponsiveMasonry>
            </section>


        </>
    )
}

export default FilterPost