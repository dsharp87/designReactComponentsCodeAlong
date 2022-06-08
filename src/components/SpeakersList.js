import React, {useEffect, useState} from 'react'

import ReactPlaceHolder from 'react-placeholder';
import Speaker from './Speaker'
import {data} from '../../SpeakerData';

const SpeakersList = ({showSessions}) => {

  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {

    async function delayFunc() {
      try {
        await delay(2000);
        //throw "YEEAAAARRRGGGGGG";
        setIsLoading(false);
        setSpeakersData(data);
      } catch (e) {
        setIsLoading(false);
        setHasErrored(true);
        setError(e);
      }
    }
    delayFunc();
  },[]);

  const onfavoriteToggle = (id) => {
    const speakersRecPrevious = speakersData.find((speaker) => speaker.id === id);
    const speakerRecUpdated = {
      ...speakersRecPrevious, 
      favorite: !speakersRecPrevious.favorite
    }
    const speakersDataNew = speakersData.map((speaker) => speaker.id === id ? speakerRecUpdated : speaker);
    setSpeakersData(speakersDataNew);
  };

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
                      onfavoriteToggle={() => {onfavoriteToggle(speaker.id);}}
                    />                  
                )
            })}
        </div>
      </ReactPlaceHolder>
    </div>  
  )
}

export default SpeakersList;
