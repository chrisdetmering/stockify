import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import TestCase from "./TestCase";

const GuidanceRequestQuestionnaire = ({ logout }) => {
  const history = useHistory();

  const [testCases, setTestCases] = useState([
    { id: 1, order: 0, description: "", expectation: "", actual: "" },
  ]);

  const handleLogout = () => {
    logout(() => {
      history.push('/');
    })
  }

  return (
    <div className="container">
      <button onClick={handleLogout}>Logout</button>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Describe your problem in one sentence</label>
            <input
              className="form-control"
              placeholder='ex. "Pressing button should create a new todo item on the page"'
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label>Provide the link to your GitHub repository</label>
            <input
              className="form-control"
              placeholder="ex. https://github.com/andysterks/todo-app"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label>
              Provide any error messages below. Write "None" if there are no
              errors.
            </label>
            <input
              className="form-control"
              placeholder="ex. var is not defined at line 62"
            />
          </div>
        </div>
        <div className="col-md-12">
          <p>Please create a test case below.</p>
          <div className="row">
            <div className="col-md-12">
              {testCases.map((testCase, index) => (
                <TestCase key={index} testCase={testCase} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label>What search terms did you put into Google?</label>
            <input
              className="form-control"
              placeholder="ex. javascript run code when button is pressed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidanceRequestQuestionnaire;