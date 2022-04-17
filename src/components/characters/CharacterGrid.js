import React, {useState} from 'react'
import Pagination from '../ui/Pagination'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {

  const [showPerPage, setShowPerPage] = useState(8);

  const [paginate, setPaginate] = useState({
    start: 0,
    end: showPerPage,
  });
  
  const onChangeHandler = (start, end) => {
    setPaginate({start:start, end:end})
  }

  return isLoading ?

  <Spinner /> :

  <>
  
  <section className='cards'>
    {
    items.slice(paginate.start, paginate.end).map(item =>
    <CharacterItem key ={items.char_id} item={item} showPerPage = {showPerPage}/>
    )}
  </section>

  <Pagination showPerPage={showPerPage} onChangeHandler={onChangeHandler} total={items.length}/>

  </>

}

export default CharacterGrid