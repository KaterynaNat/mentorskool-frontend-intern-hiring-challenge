import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { useQuery } from "@tanstack/react-query";

const fetchForms = async () => {
  const { data, error } = await supabase.from("forms").select("*");
  if (error) throw new Error(error.message);
  return data;
};

const FormList = () => {
  const {
    data: forms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["forms"],
    queryFn: fetchForms,
  });

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        backgroundColor: "#2C2C2C",
        p: 3,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" sx={{ color: "#4CAF50", mb: 2 }}>
        Your Forms
      </Typography>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error.message}</Typography>}
      <List>
        {forms?.map((form) => (
          <ListItem
            key={form.id}
            component={Link}
            to={`/forms/${form.id}`}
            sx={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary={form.title} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{ mt: 2, bgcolor: "#4CAF50", color: "#ffffff" }}
        component={Link}
        to="/forms/new"
      >
        Create New Form
      </Button>
    </Box>
  );
};

export default FormList;
