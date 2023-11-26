import React from 'react'
import CardMember from '../../components/cardMember/CardMember'
import './member.scss'

const Members = () => {

  const users = [
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk2",
      name: "Usuario 1",
      country: "País 1",
      description: "Descripción 1",
      web: "https://www.ejemplo1.com",
      linkeln: "https://www.linkedin.com/in/ejemplo1",
      instagram: "https://www.instagram.com/ejemplo1",
      logo: "URL del Logo 1",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk3",
      name: "Usuario 2",
      country: "País 2",
      description: "Descripción 2",
      web: "https://www.ejemplo2.com",
      linkeln: "https://www.linkedin.com/in/ejemplo2",
      instagram: "https://www.instagram.com/ejemplo2",
      logo: "URL del Logo 2",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk4",
      name: "Usuario 3",
      country: "País 3",
      description: "Descripción 3",
      web: "https://www.ejemplo3.com",
      linkeln: "https://www.linkedin.com/in/ejemplo3",
      instagram: "https://www.instagram.com/ejemplo3",
      logo: "URL del Logo 3",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk5",
      name: "Usuario 4",
      country: "País 4",
      description: "Descripción 4",
      web: "https://www.ejemplo4.com",
      linkeln: "https://www.linkedin.com/in/ejemplo4",
      instagram: "https://www.instagram.com/ejemplo4",
      logo: "URL del Logo 4",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk6",
      name: "Usuario 5",
      country: "País 5",
      description: "Descripción 5",
      web: "https://www.ejemplo5.com",
      linkeln: "https://www.linkedin.com/in/ejemplo5",
      instagram: "https://www.instagram.com/ejemplo5",
      logo: "URL del Logo 5",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk7",
      name: "Usuario 6",
      country: "País 6",
      description: "Descripción 6",
      web: "https://www.ejemplo6.com",
      linkeln: "https://www.linkedin.com/in/ejemplo6",
      instagram: "https://www.instagram.com/ejemplo6",
      logo: "URL del Logo 6",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk8",
      name: "Usuario 7",
      country: "País 7",
      description: "Descripción 7",
      web: "https://www.ejemplo7.com",
      linkeln: "https://www.linkedin.com/in/ejemplo7",
      instagram: "https://www.instagram.com/ejemplo7",
      logo: "URL del Logo 7",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk9",
      name: "Usuario 8",
      country: "País 8",
      description: "Descripción 8",
      web: "https://www.ejemplo8.com",
      linkeln: "https://www.linkedin.com/in/ejemplo8",
      instagram: "https://www.instagram.com/ejemplo8",
      logo: "URL del Logo 8",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk10",
      name: "Usuario 9",
      country: "País 9",
      description: "Descripción 9",
      web: "https://www.ejemplo9.com",
      linkeln: "https://www.linkedin.com/in/ejemplo9",
      instagram: "https://www.instagram.com/ejemplo9",
      logo: "URL del Logo 9",
    },
    {
      id: "u8nAh7kdtnho8CXLyU0rtsumwvk11",
      name: "Usuario 10",
      country: "País 10",
      description: "Descripción 10",
      web: "https://www.ejemplo10.com",
      linkeln: "https://www.linkedin.com/in/ejemplo10",
      instagram: "https://www.instagram.com/ejemplo10",
      logo: "URL del Logo 10",
    },
  ];
  
 

  return (
    <section className='members__section'>
    {users.map((user) => (
      <CardMember key={user.id} user={user} />
    ))}
  </section>
  )
}

export default Members