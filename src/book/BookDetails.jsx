import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookDetails(myObj) {

  const { state } = useLocation();

  
  const notifyWishList = (name) => {
    
    toast.info("Book Name:- "+ '"' + name + '"' + ", Successfully added to the Cart/Wishlist");
   };

  return (
    <>
      <div className="hero w-5/6 mx-auto m-3 p-3">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`${state.myObj.image}`} alt={state.myObj.image}
            className="max-w-sm rounded-lg shadow-2xl h-56 lg:h-96 w-56 lg:w-96" 
          />
          <div>
            <p className="text-xl">
              <span className="font-bold">Book Name: </span>
              {state.myObj.bookName}
            </p>
            <p className="text-xl">
              <span className="font-bold">Author: </span>
              {state.myObj.author}
            </p>
            <p className="text-xl">
              <span className="font-bold">Category: </span>
              {state.myObj.category}
            </p>
            <p className="text-xl">
              <span className="font-bold">Review: </span>
              {state.myObj.review}
            </p>
            <p className="text-xl">
              <span className="font-bold">Tags: </span>
              {state.myObj.tags[0]}
            </p>
            <p className="text-xl">
              <span className="font-bold">Total Page:</span>
              {state.myObj.totalPages}
            </p>
            <p className="text-xl">
              <span className="font-bold">Publisher: </span>
              {state.myObj.publisher}
            </p>
            <p className="text-xl">
              <span className="font-bold">Year of Publishing: </span>
              {state.myObj.yearOfPublishing}
            </p>
            <p className="text-xl">
              <span className="font-bold">Rating: </span>
              {state.myObj.rating}
            </p>

            <div>
              <button onClick={() => notifyWishList(state.myObj.bookName)} className="btn btn-active mt-3 mr-2 p-3"> Wish to Read </button>
             
              <button onClick={() => notifyWishList(state.myObj.bookName)} className="btn btn-active mt-3 mr-2 p-3"> Add to Cart </button>
              <ToastContainer position="bottom-right"/>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

