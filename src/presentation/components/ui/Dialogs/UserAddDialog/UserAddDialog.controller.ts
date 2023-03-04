import { useCallback, useState } from "react";
import { useDialogController } from "../Dialog.controller";

export const useUserAddDialogController = () => {

    return useDialogController();
}