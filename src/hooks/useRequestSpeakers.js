import {useEffect, useState} from 'react';

import {data} from '../../SpeakerData';

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function useRequestSpeakers(delayTime = 1000) {
    const [speakersData, setSpeakersData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    useEffect(() => {
    
    async function delayFunc() {
        try {
        await delay(delayTime);
        //throw "YEEAAAARRRGGGGGG";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakersData(data);
        } catch (e) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
        }
    }
    delayFunc();
    },[]);
    
    const onFavoriteToggle = (id) => {
    const speakersRecPrevious = speakersData.find((speaker) => speaker.id === id);
    const speakerRecUpdated = {
        ...speakersRecPrevious, 
        favorite: !speakersRecPrevious.favorite
    }
    const speakersDataNew = speakersData.map((speaker) => speaker.id === id ? speakerRecUpdated : speaker);
    setSpeakersData(speakersDataNew);
    };

    return {speakersData, requestStatus, error, onFavoriteToggle};
}

export default useRequestSpeakers;