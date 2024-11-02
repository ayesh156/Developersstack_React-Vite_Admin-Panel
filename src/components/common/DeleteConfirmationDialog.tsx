import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {Alert, AlertTitle} from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface DeleteConfirmationDialogProps {
    open: boolean;
    handleClose: () => void;
    itemName?: string;
}

export default function DeleteConfirmationDialog({open, handleClose, itemName}: DeleteConfirmationDialogProps) {


    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle variant="h6">{"Are You Sure You Want to Delete?"}</DialogTitle>
                <DialogContent>
                    <Alert severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        This action cannot be undone. Are you sure you want to delete this item <strong>{itemName}</strong>?
                    </Alert>
                </DialogContent>
                <DialogActions sx={{mb:1}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
