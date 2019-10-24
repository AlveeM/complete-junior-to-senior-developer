import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
    return (
        <div>
            Whats up?
        </div>
    )
}

ReactDOM.render(<Hello/>, document.getElementById('app'))