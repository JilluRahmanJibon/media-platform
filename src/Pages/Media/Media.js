import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {   NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SmallLoader from '../../Shared/Loader/SmallLoader';
import MediaCard from './MediaCard';

const Media = () => {
    const { user } = useContext(AuthContext)
    const { data: posts, isLoading,refetch } = useQuery({
        queryKey: ['posts',],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}posts`).then(res => res.json())
    })
    if (isLoading) {
        return <SmallLoader />
    }

    return (
        <section className='flex '>
            {user?.email && <div className='lg:w-[150px] sticky sm:block hidden h-full top-28'>
                <NavLink to={`/media/myPosts`} className='block font-semibold'>
                    My Posts
                </NavLink>
            </div>}
            <div className='grid sm:w-96 mx-auto  gap-5 mt-5'>
                {posts.map(post => <MediaCard refetch={refetch} key={post?._id} post={post} />)}
           </div>
        </section>
    );
};

export default Media;