import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

const TextFieldComp = () => {
  return (
    <Container sx={{ mt: 4 }} maxWidth="md">
      <TextField
        id="wmail"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        required
      />
      <TextField id="password" label="Password" variant="filled" placeholder="Enter your password"
        required />
      <TextField id="name" label="Name" variant="standard" placeholder="Enter your name"
        required />
    </Container>
  );
};

export default TextFieldComp;
