import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import { ROUTES } from '../routes';

export default function ErrorPage() {
    const error = useRouteError();
    // x2 ErrorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: no route matches' }
   // console.log(error); 

  return (
    <div>
        <h2> Oops!!!</h2>
        <p {...error.statusText || error.message}></p>{
            error.status === 404 && <div>
                <h3> Page not found </h3>
                <p>Go back where you from</p>
                <link to = {ROUTES.HOME}><button>Home</button></link>
            </div>
        }
    </div>
  )
}
