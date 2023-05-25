import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    OutlinedInput,
    Select,
    MenuItem
} from "@mui/material";
import { DateField } from '@mui/x-date-pickers-pro';
import { FormattedMessage, useIntl } from "react-intl";
import { useMedicineAddFormController } from "./MedicineAddForm.controller";
import { isEmpty, isUndefined } from "lodash";
import { ContentCard } from "@presentation/components/ui/ContentCard";

/**
 * Here we declare the Medicine add form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const MedicineAddForm = (props: { onSubmit?: () => void }) => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useMedicineAddFormController(props.onSubmit); // Use the controller.

    return (
        <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <form onSubmit={actions.handleSubmit(actions.submit)}>
            {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
            <Stack spacing={4} style={{ width: "100%" }}>
              <ContentCard title={formatMessage({ id: "globals.addMedicine" })}>
              <Grid container item direction="row" xs={12} columnSpacing={4}>
                <Grid container item direction="column" xs={6} md={6}>
                    <FormControl
                        fullWidth
                        error={!isUndefined(state.errors.medicineName)}
                    > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                        <FormLabel required>
                            <FormattedMessage id="globals.medicineName" />
                        </FormLabel> {/* Add a form label to indicate what the input means. */}
                        <OutlinedInput
                            {...actions.register("medicineName")} // Bind the form variable to the UI input.
                            placeholder={formatMessage(
                                { id: "globals.placeholders.textInput" },
                                {
                                    fieldName: formatMessage({
                                        id: "globals.medicineName",
                                    }),
                                })}
                            autoComplete="none"
                        /> {/* Add a input like a textbox shown here. */}
                        <FormHelperText
                            hidden={isUndefined(state.errors.medicineName)}
                        >
                            {state.errors.medicineName?.message}
                        </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                    </FormControl>
                </Grid>
                <Grid container item direction="column" xs={6} md={6}>
                    <FormControl
                        fullWidth
                        error={!isUndefined(state.errors.medicineDescription)}
                    > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                        <FormLabel required>
                            <FormattedMessage id="globals.medicineDescription" />
                        </FormLabel> {/* Add a form label to indicate what the input means. */}
                        <OutlinedInput
                            {...actions.register("medicineDescription")} // Bind the form variable to the UI input.
                            placeholder={formatMessage(
                                { id: "globals.placeholders.textInput" },
                                {
                                    fieldName: formatMessage({
                                        id: "globals.medicineDescription",
                                    }),
                                })}
                            autoComplete="none"
                        /> {/* Add a input like a textbox shown here. */}
                        <FormHelperText
                            hidden={isUndefined(state.errors.medicineDescription)}
                        >
                            {state.errors.medicineDescription?.message}
                        </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                    </FormControl>
                </Grid>
                <Grid container item direction="column" xs={6} md={6}>
                    <FormControl
                        fullWidth
                        error={!isUndefined(state.errors.medicinePrice)}
                    > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                        <FormLabel required>
                            <FormattedMessage id="globals.medicinePrice" />
                        </FormLabel> {/* Add a form label to indicate what the input means. */}
                        <OutlinedInput
                            {...actions.register("medicinePrice")} // Bind the form variable to the UI input.
                            placeholder={formatMessage(
                                { id: "globals.placeholders.textInput" },
                                {
                                    fieldName: formatMessage({
                                        id: "globals.medicinePrice",
                                    }),
                                })}
                            autoComplete="none"
                        /> {/* Add a input like a textbox shown here. */}
                        <FormHelperText
                            hidden={isUndefined(state.errors.medicinePrice)}
                        >
                            {state.errors.medicinePrice?.message}
                        </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                    </FormControl>
                </Grid>
                <Grid container item direction="column" xs={6} md={6}>
                    <FormControl
                        fullWidth
                        error={!isUndefined(state.errors.medicineMeasurement)}
                    > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                        <FormLabel required>
                            <FormattedMessage id="globals.medicineMeasurement" />
                        </FormLabel> {/* Add a form label to indicate what the input means. */}
                        <OutlinedInput
                            {...actions.register("medicineMeasurement")} // Bind the form variable to the UI input.
                            placeholder={formatMessage(
                                { id: "globals.placeholders.textInput" },
                                {
                                    fieldName: formatMessage({
                                        id: "globals.medicineMeasurement",
                                    }),
                                })}
                            autoComplete="none"
                        /> {/* Add a input like a textbox shown here. */}
                        <FormHelperText
                            hidden={isUndefined(state.errors.medicineMeasurement)}
                        >
                            {state.errors.medicineMeasurement?.message}
                        </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                    </FormControl>
                </Grid>
                
            </Grid>
              </ContentCard>
              <Grid
                container
                item
                direction="row"
                xs={12}
                className="padding-top-sm"
              >
                <Grid container item direction="column" xs={12} md={7}></Grid>
                <Grid container item direction="column" xs={5}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!isEmpty(state.errors) || computed.isSubmitting}
                  >
                    {/* Add a button with type submit to call the submission callback if the button is a descended of the form element. */}
                    {!computed.isSubmitting && (
                      <FormattedMessage id="globals.submit" />
                    )}
                    {computed.isSubmitting && <CircularProgress />}
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </form>
        </div>
      );
    };