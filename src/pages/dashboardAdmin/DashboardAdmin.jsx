import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { collection, getDocs, doc,updateDoc } from 'firebase/firestore';
import { firebaseDB } from "../../firebase/firebaseConfig";

import './dashboardAdmin.scss';

const DashboardAdmin = () => {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    try {
        const companiesRef = collection(firebaseDB, 'companies');
        const companySnapshot = await getDocs(companiesRef);
        const companies = companySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(companies);
        return companies;
    } catch (error) {
        console.log(error);
        return false;
    }
  };


  useEffect(() => {
      const fetchCompanies = async () => {
          const companiesData = await getCompanies();
          setCompanies(companiesData);
      };

      fetchCompanies();
  }, []);

  const toggleStatus = async (index) => {
    const company = companies[index];
    const newStatus = !company.isValidate;

    // Actualizar el estado en Firebase
    const companyRef = doc(firebaseDB, 'companies', company.id);
    await updateDoc(companyRef, { isValidate: newStatus });

    // Actualizar el estado en React
    setCompanies(companies.map((c, i) => 
        i === index ? {...c, isValidate: newStatus} : c
    ));
};
  getCompanies()

  return (
    <main>
      <Header />
      <h1>Panel de Administración</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>País</th>
            <th>Teléfono</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.email}</td>
              <td>{company.country}</td>
              <td>{company.phone}</td>
              <td>{company.isValidate ? 'Activo' : 'Inactivo'}</td>
              <td>
                <button className="toggle-button" onClick={() => toggleStatus(index)}>
                  Cambiar estado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};




export default DashboardAdmin;