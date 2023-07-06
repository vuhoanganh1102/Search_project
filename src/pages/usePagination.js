
import React from 'react';
import {useMemo, useState} from 'react';


function usePagination ({search}){
    const [currentPage,setCurrentPage] = useState(1);  //trang hiện tại
    const [newsPerPage,setNewsPerPage] = useState(10); //tin tức mỗi trang

    const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
    const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
    
   
    const range = (start, end) => {
        let length = end - start + 1;
        /*
            Create an array of certain length and set the elements within it from
          start value to end value.
        */
        return Array.from({ length }, (_, idx) => idx + start);
      };
    const siblingCount=1;
    const paginationRange = useMemo(() => {
        const totalPageCount =Math.ceil(search.length / newsPerPage);
    
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers =  siblingCount +5;
    
        /*
          Case 1:
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
          return range(1, totalPageCount);
        }
        
        /*
            Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
        */
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
          currentPage + siblingCount,
          totalPageCount
        );
    
        /*
          We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
    
        /*
            Case 2: No left dots to show, but rights dots to be shown
        */
        if (!shouldShowLeftDots && shouldShowRightDots) {
          let leftItemCount = 3 + 2 * siblingCount;
          let leftRange = range(1, leftItemCount);
    
          return [...leftRange, totalPageCount];
        }
    
        /*
            Case 3: No right dots to show, but left dots to be shown
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {
          
          let rightItemCount = 3 + 2 * siblingCount;
          let rightRange = range(
            totalPageCount - rightItemCount + 1,
            totalPageCount
          );
          return [firstPageIndex, ...rightRange];
        }
         
        /*
            Case 4: Both left and right dots to be shown
        */
        if (shouldShowLeftDots && shouldShowRightDots) {
          let middleRange = range(leftSiblingIndex, rightSiblingIndex);
          return [firstPageIndex, ...middleRange, lastPageIndex];
        }
      }, [search.length,newsPerPage , siblingCount, currentPage]);
    
      return paginationRange;
};

export default usePagination;