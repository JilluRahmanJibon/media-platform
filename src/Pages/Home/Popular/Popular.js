import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallLoader from '../../../Shared/Loader/SmallLoader';
import MediaCard from '../../Media/MediaCard';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Popular = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['popularPosts',],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_ApiUrl}popularPosts`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <SmallLoader />
    }
    
    return (
        <section className='my-16'>

            <div className='flex justify-between items-center pr-2 '>
                <h1 className='text-center font-bold text-4xl pb-3'>Top Popular </h1>
                <p ><Link to='/media' className='flex items-center gap-2 bg-primary font-semibold py-2 px-3 ' >View All<BsBoxArrowInUpRight /></Link> </p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    data.map(popular => <MediaCard key={popular?._id} post={popular} />)
                }
            </div>
        </section>
    );
};

export default Popular;