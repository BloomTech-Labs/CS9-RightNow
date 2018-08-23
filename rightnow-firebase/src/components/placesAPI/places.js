import React from 'react';
import GooglePlaces from 'react-google-places-component';



const Place = ({prediction, onClick}) => {
    return (
      <div onClick={onClick.bind(this, prediction.description)} className='item-component'>
        {prediction.description}
      </div>
    )
}



const Places = function({onClickPlace}) {
  return <GooglePlaces
    options={{input: 'poetic systems'}}
    itemComponent={Place}
    itemProps={{onClick: onClickPlace}} />
}