
import { Link, useRouteError } from 'react-router-dom';

import { ROUTES } from '../routes';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="w-3/4 mx-auto border-solid 1px bg-base-300 text-center mt-10 p-5 rounded">
            <h2 className="font-bold text-red-600"> Opps!!! </h2>
            <p>{error.statusText || error.message}</p>{
                error.status == 404 && (<div>
                    <h3> <span className="font-bold text-red-600"> Page not found </span> </h3>
                    <p>Go back where you from</p>
                    <div className="mt-5">
                        <Link to={ROUTES.HOME}><button className="btn btn-active m-3 p-3 text-xl font-bold">Home</button></Link>
                    </div>
                </div>
                )}
        </div>
    );

};
export default ErrorPage;