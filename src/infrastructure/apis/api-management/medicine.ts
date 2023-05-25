import { useAppSelector } from "@application/store";
import { ApiMedicineGetPageGetRequest,  MedicineApi, MedicineDTO,  UserApi } from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */

const getMedicinesQueryKey = "getMedicinesQuery";
const getMedicineQueryKey = "getMedicineQuery";
const addMedicineMutationKey = "addMedicineMutation";
const deleteMedicineMutationKey = "deleteMedicineMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useMedicineApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getMedicines = (page: ApiMedicineGetPageGetRequest) => new MedicineApi(config).apiMedicineGetPageGet(page); // Use the generated client code and adapt it.
    const getMedicine = (id: string) => new MedicineApi(config).apiMedicineGetByIdIdGet({ id });
    const addMedicine = (medicine: MedicineDTO) => new MedicineApi(config).apiMedicineAddPost({ medicineAddDTO: medicine });
    const deleteMedicine = (id: string) => new MedicineApi(config).apiMedicineDeleteIdDelete({ id });

    return {
        getMedicines: { // Return the query object.
            key: getMedicinesQueryKey, // Add the key to identify the query.
            query: getMedicines // Add the query callback.
        },
        getMedicine: {
            key: getMedicineQueryKey,
            query: getMedicine
        },
        addMedicine: { // Return the mutation object.
            key: addMedicineMutationKey, // Add the key to identify the mutation.
            mutation: addMedicine // Add the mutation callback.
        },
        deleteMedicine: {
            key: deleteMedicineMutationKey,
            mutation: deleteMedicine
        }
    }
}