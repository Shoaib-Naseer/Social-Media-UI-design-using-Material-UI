import { Avatar, Button, ButtonGroup, Fab,Modal,TextField,Tooltip, Typography } from '@mui/material'
import React from 'react';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { Box, Stack } from '@mui/system';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const [open,setOpen] = useState(false)
  return (
   <>
    <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom: 20, left: {xs:"calc(50% -25px)",md:30}}}>
        <Fab color='primary' aria-label='Add'>
            <AddIcon />
        </Fab>
    </Tooltip>
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box 
  width={400} height={300} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
   <Typography variant='h6' color='gray' textAlign="center"> Create Post </Typography>
   <UserBox>
   <Avatar  alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Typography fontWeight={500} variant="span">
        John Doe
    </Typography>
    </UserBox> 

    <TextField
         sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
    <Stack direction="row" mt={2} mb={3} gap={1}>
        <EmojiEmotions color='primary'/>
        <Image color='secondary' />
        <VideoCameraBack color='success' />
        <PersonAdd color="error" />
    </Stack>
    <ButtonGroup 
    fullWidth
    variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange /></Button>
</ButtonGroup>

  
  </Box>
</StyledModal>
   </>
  )
}

export default Add