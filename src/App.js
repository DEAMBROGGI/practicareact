import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/AppBar';
import CardRyM from './components/Cards';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Carrousel from './components/carrousel';
import "swiper/css/bundle";

function App() {
  const [dataApi, setDataApi] = useState()

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => setDataApi(response.data.results))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Carrousel dataApi={dataApi} test="Prop de test"/>
      <Grid container xs={12} spacing={2} marginY={2} sx={{ display: "flex", justifyContent: "center" }}>
        {dataApi && dataApi.map(item =>
          <Grid item md={6} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
            <CardRyM item={item} key={item.id} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
