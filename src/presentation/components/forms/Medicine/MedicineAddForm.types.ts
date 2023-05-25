import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";

export type MedicineAddFormModel = {
    medicineName: string,
    medicineDescription: string,
    medicinePrice: number,
    medicineMeasurement: number,
    quantity: number
    
};

export type MedicineAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<MedicineAddFormModel>>;
};

export type MedicineAddFormActions = {
    register: UseFormRegister<MedicineAddFormModel>;
    watch: UseFormWatch<MedicineAddFormModel>;
    handleSubmit: UseFormHandleSubmit<MedicineAddFormModel>;
    submit: (body: MedicineAddFormModel) => void;
};
export type MedicineAddFormComputed = {
    defaultValues: MedicineAddFormModel,
    isSubmitting: boolean
};

export type MedicineAddFormController = FormController<MedicineAddFormState, MedicineAddFormActions, MedicineAddFormComputed>;