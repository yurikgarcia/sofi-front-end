import "./App.css";
import SearchAppBar from "./components/SearchAppBar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Houses from "./components/Houses.js";
import Characters from "./components/Characters.js";
import Tree from "./components/Tree.js";
import Battle from "./components/Battle.js";
import Orders from "./components/Orders.js";
import fetch from "cross-fetch";
import { useState, useEffect } from "react";

function App() {
  const [searchString, setSearchString] = useState('');
  const [houseData, setHouseData] = useState([]);
  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

  // const url = "https://thronesapi.com/api/v2/Characters";
  const url = "http://localhost:3001/GOT/characters";
  const [gotData, setGotData] = useState([]);

  useEffect(() => {
    const getApi = async (url) => {
      const response = await fetch(url, {mode: 'no-cors'});
      //possible to destructure json data for specific field (e.g. URI field) with {fieldname}
      const apiData = await response.json();
      setGotData(apiData);
    };
    getApi(url);
  }, []);

  useEffect(() => {
    console.log("Search string: ", searchString);
    console.log("Characters: ", gotData.characters);
    // let cardFile = gotData.characters.filter(elem => elem.name === searchString);
    // setHouseData(cardFile);
    // window.location.replace("http://localhost:3000/houses");

  },[searchString])

  return (
    <div>

          <header>
            <SearchAppBar handleSearch={handleSearch} />
          </header>


          <body>

            <Switch>
              <Route path="/characters" exact component={Characters}/>
              <Route path="/houses" render={() => <Houses houseData={houseData} />} />
              <Route path="/orders" exact component={Orders}/>
              <Route path="/tree" exact component={Tree}/>
              <Route path="/battle" exact component={Battle}/>
            </Switch>

          </body>

    </div>
  );
}

export default App;
