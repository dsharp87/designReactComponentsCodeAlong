import React, {useState} from 'react'

import Speaker from './Speaker'
import {data} from '../../SpeakerData';

const SpeakersList = ({showSessions}) => {

  const [speakersData, setSpeakersData] = useState(data);

  const onfavoriteToggle = (id) => {
    const speakersRecPrevious = speakersData.find((speaker) => speaker.id === id);
    const speakerRecUpdated = {
      ...speakersRecPrevious, 
      favorite: !speakersRecPrevious.favorite
    }
    const speakersDataNew = speakersData.map((speaker) => speaker.id === id ? speakerRecUpdated : speaker);
    setSpeakersData(speakersDataNew);
  };

  return (
    <div className="container speakers-list">
        <div className="row">
            {speakersData.map(function (speaker) {
                return (
                    <Speaker 
                      key={speaker.id} 
                      speaker={speaker} 
                      showSessions={showSessions} 
                      onfavoriteToggle={() => {onfavoriteToggle(speaker.id);}}
                    />                  
                )
            })}
        </div>
    </div>  
  )
}

export default SpeakersList;
