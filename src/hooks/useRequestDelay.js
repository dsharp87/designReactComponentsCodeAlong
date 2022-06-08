import {useEffect, useState} from 'react';

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData=[]) {
    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    useEffect(() => {
    
    async function delayFunc() {
        try {
            await delay(delayTime);
            //throw "YEEAAAARRRGGGGGG";
            setRequestStatus(REQUEST_STATUS.SUCCESS);
            setData(initialData);
        } catch (e) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
        }
    }
    delayFunc();
    },[]);
    
    const updateRecord = (recordUpdated, doneCallback) => {
        const newRecords = data.map((record) => {
            return record.id === recordUpdated.id ? recordUpdated : record;
        });

        async function delayFunction() {
            try {
                await delay(delayTime);
                if(doneCallback)
                    doneCallback();
                setData(newRecords);
            } catch (error) {
                console.log("error inside delay function", error);
            }
        }
        delayFunction();
    };

    return {data, requestStatus, error, updateRecord};
}

export default useRequestDelay;