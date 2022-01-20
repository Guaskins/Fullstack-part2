import React from 'react'

const Filter = ({ 
    newFilter,
    searchItems }) => {

  return (
    <form>
    filter shown with 
    <input
        value={newFilter}
        onChange={searchItems}
    />
    </form> 
    )
  }

export default Filter