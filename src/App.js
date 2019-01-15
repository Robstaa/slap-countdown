import React from 'react';
import Timer from './Timer/Timer';
import moment from 'moment';

const App = () => {
  return (
    <Timer timeDateGoal={moment("2019-01-18T22:06:07")} />
  );
}

export default App;

