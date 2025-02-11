// import React from 'react';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { bgcolor, height, width } from '@mui/system';
import { Button } from '@mui/material';
import SearchSection from 'layout/MainLayout/Header/SearchSection';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import FormSection from './FormSection';
import { Key } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  isOverflown: 'scroll'
};


const addToCart = () => {
  const [product, setProduct] = React.useState();
  const [products, setProducts] = React.useState();
  const [srch, setSrch] = React.useState(1);

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => setProduct(res.products));
    setProducts(product)
  }, []);
  React.useEffect(() => {
    const filtered = product?.filter((product) => product.title.toLowerCase().includes(srch));
    setProducts(filtered);
  }, [srch]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Name', width: 230 },
    { headerName: '($) Dis-Price', type: 'number', width: 110, valueGetter: (value, row) => `${row.price || ''}` - (`${row.discountPercentage || ''}` / 100) },
    { field: 'price', headerName: '($) Price', type: 'number', width: 110, },
    { field: `discountPercentage`, headerName: '(%) Discount Percentage ', type: 'number', width: 110, },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'stock', headerName: 'Stock', type: 'number', width: 90, },
    { field: 'warrantyInformation', headerName: 'Warranty Information', width: 180, },
    { field: 'shippingInformation', headerName: 'Shipping Information', width: 200, },
    { field: 'availabilityStatus', headerName: 'Availability Status', width: 110, },
  ];

  // const rows = [
  //   { id: 1, title: 'Snow', category: 'Jon', stock: 35 },
  //   { id: 2, title: 'Lannister', category: 'Cersei', stock: 42 },
  //   { id: 3, title: 'Lannister', category: 'Jaime', stock: 45 },
  //   { id: 4, title: 'Stark', category: 'Arya', stock: 16 },
  //   { id: 5, title: 'Targaryen', category: 'Daenerys', stock: null },
  //   { id: 6, title: 'Melisandre', category: null, stock: 150 },
  //   { id: 7, title: 'Clifford', category: 'Ferrara', stock: 44 },
  //   { id: 8, title: 'Frances', category: 'Rossini', stock: 36 },
  //   { id: 9, title: 'Roxie', category: 'Harvey', stock: 80 },
  // ];
  const paginationModel = { pstock: 0, pstockSize: 5 };


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'end', margin: '10px', alignItems: "center" }}>
        <SearchSection value={{ srch, setSrch }} />
        <div style={{ margin: '10px' }}>
          <Button onClick={handleOpen}>add product</Button>
        </div>
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            ADD PRODUCT
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <div style={{ bgcolor: 'black', overflow: 'scroll', height: '50%' }}>
              <FormSection />
            </div>
          </Typography>
        </Box>
      </Modal>
      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pstockSizeOptions={[50, 100]}
          checkboxSelection
          sx={{ border: 0 }}
          style={{ fontSize: 'large', fontWeight: '400' }}

        />
      </Paper>

    </div>
  )
}

export default addToCart
