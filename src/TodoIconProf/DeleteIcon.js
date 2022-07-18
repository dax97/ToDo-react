import React from 'react';
import { TodoIconProf } from './index';

function DeleteIcon({ onDelete }){
    return (
        <TodoIconProf
            type="delete"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };