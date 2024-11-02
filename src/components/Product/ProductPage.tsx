import ProductTable from "./ProductTable.tsx";
import Typography from "@mui/material/Typography";
import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import AddOrEditProductDialog from "./AddOrEditProductDialog.tsx";
import * as React from "react";

export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
}

export default function ProductPage() {
    const [open, setOpen] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
        setIsEditing(false);
    };

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="space-between" marginBottom={1}>
                <Typography variant="h4">
                    Product Page
                </Typography>
                <Box>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>+ Add Product</Button>
                </Box>
            </Stack>

            <ProductTable
                onRowClick={(product:Product) => {
                    setSelectedProduct(product);
                    setIsEditing(true);
                    setOpen(true);
                }}
            />
            <AddOrEditProductDialog open={open} handleClose={handleClose} isEditing={isEditing} selectedProduct={selectedProduct} />
        </>
    );
}