import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom'
import Spinner from './components/shared/Spinner/Spinner';
import routes from './routes/Routes/Routes';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>

      {isLoading

        ? <div>
          <Spinner />
        </div>

        : <RouterProvider router={routes}></RouterProvider>

      }

    </>
  )
}

export default App;
