import { useForm, FieldError } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { supabase } from "../../supabaseClient";

type FormData = {
  email: string;
  password: string;
};

const Authentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleSignUp = async (data: FormData) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    if (error) alert(error.message);
    else alert("Check your email for confirmation link!");
  };

  const handleSignIn = async (data: FormData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) alert(error.message);
    else alert("Successfully logged in!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4">Sign In / Sign Up</Typography>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <TextField
          label="Email"
          fullWidth
          {...register("email", { required: "Email is required" })}
          InputLabelProps={{ style: { color: "#fff" } }}
          sx={{ mb: 2 }}
        />
        {errors.email && (
          <Typography color="error">
            {(errors.email as FieldError).message}
          </Typography>
        )}
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register("password", { required: "Password is required" })}
          InputLabelProps={{ style: { color: "#fff" } }}
          sx={{ mb: 2 }}
        />
        {errors.password && (
          <Typography color="error">
            {(errors.password as FieldError).message}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: "#4CAF50", color: "#fff" }}
          fullWidth
        >
          Sign In
        </Button>
      </form>
      <Button
        variant="outlined"
        sx={{
          color: "#4CAF50",
          borderColor: "#4CAF50",
          mt: 1,
        }}
        fullWidth
        onClick={handleSubmit(handleSignUp)}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Authentication;
