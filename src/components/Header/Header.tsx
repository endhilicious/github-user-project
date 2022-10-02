import React from 'react'
import SearchBar from '../Common/SearchBar'

const Header: React.FC = () => {
  return (
    <div className="Header__wrapper">
        <div className="Header__title">
            Github Repository Search
        </div>
        <div className="Header__searchBarWrapper">
            <span>Search Github user here:</span>
            <SearchBar />
        </div>
    </div>
  )
}

export default Header