import Header from './Header';
import React from 'react';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';
import {data} from '../../SpeakerData';

const Speakers = () => {
  return (
      <div className="container-fluid">
          <Header />
          <SpeakersToolbar />
          <SpeakersList data={data} />
      </div>
  )
}

export default Speakers;
