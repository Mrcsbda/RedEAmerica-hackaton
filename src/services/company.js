import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebaseConfig";

const collectionCompany = "companies";

export const createAnCompanyInCollection = async (uid, newCompany) => {
    try {
        const newCompanyRef = doc(firebaseDB, collectionCompany, uid);
        await setDoc(newCompanyRef, newCompany);
        return {
            ok: true,
            company: {
                id: uid,
                ...newCompany
            },
        };
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getCompanyInfo = async (id) => {
    try {
        const companyRef = doc(firebaseDB, `companies`, id);
        const companySnapshot = await getDoc(companyRef);
        const company = companySnapshot.data();
        return company
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getCompanyFromCollection = async (uid) => {
    try {
        const userRef = doc(firebaseDB, collectionCompany, uid);
        const user = await getDoc(userRef);
        if(user.exists()){
            return {
                id: user.id,
                ...user.data(),
            };
        }else{
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getAllCompanies = async () => {
    try {
      const companiesRef = collection(firebaseDB, 'companies');
      const companiesSnapshot = await getDocs(companiesRef);
  
      const companies = [];
  
      companiesSnapshot.forEach((doc) => {
        companies.push({
          id: doc.id,
          ...doc.data(),
        });
      });
  
      return companies;
    } catch (error) {
      console.error('Error al obtener todas las compañías:', error);
      return false;
    }
  };
  

  export const getCompanies = async () => {
    try {
      const companiesRef = collection(firebaseDB, 'companies');
      const companySnapshot = await getDocs(companiesRef);
      const companies = companySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return companies;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
