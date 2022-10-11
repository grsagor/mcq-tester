import React from 'react';

const Option = ({option, correctAnswer}) => {
    console.log(correctAnswer);

    const clickedOnOption = () => {
        if(option === correctAnswer){
            alert('Right Answer');
        }
        else{
            alert('Wrong Answer');
        }
    }

    return (
//         <div className='p-4 m-4 border border-indigo-600'>
//             <input type="radio" id={option} name="fav_language" value={option}/>
//             <label for={option}>{option}</label><br></br>
//         </div>

<label onClick={clickedOnOption} class="font-semibold radio-inline p-4 m-1 md:m-4 border border-lime-600">
<input type="radio" name="optradio"/>{option}
</label>
    );
};

export default Option;