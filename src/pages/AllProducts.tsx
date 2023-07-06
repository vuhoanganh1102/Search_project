import React from 'react';
import Product from './Product.tsx';
import { useState, useEffect } from 'react';
import usePagination from './usePagination.js';
import Error_alert from './Error_alert.tsx';
import Header from '../Components/header/Header.tsx';






function AllProducts ({search,teacherCount,nameTeacher}) {
    const [currentPage,setCurrentPage] = useState(1);  //trang hiện tại
    const [newsPerPage,setNewsPerPage] = useState(10); //tin tức mỗi trang
    const [teachers, setTeachers] = useState(search);
    const pageNumbers : number[] = [];
    for (let i = 1; i <= Math.ceil(teacherCount / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    
    return (
        <>
        
        <div className='flex flex-col justify-center lg:mx-5 mx-4'>
            <div className='flex flex-col justify-center mb-4 mt-2'>
                <table className="table-fixed border-collapse border border-slate-500 font-Roboto text-xs lg:text-base">
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>id</th>
                            <th className='border border-slate-600'>title</th>
                            <th className='border border-slate-600'>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            teachers.map((product,index) =>
                            <Product product={product} key={index}/>)}
                            else{

                            
                        }
                    </tbody>
                </table>
                {
                        search.length === 0 ? <Error_alert />:''    
                }
            </div>
            {/*Phan Trang...... */}
                <ul className="flex justify-center h-8 text-sm">
                    <li>
                        <button 
                        type='button'
                        onClick={prevPage}
                        className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                        </button>
                    </li>
                    {
                        pageNumbers.map((item, index) =>{
                            if(currentPage === item){
                                return(
                                   <button
                                        type='button'
                                        onClick={() => chosePage(item)}
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        {item}
                                    </button>
                                )
                            }
                            else{
                                {/*
                                if(pageNumbers.length >= 9 ){
                                    if (numberTruncateLeft > 3 && numberTruncateRight < pageNumbers.length - 3 + 1) {
                                        // truncate 2 side
                                        if (item >= numberTruncateLeft && item <= numberTruncateRight) {
                                          return(
                                            <>
                                               
                                                <button
                                                    type='button'
                                                    onClick={() => chosePage(item)}
                                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    {item}
                                                </button>
                                                
                                            </>)
                                          
                                          */}
                                
                                    return(
                                        <button
                                            type='button'
                                            onClick={() => chosePage(item)}
                                           className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            {item}
                                        </button>
                                    )
                                }
                            }
                        
                        )
                    }
                    
                    <li>
                        <button 
                        type='button'
                        onClick={nextPage}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            </>
    );
    
    
    function chosePage(numberPage: number) {
        fetch(`https://admin.vtda.online:5000/search?name=${nameTeacher}&page=${numberPage}`)
      .then(response => response.json())
      .then(product =>{ setTeachers(product.teacher);})  
    }
    function nextPage(){
        if(currentPage === Math.ceil(teacherCount / newsPerPage)){}
        else
        setCurrentPage(currentPage => currentPage+1);
        console.log(currentPage)
    }
    function prevPage(){
        if(currentPage === 1){}
        else setCurrentPage(currentPage => currentPage-1);
        console.log(currentPage)
    }
    {/*Phan Trang...... */}
    };



export default AllProducts;