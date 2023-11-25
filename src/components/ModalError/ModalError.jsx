import {Alert, Snackbar, Typography} from "@mui/material";

const ModalError = (props) => {
    const {errors} = props;
    const seeModal = errors.some(item => item.hasError === true);

    return (
        <>
            {
                seeModal && (
                    <Snackbar open={open} autoHideDuration={6000}  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                        <Alert severity="error" sx={{ width: '100%' }}>
                            {
                                errors.map((error) => (
                                    <Typography key={error.key} sx={{fontSize: 25}}>{error.message}</Typography>
                                ))
                            }

                        </Alert>
                    </Snackbar>
                )
            }
        </>
    );
};

export default ModalError;
