import React, {useState} from 'react';

import Header from './Header';
import Speakers from './Speakers';
import {data} from '../../SpeakerData';

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
      <div className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }>
          <Header theme={theme}/>
          <Speakers
            data={data}
            theme={theme}
            setTheme={setTheme}
          />
      </div>
  )
}

export default App;