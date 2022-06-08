import {useEffect, useState} from 'react';

import {data} from '../../SpeakerData';

function useRequestSpeakers(delayTime = 1000) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");
    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    useEffect(() => {
    
    async function delayFunc() {
        try {
        await delay(delayTime);
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
    
    const onFavoriteToggle = (id) => {
    const speakersRecPrevious = speakersData.find((speaker) => speaker.id === id);
    const speakerRecUpdated = {
        ...speakersRecPrevious, 
        favorite: !speakersRecPrevious.favorite
    }
    const speakersDataNew = speakersData.map((speaker) => speaker.id === id ? speakerRecUpdated : speaker);
    setSpeakersData(speakersDataNew);
    };

    return {speakersData, isLoading, hasErrored, error, onFavoriteToggle};
}

export default useRequestSpeakers;