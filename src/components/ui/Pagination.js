import React, {useState, useEffect} from 'react'

const Pagination = ({onChangeHandler, showPerPage, total}) => {
  
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;

    onChangeHandler(value - showPerPage, value);
  },[counter])

  const onButtonClick = (type) => {
    if(type === 'prev'){
      if(counter === 1){
        setCounter(1);
      } else {
        setCounter(counter-1);
      }
    } else if(type === 'next'){
      if(Math.ceil(total/showPerPage) === counter){
        setCounter(counter);
      } else {
        setCounter(counter+1);
      }
    }
  }

  return (
    <div className='pagination justify-content-between'>
      <button className='active btn' onClick={() => onButtonClick('prev')}>Previous</button>
      <button className='active btn' onClick={() => onButtonClick('next')}>Next</button>
    </div>
  )

}

export default Pagination