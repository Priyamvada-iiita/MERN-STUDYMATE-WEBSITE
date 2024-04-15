import React from 'react'

const StudyMateListsing = ({result}) => {
  return (
    <div>
      <div><h3 className='text-lg font-bold mb-2'>{result.length} StudyMate Listings</h3>
</div>
      <section>{result}</section>
      </div>
  )
}

export default StudyMateListsing