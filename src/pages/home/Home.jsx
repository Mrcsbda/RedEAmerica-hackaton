import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './home.scss'
import { useNavigate } from 'react-router-dom';
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

const Home = () => {

  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedContent, setSelectedContent] = useState('');
  const [visibleCategories, setVisibleCategories] = useState(10);
  const navigate = useNavigate();

  const post = [
    {
      id: "1",
      title: "Las Comunidades Sostenibles, nuestro desafío",
      content: "contenido",
      format: "video",
      idCompany: "1",
      timeStamp: "2023",
      country: "colombia",
      contentType: "podcast",
      categoryId: "informes de gestión",
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
      contentType: "",
      categoryId: "informes de gestión",
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
      contentType: "",
      categoryId: "informes de gestión",
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
      contentType: "",
      categoryId: "informes de gestión",
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
      contentType: "",
      categoryId: "informes de gestión",
      urlFile: "",
      image: "https://www.redeamerica.org/Portals/0/EasyDNNNews/2324/images/img-UNICA_400-600-600-p-L-97.jpg",

    }
  ]

  const categories = [
    "Informes de gestión",
    "Comunidades Sostenibles",
    "Inclusión económica",
    "Educación",
    "Salud",
    "Desarrollo local",
    "Empresa y Comunidad",
    "Alianzas y programas",
    "Casos y experiencias",
    "Memorias FIR",
    "Fortalecimiento de miembros",
    "Paz",
    "Primera infancia",
    "Desarrollo de Base",
    "Premio",
    "Covid",
    "Agenda America Latina",
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
    console.log(selectedcountry);
  };

  const handleSearchClick = (event) => {
    if (event.key === 'Enter') {
      console.log('Búsqueda realizada:', searchValue);
      navigate(`/home/filter/${searchValue}`);
    }
  };

  const handleContentClick = (content) => {
    navigate(`/home/filter/${content}`);
    setSelectedContent(content);
    console.log(selectedContent);
  };

  const handleGoToPost = (post) => {
    navigate(`/home/post/${post}`);
    console.log(post);
  };


  return (
    <>
      {/*****************Seccion uno*****************/}
      <section className='home__section__search'>
        <article className='home__article__search'>
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
        <article className='home__article__title'>
          <h2>Navega por nuestra sección de recursos, en donde encontrarás más de 130 guías, manuales y publicaciones.</h2>
        </article>
      </section>

      {/*****************Seccion dos*****************/}
      <section className='home__section__categories'>
        <h3 className='home__section__categories__title'>Explora por categorias</h3>
        <div className='home__article__categories'>
          {categories.slice(0, visibleCategories).map((category) => (
            <button key={category} className='home__article__categories__btn' onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
        {visibleCategories < categories.length && (
          <button className='home__article__loadMoreBtn' onClick={handleLoadMoreCategories}>
            <BiSolidCategory className='home__article__loadMoreBtn__icon' />
            <span>Ver más categorías...</span>
          </button>
        )}
      </section>

      {/*****************Seccion tres*****************/}
      <section className='home__section__searchByCountry'>
        <h3 className='home__section__searchByCountry__title'>Explora por experiencias en nuestros paises miembros</h3>
        <div className='home__article__searchByCountry' style={{ position: 'relative' }}>
          <figure className='home__article__searchByCountry__figure'>
            <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1700776369/h6ml7abvbqx3mehdyq58.gif" alt="" />
          </figure>
          {countries.map((country) => (
            <button key={country} className={`home__article__searchByCountry__${country.replace(/\s/g, '')}`} onClick={() => handleCountryClick(country)}>
              {country.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/*****************Seccion cuatro*****************/}
      <section className='home__section__lastContent'>
        <h3 className='home__section__lastContent__title'>Accede a nuestro contenido más reciente...</h3>
        <div className='home__article__lastContent'>
          <h5 className='home__article__lastContent__subTitle'>Últimas publicaciones en video</h5>
          <hr />
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: #004632;"></span>`;
              },
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              556: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {Object.keys(post).map((key) => (

              <SwiperSlide key={key}>
                <div onClick={() => handleGoToPost(post[key].id)}>
                  <CardContentVideo key={key} title={post[key].title} image={post[key].image} content={post[key].content} />
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
          <article className='home__article__lastContent__btn'>
            <bottom onClick={() => handleContentClick("video")}>Ver todo el contenido...</bottom>

          </article>

        </div>

      </section>

      {/*****************Seccion cinco*****************/}
      <section className='home__section__lastContent'>

        <div className='home__article__lastContent'>

          <h5 className='home__article__lastContent__subTitle'>Últimas publicaciones en podcast</h5>
          <hr />
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: #004632;"></span>`;
              },
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              556: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {Object.keys(post).map((key) => (

              <SwiperSlide key={key}>
                <div onClick={() => handleGoToPost(post[key].id)}>
                  <CardContentPodcast key={key} title={post[key].title} image={post[key].image} content={post[key].content} />
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
          <article className='home__article__lastContent__btn'>
            <bottom onClick={() => handleContentClick("podcast")}>Ver todo el contenido...</bottom>

          </article>

        </div>

      </section>

      {/*****************Seccion seis*****************/}
      <section className='home__section__lastContent'>

        <div className='home__article__lastContent'>

          <h5 className='home__article__lastContent__subTitle'>Últimas publicaciones en pdf</h5>
          <hr />
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: #004632;"></span>`;
              },
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 7,
              },
              556: {
                slidesPerView: 5,
              },
              0: {
                slidesPerView: 2,
              },
            }}
          >
            {Object.keys(post).map((key) => (

              <SwiperSlide key={key}>
                <div onClick={() => handleGoToPost(post[key].id)}>
                  <CardContentDocumnts key={key} title={post[key].title} image={post[key].image} content={post[key].content} onClick={() => handleGoToPost(post[key].id)} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <article className='home__article__lastContent__btn'>
            <bottom onClick={() => handleContentClick("document")}>Ver todo el contenido...</bottom>

          </article>
        </div>
      </section>
    </>
  )
}

export default Home