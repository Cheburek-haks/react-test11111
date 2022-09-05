import React from "react";

const YourInput = React.forwardRef((props, ref)  => {
    return (
        <div>
            <input ref = {ref} className="form-control mt-2" {...props} />
        </div>
    );
});

export default YourInput;
