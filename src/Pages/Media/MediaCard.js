import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MediaCard = ({  post }) => {
    return (
        <section > 
            <div className=" bg-white shadow-lg rounded-lg ">
                <div className=" sm:px-4 px-2 py-6">
                    <div className='flex sm:justify-between border-b pb-2 flex-wrap pr-2'>
                        <div className='flex items-center '>
                            <img alt='' className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={post?.userPhoto} />
                            <div className="">
                                <h2 className="sm:text-lg font-semibold text-gray-900 -mt-1">{post?.userName } </h2>
                                <p className="text-gray-700">Joined 12 SEP 2012. </p>
                            </div>
                        </div>
                    <small className="text-sm text-center sm:pl-0 pl-5 text-gray-700">22h ago</small>
                   </div>
                    <div className="">

                        <p className="mt-3 text-gray-700 text-sm pb-4">
                            {post?.message?.length > 60 ? <>{post?.message.slice(0, 160)} <button className='border-b text-primary font-bold'>See more </button></> : post?.message}
                        </p>
                        <div className='mb-5 flex justify-center'>
                            <PhotoProvider>
                                <PhotoView src={post?.picture}>
                                    <img className='max-h-[300px]' src={post?.picture} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="flex text-gray-700 text-sm mr-3">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>12</span>
                            </div>
                            <div className="flex mr-2 text-gray-700 text-sm mr-8">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                                <span>8</span>
                            </div>
                            <div className="flex mr-2 text-gray-700 text-sm mr-4">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <span>share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaCard;