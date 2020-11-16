import React, { useEffect, useState } from 'react';
import Feature from './Components/feature';
import { Cat } from './Models/cat';

const App: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]); 

  const getCats = async (): Promise<Cat[]> => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=100');
      const json = await response.json() as Cat[];
      const cats = await json.filter(cat => cat.breeds.length > 0).slice(0, 3);
      return cats;
  };

  useEffect(() => {
    const getMoarCats = async () => {
      const data = await getCats();
      setCats(data);
    };

    getMoarCats();
  }, []);

  return (
    <>
      <div className='container'>

        <div className='mt-5'>
          <div className="jumbotron">
            <h1 className="display-4">Cat Facts</h1>
            <p className="lead">Get ur cat facts... refresh for more facts!</p>
          </div>
        </div>

        <div className='p-4'>
          <p>Cat cat cat cat cat cat no dogs</p>
        </div>

        <div className='row'>
          { cats.map((kitty) => {
            return <> 
              <div className='col-md-4'>
                <Feature cat={kitty} key={kitty.id}></Feature>
              </div>
            </>
          })}
        </div>

        <div className='d-flex justify-content-center m-2'>
          <a href="https://www.github.com/tamusall" target="_blank">
            <button className='btn btn-primary'>My Stuff</button>
          </a>
        </div>

        <div>
          <div className='alert alert-secondary' role='alert'>
            This page is made with bootstrap 5 and was challenge 1 on 50 React Projects
          </div>
        </div>

      </div>
    </>
  );
};

export default App;
