import React, { useState } from 'react';
import './App.css';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? ((good-bad)/(all)*10).toFixed(2) : 0;
  const positive = all > 0 ? ((good/(all))*100).toFixed(2) : 0;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticItem text="good" value={good} />
        <StatisticItem text="neutral" value={neutral} />
        <StatisticItem text="bad" value={bad} />
        <StatisticItem text="all" value={all} />
        <StatisticItem text="average" value={average} />
        <StatisticItem text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const StatisticItem = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClicked = () =>{
    setGood(good+1);
  }

  const neutralClicked = () =>{
    setNeutral(neutral+1);
  }

  const badClicked = () =>{
    setBad(bad+1);
  }

  return (
    <div className="container">
        <div className="centered">
          <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => goodClicked()} text="good" />
            <Button handleClick={() => neutralClicked()} text="neutral" />
            <Button handleClick={() => badClicked()} text="bad" />
            <br />
            <br />
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
          </div>
        </div>
    </div>
  )
}

export default App;
