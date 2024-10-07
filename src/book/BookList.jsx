/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
// import Footer from "../shared/Footer";
import Banner from "../shared/Banner";
import HowItWorks from "../shared/HowItWorks";

const BookList = () => {

    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch('https://bootcamp-the-breaking-news-server-ten.vercel.app/books')
            .then(res => res.json())
            .then(data => setBook(data));
    })

    return (
        <>
            
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            {/* <p className="text-3xl font-extrabold text-center text-yellow-600 m-5 p-5"> BOOK LIST</p> */}
            <div className="text-4xl font-extrabold text-center text-yellow-500 bg-base-200 p-5"> <h2>Total Books: {books.length}</h2> </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">

                {books.map((book) => {
                    return (
                        <section className="card transition duration-300 ease-in-out hover:scale-110">

                            <div className="card bg-base-100 shadow-xl m-3 p-5">
                                <figure>
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="w-56 rounded h-36" />
                                </figure>
                                <div className="card-body text-center">
                                    <p> <span className="font-bold">Book Name:</span> {book.bookName}</p>
                                    <p><span className="font-bold"> Tags: </span> {book.tags[0]} </p>
                                    <p><span className="font-bold"> Author:  </span> {book.author} </p>
                                    <p><span className="font-bold">Category: </span> {book.category} </p>
                                    <p><span className="font-bold">Rating: </span> {book.rating} </p>

                                    <div className="m-5">
                                        <Link to={`/book/${book.bookId}`}
                                            className="hover:text-orange-500 text-xl font-bold bg-orange-100 cursor-pointer rounded p-3">
                                            Book Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}

            </div>
            {/* <Footer></Footer> */}
        </>
    )
}
export default BookList;