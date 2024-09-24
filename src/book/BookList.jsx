import { ROUTES } from "../routes";
import { useEffect, useState } from "react";
import BookDetails from "./BookDetails";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function BookList() {

    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBook(data));

    })

    return (

        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">

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
                            <div className="card-body ml-7">
                                <p> <span className="font-bold">Book Name:</span> {book.bookName}</p>
                                <p><span className="font-bold"> Tags: </span> {book.tags[0]} </p>
                                <p><span className="font-bold"> Author:  </span> {book.author} </p>
                                <p><span className="font-bold">Category: </span> {book.category} </p>
                                <p><span className="font-bold">Rating: </span> {book.rating} </p>
                                <div class="card-actions">
                                    <Link to={ROUTES.SINGLE_BOOKS.DYNAMIC(book.bookId)}
                                        state={{ myObj: book }}
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
    )
}
