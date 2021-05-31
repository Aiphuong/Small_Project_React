import React from 'react'

export const sortData = (data) => {
    const sortedData = [...data]
    sortedData.sort((a,b) => b.case - a.case )
    return sortedData;
    
}
