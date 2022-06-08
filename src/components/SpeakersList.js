import useRequestSpeakers, {REQUEST_STATUS} from '../hooks/useRequestSpeakers';

import React from 'react';
import ReactPlaceHolder from 'react-placeholder';
import Speaker from './Speaker';

const SpeakersList = ({showSessions}) => {

  const {
    speakersData, requestStatus, error, onFavoriteToggle
  } = useRequestSpeakers(2000);

  

  if(requestStatus === REQUEST_STATUS.FAILURE)
    return (
      <div className="text-danger">
        ERROR: <b>leading Speaker Data Failed: {error}</b>
      </div>
    )

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
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
