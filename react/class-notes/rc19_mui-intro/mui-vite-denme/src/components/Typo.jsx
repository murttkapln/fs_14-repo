import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"



const Typo = () => {
  return (
   <Container maxWidth="md">
     <Box sx={{padding: "1rem", display:"flex", flexDirection:"column",gap: "1rem", border: "5px solid black"}}>
{/* //* h5 görünümlü h1 elementi */}
        <Typography variant="h5" component="h1" color="lightcoral">MUI Typo</Typography>
        <Typography variant="subtitle2"  color="palegreen">MUI Typo</Typography>
        {/* span */}
        <Typography variant="button">ButtonText</Typography>
        {/* // p */}
        <Typography sx={{color:"blue", backgroundColor:"palevioletred", mt:"1rem"}} variant="body2"
        align="center">Button Text</Typography>
        
    </Box>
    <Stack direction="row" spacing={1} mt={3} justifyContent="center" alignItems="center">
      <Button variant="outlined" color="success">Click</Button>
    <Button variant="contained" color="warning">Click</Button>
    <Button variant="contained" color="error">Click</Button>
    <Button variant="contained" color="secondary">Click</Button>
    <Button variant="contained" color="primary">Click</Button>
    <Button variant="contained" sx={{color:"purple", backgroundColor:"yellow"}}>Click</Button>
    <Button variant="contained" sx={{color:"primary.main", backgroundColor:"secondary.light"}}>Click</Button>
    </Stack>
   </Container>
  )
}

export default Typo