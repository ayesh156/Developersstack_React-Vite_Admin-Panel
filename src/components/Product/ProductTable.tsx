import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Product} from "./ProductPage.tsx";
import DeleteConfirmationDialog from "../common/DeleteConfirmationDialog.tsx";
import * as React from "react";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    qty: number,
) {
    return {name, calories, fat,qty};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0,6.0),
];

export default function ProductTable({onRowClick}:{onRowClick: (product:Product) => void;}) {
    const [open, setOpen] = React.useState(false);
    const [itemName, setItemName] = React.useState("");

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="center" sx={{display: 'flex', justifyContent: 'center', gap: "10px"}}>
                                    <IconButton aria-label="edit" onClick={()=> {
                                        onRowClick({
                                            id:1,
                                            name: "Product 1",
                                            description: "Product 1 description",
                                            price: 1000,
                                            qty: 10,
                                        })
                                    }}>
                                        <EditIcon />
                                    </IconButton>
                                <IconButton aria-label="delete" onClick={() => {
                                    setItemName("Product 1")
                                    setOpen(true);
                                }}>
                                    <DeleteIcon />
                                </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        <DeleteConfirmationDialog open={open} handleClose={() => {
            setOpen(false);
        }} itemName={itemName} />
        </>
    );
}
