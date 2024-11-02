import ProductTable from "./ProductTable.tsx";
import Typography from "@mui/material/Typography";
import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";

export default function ProductPage() {
    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="space-between" marginBottom={1}>
                <Typography variant="h4">
                    Product Page
                </Typography>
                <Box>
                <Button variant="contained" color="primary">+ Add Product</Button>
                </Box>
            </Stack>

            <ProductTable />
        </>
    );
}