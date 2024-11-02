import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Product} from "./ProductPage.tsx";

interface AddOrEditProductDialogProps {
    open: boolean;
    handleClose: () => void;
    isEditing?: boolean;
    selectedProduct?: Product | null;
}

export default function AddOrEditProductDialog({open, handleClose, isEditing, selectedProduct}: AddOrEditProductDialogProps) {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle variant="h4">{isEditing ? "Update Product" : "Add Product"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={selectedProduct?.name}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={selectedProduct?.price}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={selectedProduct?.description}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="qty"
                        name="qty"
                        label="Quantity"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={selectedProduct?.qty}
                    />
                </DialogContent>
                <DialogActions sx={{mb:1}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={()=>{
                        console.log("Add Product")
                    }}>{isEditing ? "Update" : "Save"}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
