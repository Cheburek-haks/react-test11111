import React from 'react';
import classes from "./MyInput.module.css"

const MuInput = React.forwardRef((props, ref) => {
    
    return ( 
        <div>
            <input ref = {ref} className="form-control mt-2" {...props} />
        </div>
    );
})
 
export default MuInput;