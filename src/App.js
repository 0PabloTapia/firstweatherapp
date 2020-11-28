import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';


function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
});

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error,setError] = useState(false)

  const { city, country } = search;
  

  useEffect(() => {
    const APIcall = async () => {
      if(query) {
        const appID = '81e8950af826f298852cce672de09616';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
  
        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setQuery(false);

        if(result.cod === "404") {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    APIcall();
  },[query])

  let component;
  if(error) {
    component = <Error message="No results" />
  } else {
    component = <Weather result={result} />
  }

  return (
    <Fragment>
      <Header title='weather app' />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Form 
                  search={search}
                  setSearch={setSearch}
                  setQuery={setQuery}
                />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
