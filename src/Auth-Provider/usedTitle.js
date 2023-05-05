import React, { useEffect } from 'react';

const usedTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Cookiteer`
    },[title])
};

export default usedTitle;