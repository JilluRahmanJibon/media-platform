import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className="py-6 ">
                <div className="container grid gap-6 mx-auto dark:text-gray-50 text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                        <span className="block mb-2 dark:text-primary">Own Media design system</span>
                        <h1 className="md:text-5xl text-3xl font-extrabold">Build it with Media Platform</h1>
                        <p className="my-8">
                            <span className="font-medium ">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
                        </p>
                        <Link to='/postForm'>
                            <button type="button" className="w-full py-2 font-semibold rounded dark:bg-primary dark:text-gray-900">Post Now</button>
                        </Link>
                    </div>
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default Banner;