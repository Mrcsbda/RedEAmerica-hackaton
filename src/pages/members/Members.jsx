import React, { useEffect, useState } from 'react'
import CardMember from '../../components/cardMember/CardMember'
import './member.scss'
import { getCompanies } from '../../services/company';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/utils/utils';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField } from "@mui/material";

const Members = () => {

  const [companies, setCompanies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('')


  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesData = await getCompanies();
      setCompanies(companiesData);
      // setIsLoading(false); // Actualizar el estado cuando los datos se hayan cargado
    };

    fetchCompanies();
  }, []);


  const handleSearchClick = (event) => {
    if (event.key === 'Enter') {
      const filtered = companies.filter((company) => {
        const titleMatch = company.name.toLowerCase().includes(searchValue.toLowerCase());
        return titleMatch;
      });

      setFilteredCompanies(filtered);
    }
  };

  const defaultPropsCompanies = {
    options: companies.filter((company) => company.rol === 'MEMBER'),
    getOptionLabel: (option) => (option && option.name) || '', // Manejar opciones vacías
  };
  


  const handleFilterByMember = (event, newValue) => {
    setSelectedCompany(newValue)
    const filtered = companies.filter((company) => {
      const titleMatch = company.name.toLowerCase().includes(newValue.name.toLowerCase());
      return titleMatch;
    });
    setFilteredCompanies(filtered);
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
              placeholder="Buscar empresa…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearchClick}
            />
          </Search>
        </article>
        <article className='filter__article__title'>
          <div style={{ width: 300 }}>
            <Autocomplete
              className='aa'
              {...defaultPropsCompanies}
              id="select-on-focus"
              selectOnFocus
              value={selectedCompany}
              onChange={(event, newValue) => handleFilterByMember(event, newValue)}
              // onChange={(event, newValue) => handleChange(event, newValue, 'country')}
              renderInput={(params) => <TextField {...params} label="Buscar empresa" margin="normal" />}
            />

          </div>


        </article>
      </section>
      {/*****************Seccion dos****************/}

      <section className='members__section'>
        {!searchValue && !selectedCompany
          ? companies
            .filter((company) => company.rol === 'MEMBER')
            .map((company) => (
              <CardMember key={company.id} user={company} />
            ))
          : filteredCompanies
            .filter((company) => company.rol === 'MEMBER')
            .map((company) => (
              <CardMember key={company.id} user={company} />
            ))}
      </section>

    </>


  )
}

export default Members