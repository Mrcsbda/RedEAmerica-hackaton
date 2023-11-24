import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setIsAuthenticated, setRole, setUserLogged } from "./auth";
import { createAnCompanyInCollection, getCompanyFromCollection } from "../../../services/company";
import { firebaseAuth } from "../../../firebase/firebaseConfig";
import Swal from "sweetalert2";

export const createAnCompany = (newCompany) => {
    return async (dispatch) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                firebaseAuth, 
                newCompany.email,
                newCompany.password
            );
            await updateProfile(firebaseAuth.currentUser, {
                displayName: newCompany.name,
                photoURL: newCompany.logo
            });
            const createdCompany = createAnCompanyInCollection(
                user.uid,
                newCompany
            );
        } catch (error) {
            console.log(error);
        }
    }
}

export const loginWithEmailAndPassword = (loggedUser) => {
    return async (dispatch) => {
        try {
            const { user } = await signInWithEmailAndPassword(
                firebaseAuth,
                loggedUser.email,
                loggedUser.password
            );
            const foundUser = await getCompanyFromCollection(user.uid);
            const userLogged = {
                id: foundUser.id
            }
            if(foundUser.isValidate){
                dispatch(setUserLogged(foundUser));
                dispatch(setIsAuthenticated(true));
                dispatch(setRole(foundUser.rol));
            }else{
                Swal.fire(
                    "Alerta",
                    "Su cuenta aun se encuentra en estado de validación",
                    "warning"
                )
            }
        } catch (error) {
            console.log(error);
        }
    }
}