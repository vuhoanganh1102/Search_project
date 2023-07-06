import React from 'react';
import { useState } from 'react';
import AllProducts from './AllProducts.tsx';

const CreateField = ({search}) => {
    const createFieldNumber : string[] = ['body']
    
    function createField(){
       
        return createFieldNumber;
    }
    const [searchTerm,SetSearchTerm] =useState('');
    return (
        <div>
             {
                createField().map((item) =>{
                    return(
                        <>
                        
                        <div className='flex flex-col justify-center  py-1'>
                            <div className=' justify-center flex'>
                                <form className='lg:w-60 sm:w-30 max-[599px]:w-80 '>   
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input 

                                        onChange={(e) => SetSearchTerm(e.target.value)}
                                        
                                        type="search" id="default-search" 
                                        className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400
                                        dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Typing to search ..." required /> 
                                        <button
                                        
                                        type="submit" className="text-white absolute right-1 bottom-1 bg-blue-700
                                        hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1
                                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{item}</button>
                                    </div>
                                </form>
                            </div>
                        </div> 
                        
                        </>
                    )
                    })
            }
            <AllProducts search={search.filter((e) => {
                                
                                return searchTerm.toLocaleLowerCase() === ''
                                ? <></>
                                : e.body.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                            })}/>
                  
        </div>
    );
};

export default CreateField;