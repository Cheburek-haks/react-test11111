import React from "react";

const LoaderTest = () => {
    return (
        <>
            <button class="btn btn-primary" type="button" disabled>
                <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
                Loading...
            </button>
        </>
    );
};

export default LoaderTest;
