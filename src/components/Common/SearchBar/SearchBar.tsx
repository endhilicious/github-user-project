import React, { useContext, useRef } from 'react'
import { SearchContext } from '../../../context/useSearch';
import Button from '../Button';
import TextField from '../TextField';

const SearchBar = () => {
  const { getUser }: any = useContext(SearchContext);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const { value = '' } = inputRef?.current || {};
    if (value.length > 3) {
      getUser(value)
    }
  }
  return (
    <div className="SearchBar__wrapper">
      <TextField inputRef={inputRef} className="SearchBar__inputWrapper"/>
      <Button onClick={handleClick} className="SearchBar__button">
        Search
      </Button>
    </div>
  )
}

export default SearchBar