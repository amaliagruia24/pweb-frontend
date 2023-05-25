import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useMedicineAddDialogController } from "./MedicineAddDialog.controller";
import { MedicineAddForm } from "@presentation/components/forms/Medicine/MedicineAddForm";
import { useIntl } from "react-intl";

/**
 * This component wraps the Medicine add form into a modal dialog.
 */
export const MedicineAddDialog = () => {
  const { open, close, isOpen } = useMedicineAddDialogController();
  const { formatMessage } = useIntl();

  return <div>
    <Button variant="outlined" onClick={open}>
      {formatMessage({ id: "labels.addMedicine" })}
    </Button>
    <Dialog
      open={isOpen}
      onClose={close}>
      <DialogTitle>
        {formatMessage({ id: "labels.addMedicine" })}
      </DialogTitle>
      <DialogContent>
        <MedicineAddForm onSubmit={close} />
      </DialogContent>
    </Dialog>
  </div>
};