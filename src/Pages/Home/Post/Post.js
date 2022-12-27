import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Post = () => {
    const { user } = useContext(AuthContext)
    const [selcetedImage, setSelcetedImage] = useState();
    const [message, setMessage] = useState(null);
    const imageChange = e => {
        if (e.target.files && e.target.files.length > 0) {
            setSelcetedImage(e.target.files[0])
        }
    }

    
    return (
        <section className='flex h-screen mb-5 justify-center items-center '>
            <div className='sm:w-96'>
                <h1 className='font-bold text-4xl text-center pb-4 border-b mb-3 '>Create Post</h1>
                <div className='flex gap-2 mb-3'>
                    <img className='w-12 rounded-full' src={user?.photoURL} alt="" />
                    <div>
                        <h2>{user?.displayName}</h2>
                    </div>
                </div>
                <div className='max-h-96 h-full '>

                    <div className="z-10 top-0 w-full">
                        <textarea onChange={(e) => setMessage(e.target.value)} className="p-2 border-none outline-none bg-transparent w-full rounded-sm" placeholder={`What's on your mind, ${user?.displayName}?`}></textarea>
                        <div className="extraOutline py-4 m-auto rounded-lg">
                            <div className="file_upload p-5 relative w-full border-4 border-dotted border-primary rounded-lg"  >

                                {
                                    selcetedImage ? <div>
                                        <label htmlFor='uploadImage' className='absolute cursor-pointer z-50 top-2 bg-primary py-1 px-3 rounded-sm '>Add new </label>
                                        <div className='flex relative justify-center '>
                                            <img className='' src={URL.createObjectURL(selcetedImage)} alt="" />
                                        </div></div> :
                                        <div>
                                            <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                            <div className="input_field flex flex-col w-max mx-auto text-center">
                                                <label htmlFor='uploadImage'>

                                                    <div className="text bg-indigo-600 text-white border border-primary rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                                                </label>

                                                <div className="title text-indigo-500 uppercase">or drop files here</div>
                                            </div>
                                        </div>
                                }

                                <input id='uploadImage' className="text-sm cursor-pointer w-36 hidden" type="file" onChange={imageChange} accept='image/*' />
                            </div>
                            <button className=' w-full btn btn-primary rounded-md mt-3' disabled={!message}>Post </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;