import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


function SearchFood({openDialog,setOpenDialog}) {

  const [food,setFood] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleFoodChange = (e) => {
    setFood(e.target.value)
  }

  const handleFoodSearch = () => {
    setIsSearching(true)
  }

  useEffect(()=>{
    let searchTerm = food.replaceAll(' ', '+')
   
    async function searchFoodApi(){
      const response = await fetch(`https://de.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&action=process&json=true`)
      const data = await response.json()
      console.log(data.products)
    }

    if(isSearching){
      searchFoodApi()
    }

    setIsSearching(false)
  },[isSearching])

  return (
    <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
        <DialogTitle>Search for food</DialogTitle>
        <DialogContent>          
          <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search your food"
              inputProps={{ 'aria-label': 'search food' }}
              value={food}
              onKeyDown={(e)=>{
                if(e.key == 'Enter'){
                  handleFoodSearch()
                }
              }}
              onChange={(e)=>handleFoodChange(e)}
            />
            <IconButton  sx={{ p: '10px' }} aria-label="search" onClick={handleFoodSearch}>
              <SearchIcon />
            </IconButton>
          </Paper>

        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
  )
}

export default SearchFood