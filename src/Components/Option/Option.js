import React from 'react';

const Option = ({option}) => {
    return (
//         <div className='p-4 m-4 border border-indigo-600'>
//             <input type="radio" id={option} name="fav_language" value={option}/>
//             <label for={option}>{option}</label><br></br>
//         </div>

<label class="font-semibold radio-inline p-4 m-4 border border-lime-600">
<input type="radio" name="optradio"/>{option}
</label>
    );
};

export default Option;