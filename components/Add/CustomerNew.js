import {React,useState} from 'react'
import {Grid,Typography,Box,Button,Stack,Select,MenuItem,FormControl,InputLabel,Switch,FormControlLabel,TextField,Avatar,Divider,Alert,Snackbar,Paper,CircularProgress,Drawer} from '@mui/material';


export default function CustomerNew() {
  //Common States For All
  const [message, setMessage] = useState('This is a success alert — check it out!');
  const [alertShow, setAlertShow] = useState(true);
  const [alertColor, setaAertColor] = useState('error');


//Common Functions For All
 const snackClose=()=>{
  setAlertShow(false);
 } 
 const formHandler=(e)=>{
  e.preventDefault();
  console.log('submit');

 }

 const resetForm=()=>{
  console.log('reset');
 }



  return (
      <Grid container sx={{'px':'5%','textAlign':'center!important','display':'block','my':'2%','fontFamily':'Playfair Display!important'}} >
      <Typography align={'center'} variant={'h5'} sx={{'marginBottom':'5%'}}>Add New Customer</Typography>
     <Box component='form' onSubmit={formHandler} >
     <Grid container spacing={2} direction="row">
      <Grid item md={4} xs={12}>
      <TextField label="Full Name"  type="text" required fullWidth  InputLabelProps={{ shrink: true}}  />
      </Grid>
      <Grid item md={4} xs={12}>
      <TextField label="Email Id"  type="email" required fullWidth  InputLabelProps={{ shrink: true}}  />
      </Grid>

      <Grid item md={4} xs={12}>
      <TextField label="Phone No"  type="number" required fullWidth  InputLabelProps={{ shrink: true}}  />
      </Grid>
      <Grid item md={4} xs={12}>
      <TextField label="Referel Code"  type="text"  fullWidth  InputLabelProps={{ shrink: true}}  />
      </Grid>

      <Grid item md={4} xs={12}>
      <FormControl fullWidth>
        <InputLabel id="gender">Gender</InputLabel>
        <Select label="Gender"  labelId="gender">
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
          <MenuItem value={3}>Others</MenuItem>
        </Select>
      </FormControl>
      </Grid >
      <Grid item md={4} xs={12}>
      <Button  variant="outlined"  component="label" sx={{'my':'2%'}}>
  Upload Image
  <input type="file"  hidden accept="image/png, image/gif, image/jpeg" />
</Button>
      </Grid>

      <Grid item md={4} xs={12} >
      <Stack direction="row" spacing={4} sx={{'py':'3%','px':'4%'}}>
      <Button variant="outlined" type={'submit'} color="success">Save</Button>
      <Button variant="outlined" color="error" onClick={resetForm}>Cancel</Button>
     </Stack>
      </Grid>
    </Grid>
     </Box>

      <Snackbar open={alertShow}
        autoHideDuration={2000} onClose={snackClose}>
      <Alert severity={alertColor}>{message}</Alert>
      </Snackbar>

    </Grid>
  )
}