import React from "react";
import { useHistory } from "react-router-dom";

export default function HomeContainer() {
  const history = useHistory();

  return (
    <div className="row justify-content-center">
      <div className="col-md-12 text-center mt-5">
        <h1>What best describes your question?</h1>
      </div>
      <div className="col-md-6 mt-5">
        <div className="card clickable">
          <div className="card-body">
            <p className="card-text">I have a general question</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-5">
        <div className="card clickable" onClick={() => {history.push('project-question')}}>
          <div className="card-body">
            <p className="card-text">I'm working on a project and:</p>
            <ul>
              <li>Something isn't working</li>
              <li>There's an error</li>
              <li>I'm not sure how to proceed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
