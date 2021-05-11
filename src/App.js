import React from 'react';
import className from 'classnames';

const App = () => {
    return <div className={className(style.header, 'color')}>
        Yes, we Did It! This is App Component!
    </div>
}

export default App;