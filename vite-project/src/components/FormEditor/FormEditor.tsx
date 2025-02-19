import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

type Question = {
  id: number;
  type: "mcq" | "checkbox" | "short" | "file";
  text: string;
  options?: string[];
};

const FormEditor = () => {
  const [formTitle, setFormTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestionType, setNewQuestionType] = useState<
    "mcq" | "checkbox" | "short" | "file"
  >("mcq");

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now(),
      type: newQuestionType,
      text: "",
      options:
        newQuestionType === "mcq" || newQuestionType === "checkbox"
          ? [""]
          : undefined,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: number, updatedQuestion: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updatedQuestion } : q))
    );
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const reorderedQuestions = [...questions];
    const [movedQuestion] = reorderedQuestions.splice(draggedIndex, 1);
    reorderedQuestions.splice(index, 0, movedQuestion);

    setQuestions(reorderedQuestions);
    setDraggedIndex(index);
  };

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
      <Typography variant="h4" sx={{ color: "#4CAF50" }}>
        Create a New Form
      </Typography>
      <TextField
        label="Form Title"
        fullWidth
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        sx={{
          mb: 2,
          bgcolor: "#3C3C3C",
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
          },
          "& .MuiInputLabel-root": {
            color: "#FFFFFF",
          },
        }}
      />

      {questions.map((question, index) => (
        <Box
          key={question.id}
          draggable="true"
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => {
            e.preventDefault();
            handleDragOver(index);
          }}
          sx={{
            mb: 2,
            bgcolor: "#3C3C3C",
            p: 2,
            borderRadius: 4,
            cursor: "grab",
          }}
        >
          <Typography sx={{ color: "#FFFFFF" }}>
            Question {index + 1}
          </Typography>
          <TextField
            label="Question Text"
            fullWidth
            value={question.text}
            onChange={(e) =>
              updateQuestion(question.id, { text: e.target.value })
            }
            sx={{
              mb: 1,
              bgcolor: "#3C3C3C",
              "& .MuiInputBase-input": { color: "#FFFFFF" },
              "& .MuiInputLabel-root": { color: "#FFFFFF" },
            }}
          />
          {(question.type === "mcq" || question.type === "checkbox") && (
            <Box>
              {question.options?.map((option, optIndex) => (
                <Box key={optIndex} sx={{ display: "flex", mb: 1, gap: 1 }}>
                  <TextField
                    value={option}
                    onChange={(e) => {
                      const updatedOptions = [...(question.options || [])];
                      updatedOptions[optIndex] = e.target.value;
                      updateQuestion(question.id, { options: updatedOptions });
                    }}
                    sx={{
                      flex: 1,
                      bgcolor: "#3C3C3C",
                      "& .MuiInputBase-input": { color: "#FFFFFF" },
                    }}
                  />
                  <Button
                    onClick={() => {
                      const updatedOptions = [...(question.options || [])];
                      updatedOptions.splice(optIndex, 1);
                      updateQuestion(question.id, { options: updatedOptions });
                    }}
                    sx={{
                      color: "#4CAF50",
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
              <Button
                onClick={() => {
                  const updatedOptions = [...(question.options || []), ""];
                  updateQuestion(question.id, { options: updatedOptions });
                }}
                sx={{
                  color: "#4CAF50",
                }}
              >
                Add Option
              </Button>
            </Box>
          )}
          <Button
            color="error"
            onClick={() => removeQuestion(question.id)}
            sx={{
              color: "#4CAF50",
            }}
          >
            Remove Question
          </Button>
        </Box>
      ))}

      <Select
        value={newQuestionType}
        onChange={(e) => setNewQuestionType(e.target.value as any)}
        sx={{
          mb: 2,
          bgcolor: "#3C3C3C",
          color: "#FFFFFF",
          "& .MuiSelect-icon": { color: "#4CAF50" },
        }}
      >
        <MenuItem
          value="mcq"
          sx={{
            color: "#FFFFFF",
            bgcolor: "#2C2C2C",
            "&:hover": {
              bgcolor: "#292929",
            },
          }}
        >
          Multiple Choice
        </MenuItem>
        <MenuItem
          value="checkbox"
          sx={{
            color: "#FFFFFF",
            bgcolor: "#2C2C2C",
            "&:hover": {
              bgcolor: "#292929",
            },
          }}
        >
          Checkbox
        </MenuItem>
        <MenuItem
          value="short"
          sx={{
            color: "#FFFFFF",
            bgcolor: "#2C2C2C",
            "&:hover": {
              bgcolor: "#292929",
            },
          }}
        >
          Short Answer
        </MenuItem>
        <MenuItem
          value="file"
          sx={{
            color: "#FFFFFF",
            bgcolor: "#2C2C2C",
            "&:hover": {
              bgcolor: "#292929",
            },
          }}
        >
          File Upload
        </MenuItem>
      </Select>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          onClick={addQuestion}
          sx={{
            bgcolor: "#4CAF50",
            color: "#FFFFFF",
            "&:hover": {
              bgcolor: "#388E3C",
            },
          }}
        >
          Add Question
        </Button>

        <Button
          type="button"
          variant="contained"
          sx={{
            bgcolor: "#4CAF50",
            color: "#FFFFFF",
            "&:hover": {
              bgcolor: "#388E3C",
            },
          }}
          onClick={() => alert("Form saved!")}
        >
          Save Form
        </Button>
      </Box>
    </Box>
  );
};

export default FormEditor;
