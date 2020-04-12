import React from 'react'
import { connect } from 'react-redux'
import { searchQuery } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    props.searchQuery(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect(null, { searchQuery })(Filter)