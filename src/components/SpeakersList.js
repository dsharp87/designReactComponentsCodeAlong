import React from 'react';
import ReactPlaceHolder from 'react-placeholder';
import Speaker from './Speaker';
import useRequestSpeakers from '../hooks/useRequestSpeakers';

const SpeakersList = ({showSessions}) => {

  const {
    speakersData, isLoading, hasErrored, error, onFavoriteToggle
  } = useRequestSpeakers(2000);

  

  if(hasErrored)
    return (
      <div className="text-danger">
        ERROR: <b>leading Speaker Data Failed: {error}</b>
      </div>
    )

  //if (isLoading) return <div>Loading...</div>

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={isLoading === false}
      >
        <div className="row">
            {speakersData.map(function (speaker) {
                return (
                    <Speaker 
                      key={speaker.id} 
                      speaker={speaker} 
                      showSessions={showSessions} 
                      onFavoriteToggle={() => {onFavoriteToggle(speaker.id);}}
                    />                  
                )
            })}
        </div>
      </ReactPlaceHolder>
    </div>  
  )
}

export default SpeakersList;
