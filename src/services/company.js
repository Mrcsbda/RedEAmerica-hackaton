import { doc, getDoc, setDoc } from "firebase/firestore";
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