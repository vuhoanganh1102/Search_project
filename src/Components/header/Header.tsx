import React from 'react';
import { useState, useEffect, useRef } from 'react';

import Home from '../../pages/Home.tsx';
const edu_icon = require("../../assets/img/edu_icon.png");
const account_icon = require('../../assets/img/user_2.png');

const navLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Company",
    url: "/company",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Marketplace",
    url: "/marketplace",
  },
  {
    display: "Features",
    url: "/features",
  },
  {
    display: "Team",
    url: "/team",
  },
  {
    display: "Contact",
    url: "/contact",
  },
  {
    display: "Sign in",
    url: "/signin",
  }
];

const Header = () => {
  
  const [teachers, setTeachers] = useState([])
  const [teacherCount, setTeacherCount] = useState(1)

  function changeProduct(searchTerm: string, pageNumber: number) {

    fetch(`https://admin.vtda.online:5000/search?name=${searchTerm}&page=${pageNumber}`)
      .then(response => response.json())
      .then(product => {
        setTeachers(product.teacher); setTeacherCount(product.teacherCount);
      }
      );
  }
  

  const [textboxValue, setTextboxValue] = useState('');
 
  function handleChange(event) {
      setTextboxValue(event.target.value);
      
  }
  function handleClick() {
      changeProduct(textboxValue,1);
      
    // Thực hiện các tác vụ khác với giá trị textboxValue
  }
  return (
    <>
      <nav className='bg-blue-400 border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl max-[599px]:justify-center'>
          <a href="/home" className='flex bg-white p-2 rounded-lg my-2'>
            <img src={edu_icon} className="mr-3 h-6 sm:h-9" alt="Logo" ></img>
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">Education</span>
          </a>
          <div className='flex flex-col justify-center xl:mr-80 lg:mr-32'>
            <div className=' justify-center flex'>
              <form className='lg:w-[42rem] w-[35rem] max-[599px]:w-80 '>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input
                    value={textboxValue} onChange={handleChange}
                    type="text" id="default-search"
                    className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Typing to search ..." required />
                  <button
                    onClick={handleClick}
                     
                    type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700
                                  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <Home search={teachers} teacherCount={teacherCount} nameTeacher={textboxValue}/>
    </>

  );
};
export default Header;

