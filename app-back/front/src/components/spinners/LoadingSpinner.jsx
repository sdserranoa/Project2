import React from 'react';

function LoadingSpinner({ loading }) {
    return (
        <div className='loading-spinner'>
            {loading ? <img className='spin' src='/images/icons/reload.svg' alt='Loading arrows.' /> : null}
        </div>
    );
}

export default LoadingSpinner;