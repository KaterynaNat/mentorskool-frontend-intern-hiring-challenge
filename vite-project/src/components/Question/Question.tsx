import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Question = () => {
  const [questionText, setQuestionText] = useState("");

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h6">Add a Question</Typography>
      <TextField
        label="Question"
        fullWidth
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
      />
      <Button variant="contained" color="primary">
        Add Question
      </Button>
    </Box>
  );
};

export default Question;
