import React from 'react';
import { TodoIconProf } from './index';

function CompleteIcon ({ completed, onComplete }){
    return (
        <TodoIconProf
            type="check"
            color={completed ? '#4caf50' : 'gray'}
            onClick={onComplete}
        />
    );
}

export{ CompleteIcon };