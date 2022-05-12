import React from 'react'
import Speaker from './Speaker'

const SpeakersList = (props) => {
  return (
    <div className="container speakers-list">
        <div className="row">
            {props.data.map(function (speaker) {
                return (
                    <Speaker key={speaker.id} speaker={speaker} />                  
                )
            })}
        </div>
    </div>  
  )
}

export default SpeakersList;
