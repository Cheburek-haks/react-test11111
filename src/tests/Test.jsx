import React from 'react';


const Test = () => {
    
    const deleteSlyderFunction = () => {
        const slyderCarousel = document.querySelector('.carousel')
        const btnClose = document.querySelector('.btn-close')
        btnClose.remove()
        slyderCarousel.remove()
    }
    return ( 
        <>
        <button type="button" className="btn-close" aria-label="Close" onClick={deleteSlyderFunction} ></button>
        </>
    );
}
 
export default Test;