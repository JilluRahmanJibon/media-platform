import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SmallLoader from '../../Shared/Loader/SmallLoader';
import MediaCard from './MediaCard';

const MyPosts = () => {
    const { user } = useContext(AuthContext)
    const { data: posts, isLoading } = useQuery({
        queryKey: ['myPosts', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}myPosts?email=${user?.email}`).then(res => res.json())
    })
    if (isLoading) {
        return <SmallLoader />
    }
    return (
        <div>
            <div className='grid sm:w-96 mx-auto  gap-2 mt-5'>
                {posts.map(post => <MediaCard key={post?._id} post={post}   />)}
            </div>
        </div>
    );
};

export default MyPosts;