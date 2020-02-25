import React from 'react';
import Spinner from './spinners/Spinner';

function LoadingContentHider({ loading, children }) {
    if (loading) {
        return <Spinner marginBottom='20px' />;
    }

    return children;
}

export default LoadingContentHider;