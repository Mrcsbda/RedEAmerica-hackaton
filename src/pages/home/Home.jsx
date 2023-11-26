import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './home.scss'
import { useNavigate } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import CardContentVideo from '../../components/cardContentVideo/CardContentVideo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import CardContentPodcast from '../../components/cardContentPodcast/CardContentPodcast';
import CardContentDocumnts from '../../components/cardContentDocuments/CardContentDocuments';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetPostssAsync } from '../../store/actions/post/gettAllPosts';
import { categoriesOptions } from '../addPost/constants/optionsSelect';
import { filterByCategory, filterByCountry, filterBySearch, filterByTypeFormat } from '../../store/slides/posts/postsThunk';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/utils/utils';

const Home = () => {

  const [searchValue, setSearchValue] = useState('');
  const [visibleCategories, setVisibleCategories] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPostsRedux = useSelector((state) => state.posts.copyPost);

  useEffect(() => {
    dispatch(actionGetPostssAsync())
  }, [dispatch]);

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
    dispatch(filterByCategory(category.category))
    navigate(`/home/filter/${category.category}`);
  };

  const handleLoadMoreCategories = () => {
    setVisibleCategories(categoriesOptions.length);
  };

  const handleCountryClick = (country) => {
    console.log(country);
    dispatch(filterByCountry(country))
    navigate(`/home/filter/${country}`);
  };

  const handleSearchClick = (event) => {

    if (event.key === 'Enter') {
      dispatch(filterBySearch(searchValue))
      navigate(`/home/filter/${searchValue}`);
    }
  };

  const handleContentClick = (content) => {
    dispatch(filterByTypeFormat(content))
    navigate(`/home/filter/${content}`);
  };

  const handleGoToPost = (post) => {
    navigate(`/home/post/${post}`);
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
          {categoriesOptions.slice(0, visibleCategories).map((category) => (
            <button key={category.id} className='home__article__categories__btn' onClick={() => handleCategoryClick(category)}>
              {category.category}
            </button>
          ))}
        </div>
        {visibleCategories < categoriesOptions.length && (
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
            {Object.keys(allPostsRedux)
              .filter((key) => allPostsRedux[key].typeFormat === 'video')
              .slice(-15)  // Obtener los últimos 15 elementos
              .map((key) => (
                <SwiperSlide key={key}>
                  <div onClick={() => handleGoToPost(allPostsRedux[key].id)}>
                    <CardContentVideo key={key} title={allPostsRedux[key].title} image={allPostsRedux[key].imagePost} content={allPostsRedux[key].content} />
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
            {Object.keys(allPostsRedux)
              .filter((key) => allPostsRedux[key].typeFormat === 'podcast')
              .slice(-15)  // Obtener los últimos 15 elementos
              .map((key) => (
                <SwiperSlide key={key}>
                  <div onClick={() => handleGoToPost(allPostsRedux[key].id)}>
                    <CardContentPodcast key={key} title={allPostsRedux[key].title} image={allPostsRedux[key].imagePost} content={allPostsRedux[key].content} />
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
            {Object.keys(allPostsRedux)
              .filter((key) => allPostsRedux[key].typeFormat === 'pdf')
              .slice(-15)  // Obtener los últimos 15 elementos
              .map((key) => (
                <SwiperSlide key={key}>
                  <div onClick={() => handleGoToPost(allPostsRedux[key].id)}>
                    <CardContentDocumnts key={key} title={allPostsRedux[key].title} image={allPostsRedux[key].imagePost} content={allPostsRedux[key].content} onClick={() => handleGoToPost(allPostsRedux[key].id)} />
                  </div>
                </SwiperSlide>
              ))}

          </Swiper>
          <article className='home__article__lastContent__btn'>
            <bottom onClick={() => handleContentClick("pdf")}>Ver todo el contenido...</bottom>

          </article>
        </div>
      </section>
    </>
  )
}

export default Home