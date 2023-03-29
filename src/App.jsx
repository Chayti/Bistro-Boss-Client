import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom'
import Spinner from './components/shared/Spinner/Spinner';
import routes from './routes/Routes/routes'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <>

      {isLoading

        ? <div>
          <Spinner />
          <h3 className="text1 text-animation text-center text-6xl bg-white normal-case">Welcome to <br />Culinary Cloud Restaurant</h3>
        </div>

        : <RouterProvider router={routes}></RouterProvider>

      }

    </>
  )
}

export default App;
