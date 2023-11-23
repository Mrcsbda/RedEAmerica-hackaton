import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './home.scss'
import { useNavigate } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import CardContentVideo from '../../components/cardContentVideo/CardContentVideo';


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
  const [visibleCategories, setVisibleCategories] = useState(10);
  const navigate = useNavigate();

  const post = {
    title: "titulo",
    category: "informes de gestión",

  }

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
  ];



  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  const handleLoadMoreCategories = () => {
    setVisibleCategories(categories.length);
  };


  // const filteredPosts = post.filter((post) => {
  //   return selectedCategory === "all" || post.category === selectedCategory;
  // });

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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // Realiza la búsqueda o la acción deseada aquí con el valor de searchValue
                  console.log('Búsqueda realizada:', searchValue);
                }
              }}
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
        <div className='home__article__searchByCountry'  style={{position:'relative'}}>
         <figure className='home__article__searchByCountry__figure'>
          <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1700776369/h6ml7abvbqx3mehdyq58.gif" alt=""/>
         </figure>
         {countries.map((country) => (
           <button key={country} className={`home__article__searchByCountry__${country.replace(/\s/g, '')}`}>
            {country.toUpperCase()}
          </button>
        ))}
          <div>
            <CardContentVideo/>
          </div>
        </div>
       
      </section>

           {/*****************Seccion cuatro*****************/}
           <section className='home__section__lastContent'>
        <h3 className='home__section__lastContent__title'>Accede a nuestro contenido más reciente...</h3>
        <div className='home__article__lastContent'>
          <h5>Ultimos videos</h5>
          <div>
            <CardContentVideo/>
          </div>
        </div>
       
      </section>

    </>
  )
}

export default Home