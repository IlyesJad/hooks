import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Rating, TextField } from "@mui/material";
import { blue } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Add({movies, setMovies}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addRating, setAddRating] = useState(0);

    const [addTitle, setAddTitle] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [addPoster, setAddPoster] = useState("");
    
    const AddMovieFunction = (e) =>{
        e.preventDefault();
        setMovies([
            ...movies,
            {
                title: addTitle,
                description: addDescription,
                posterURL: addPoster,
                rating: addRating,
            },
        ]);
        handleClose();
    };

  return (
    <div>
      <Button onClick={handleOpen}>Add New Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Movie
          </Typography>
          <TextField
            name="title"
            label="Movie Title"
            variant="outlined"
            onChange={(e) => setAddTitle(e.target.value)}
            sx={{ margin: "1rem 0 0.5rem" }}
            fullWidth/>
            <TextField
            name="description"
            label="Movie Description"
            variant="outlined"
            onChange={(e) => setAddDescription(e.target.value)}
            sx={{ margin: "1rem 0 0.5rem" }}
            fullWidth/>
          <TextField
            name="poster"
            label="Movie Poster URL"
            variant="outlined"
            onChange={(e) => setAddPoster(e.target.value)}
            sx={{ margin: "1rem 0 0.5rem" }}
            fullWidth/>
             <Rating
            value={addRating}
            onChange={(event, newValue) => {
              setAddRating(newValue);
            }}
            
            /> 
            <Button
            className="modal-button-cancel"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="modal-button-add"
            variant="primary"
            onClick={AddMovieFunction}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}