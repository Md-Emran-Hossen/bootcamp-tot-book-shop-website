// import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-yellow-500 mt-10 pt-10"> Please! Feel free to <span className="font-bold text-green-600">Contact Us </span></h2>
            <div className="bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card w-full max-w-sm shadow-xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Subject</span>
                                </label>
                                <textarea type="text" placeholder="subject" className="input input-bordered h-16" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;