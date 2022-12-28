import React, { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaCommentDots, FaShareSquare } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import CommentsBox from './CommentsBox';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const MediaCard = ({ post, refetch }) => {
    const { user } = useContext(AuthContext)
    const [openComment, setOpenComment] = useState(false);
    const [comment, setComment] = useState(null);
    const [countLove, setCountLove] = useState(post?.loveReact > 1 ? post?.loveReact : 0 + 1);
    const handleLoveReact = (e) => {
        setCountLove(() => countLove + 1)

        fetch(`${process.env.REACT_APP_ApiUrl}posts?id=${e}`, {
            method: 'PUT', headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify({ countLove })
        }).then(res => res.json()).then(result => {
            console.log(result);
            refetch()
        })
    }
    return (
        <section >
            <div className=" bg-white shadow-lg rounded-lg ">
                <div className=" sm:px-4 px-2 py-6">
                    <div className='flex sm:justify-between border-b pb-2 flex-wrap pr-2'>
                        <div className='flex items-center '>
                            <img alt='' className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={post?.userPhoto} />
                            <div className="">
                                <h2 className="sm:text-lg font-semibold text-gray-900 -mt-1"><Link>{post?.userName}</Link> </h2>
                                <p className="text-gray-700">Joined 12 SEP 2012. </p>
                            </div>
                        </div>
                        <small className="text-sm text-center sm:pl-0 pl-5 text-gray-700" title='submit date'>{post?.postDate}</small>
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
                            <div onClick={() => handleLoveReact(post?._id)} className="flex cursor-pointer text-gray-700 text-sm mr-3">
                                <AiOutlineHeart className='mr-1 text-lg ' />

                                <span>{post?.loveReact}</span>
                            </div>
                            <div onClick={() => setOpenComment(!openComment)} className="flex  cursor-pointer text-gray-700 text-sm mr-8">
                                <FaCommentDots className='mr-1 text-lg' />
                                <span>8</span>
                            </div>
                            <div className="flex   text-gray-700 text-sm mr-4">
                                <FaShareSquare className='mr-1 text-lg ' />
                                <span>share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openComment && <>
                <CommentsBox post={post} comment={comment} user={user} setComment={setComment} />
            </>}
        </section>
    );
};

export default MediaCard;