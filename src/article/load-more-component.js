import React from 'react';

export default function LoadMore({title, onLoadMore}) {
  return title ? (
    <div className='uk-text-center'>
      <button className='uk-button uk-button-primary' onClick={onLoadMore}>{title}</button>
    </div>
  ) : (
    <></>
  )
}