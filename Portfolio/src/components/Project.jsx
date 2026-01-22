import React from 'react'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.jpg'

export default function Project() {
  return (
    <>
     <div className='bg-gray-700 m-20 max-2-full rounded-3xl shadow-lg'>
        <div className='grid justify-items-center m-10'>
            <h1 className='text-white text-3xl mt-10'>Project</h1>
        </div>
        <div>
            <div className='grid md:grid-cols-2 gap-4 p-5 grid-cols-1'>
                <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                    <div className='md:flex '>
                        <div className='p-8'>
                            <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                E-commerce website
                            </div>
                            <hr />
                            <a href="#" className=''>Subheading</a>
                            <p className='mt-2 text-slate-500'>
                                Lorem ipsum dolor, sitamet consectetur adipisicing elit. Sapiente tempora, eaque ullam aperiam hic
                            </p>
                        </div>
                        <div className="md:shrink p-15 rounded-full">
                            <img src={Project1} alt="" width={250} height={250} className='rounded-full'/>
                        </div>
                    </div>
                </div>
                <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                    <div className='md:flex '>
                        <div className="md:shrink p-15 rounded-full">
                            <img src={Project2} alt="" width={250} height={250} className='rounded-full'/>
                        </div>
                        <div className='p-8'>
                            <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                Tesla clone with PHP
                            </div>
                            <hr />
                            <a href="#" className=''>Subheading</a>
                            <p className='mt-2 text-slate-500'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente tempora, eaque ullam aperiam hic
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <hr />
            <div className='grid grid-cols-2 gap-4 p-5'></div>
            <hr />
        </div>

     </div>
    </>
  )
}
