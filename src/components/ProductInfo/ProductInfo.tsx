import "./index.css";
import { Grid, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React from "react";

/**
 * Component with Product information
 * @returns {Component<Props>}
 */
const ProductInfo = () => {
  const [sku, setSku] = React.useState('');

  const handleChange = (event: any) => {
    setSku(event.target.value);
  };

  return (
    <div className="productInfo">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage" >
            <img src="https://dummyimage.com/500x500/000/0011ff" />
          </Paper>
        </Grid>

        <Grid item lg={8} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              Levi's 501 Original Fit Jeans Jeans para Hombre
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>
              100% algodón, Cierre de Cremallera, Lavar a máquina, Jeans corte ajustado, Pierna ajustada, Stretch especial que te brinda mayor movilidad
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">
              1027.24
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">
              706.93
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Color and Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sku}
                label="Color and Size"
                onChange={handleChange}
              >
                <MenuItem value={"Black 29W X 32L"}>Black 29W X 32L</MenuItem>
                <MenuItem value={"Dark Stonewash 29W X 32L"}>Dark Stonewash 29W X 32L</MenuItem>
              </Select>
            </FormControl>

          </Grid>

          <Grid item lg={12} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductInfo;