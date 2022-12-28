import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallLoader from '../../../Shared/Loader/SmallLoader';
import MediaCard from '../../Media/MediaCard';

const Popular = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['popularPosts',],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_ApiUrl}popularPosts`)
            const data = await res.json()
            return data
        }
    })
    console.log(data);
    if (isLoading) {
        return <SmallLoader />
    }

    return (
        <section className='my-16'>

            <h1 className='text-center font-bold text-4xl pb-3'>Top Popular </h1>
            
            <div className='grid grid-cols-3 gap-3'>
                {
                    data.map(popular => <MediaCard key={popular?._id} post={popular} />)
                }
            </div>
        </section>
    );
};

export default Popular;