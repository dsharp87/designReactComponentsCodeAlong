import React, {useState} from 'react';

import Header from './Header';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';
import {data} from '../../SpeakerData';

const Speakers = () => {
  const [theme, setTheme] = useState("light");
  return (
      <div className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }>
          <Header theme={theme}/>
          <SpeakersToolbar theme={theme} setTheme={setTheme} />
          <SpeakersList data={data} />
      </div>
  )
}

export default Speakers;
