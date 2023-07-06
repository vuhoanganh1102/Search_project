import React from 'react';
import AllProducts from './AllProducts.tsx';


interface HomeProps {
    search: [];
    teacherCount: number;
    nameTeacher: string;
  }
const Home: React.FC<HomeProps> =  ({search,teacherCount, nameTeacher}) => {
    return (
        <div className='2xl:mx-80 lg:mx-20 my-10 border-x-2 border-gray-300 justify-center'>
            <div className='flex flex-col justify-center items-center lg:mx-5'>
               
                <div className="inline-flex mb-4 text-4xl font-Roboto leading-none tracking-tight md:text-5xl lg:text-6xl text-black">Tra cứu hiển thị</div>
                
                
                <div className="inline-flex lg:mb-5 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 hidden">Quotes</div>
            </div>
            
            <AllProducts search={search} teacherCount={teacherCount} nameTeacher={nameTeacher}/>
        </div>
    );
};

export default Home;