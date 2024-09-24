import React from 'react'
import { useState, useEffect } from 'react';
import image from '../../public/images/bookstore.jpg'


export default function BannerDynamic() {

    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBook(data));

    })

    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 rounded p-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <diV className="w-1/2">
                        <img
                            src={image}
                            className="rounded-lg shadow-2xl"
                        />
                    </diV>

                    <div className="w-1/2">
                        <h1 className="font-bold text-justify">
                            Unlock a world of Stories- Find Your Next Favorite Book at &nbsp;
                            <span className="font-bold text-green-600">BOOK SHOP</span>
                        </h1>
                        <button className="btn btn-active text-xl m-5">Buy Book</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
