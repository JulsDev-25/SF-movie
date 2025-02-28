import React, { useEffect, useState } from 'react';
import Carte from './components/Carte';
import "./Style.css"
import { Grid2 as Grid, Input } from '@mui/material';
import dataInfo from "./assets/data.json"

const App = () => {

  const [data, setData] = useState(dataInfo)
  const [word, setWord] = useState("")

  useEffect(() => {
    if (word.trim() !== "") {
      const resultSearch = dataInfo.filter(el => 
        el.locations.toLocaleLowerCase().includes(word.toLowerCase().trim())
      )
      setData(resultSearch)
    }else{
      setData(dataInfo)
    }
  }, [word])

  return (
    <div className='App'>
      <Grid
        container
        width={"50%"}
      >
        <Grid size={12} sx={{ padding: "20px" }}>
          <h1>SF-MOVIE</h1>
          <Input placeholder='Search' value={word} onChange={(e) => setWord(e.target.value)} />
          <Grid sx={{ margin: "20px 30px", height: "300px", overflow: "scroll" }}>
            {
              word.trim() && data.map((el, index) => (
                <p key={index} style={{ margin: "10px 0" }}> {el.locations} </p>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      <Carte moviesmap={data}/>
    </div>
  );
}

export default App;
