import "./App.css";
import SearchAppBar from "./components/SearchAppBar.js";
import { Switch, Route } from "react-router-dom";
import Houses from "./components/Houses.js";
import Characters from "./components/Characters.js";
import Tree from "./components/Tree.js";
import Battle from "./components/Battle.js";
import Orders from "./components/Orders.js";
import OrdersDetails from "./components/OrdersDetails.js";
import HousesDetails from "./components/HousesDetails.js";
import Home from "./components/Home.js";
import {ThemeProvider} from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import {lime } from '@mui/material/colors';
import fetch from "cross-fetch";
import { useState, useEffect } from "react";
import Sound from 'react-sound';


function App() {
  const [searchString, setSearchString] = useState();
  const [charData, setCharData] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [relatData, setRelatData] = useState([]);
  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

 // const url = "https://thronesapi.com/api/v2/Characters";
 const url = "http://localhost:3001/GOT/characters";
 const [gotData, setGotData] = useState({
   characters: [],
   houses: [],
   relationships: [],
 });

  useEffect(() => {
    const getApi = async (url) => {
      const response = await fetch(url, { mode: "no-cors" });
      //possible to destructure json data for specific field (e.g. URI field) with {fieldname}
      const apiData = await response.json();
      setGotData(apiData);
    };
    getApi(url);
  }, []);

  useEffect(() => {
    if (searchString) {
      let charSearchArr = gotData.characters.filter((elem) =>
        elem.name.includes(searchString)
      );
      let houseSearchArr = gotData.houses.filter((elem) =>
        elem.house.includes(searchString)
      );
      // let relatSearchArr = gotData.relationships.filter(elem => elem.name.includes(searchString));
      setCharData(charSearchArr);
      setHouseData(houseSearchArr);
      // setRelatData(relatSearchArr);
      // window.location.replace("http://localhost:3000/houses");
    }
  }, [searchString]);

  const customTheme = createTheme ({
    palette: {
      primary: {
        main: '#263238',
        // #0e0e11
      },
      secondary: {
        main: lime[500],
      },
    },
    typography:{
      fontFamily: [
        'Cinzel',
      ]
    }

    // const PlaySound = {
    //   handleSongLoading,
    //   handleSongPlaying,
    //   handleSongFinishedPlaying,
    // }
      

    // }
  });

  // font-family: 'Cinzel',cursive;



  return (

  <ThemeProvider theme = {customTheme}> 
    <div>

          <header>
            <SearchAppBar  handleSearch={handleSearch} />
          </header>


          <body>

            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/characters" render={() => <Characters match={charData} />} />
          <Route
            path="/houses"
            render={() => <Houses match={houseData} />}
          />
              <Route path="/characters" exact component={Characters}/>
              <Route path="/houses/:name" exact component={HousesDetails}/>
              <Route path="/houses" exact component={Houses}/>
              <Route path="/orders" exact component={Orders}/>
              <Route path="/orders/:name" exact component={OrdersDetails}/>
              <Route path="/tree" exact component={Tree}/>
              <Route path="/battle" exact component={Battle}/>
            </Switch>

          </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
