import React from "react";

function TestCase({ testCase, index }) {
  return (
    <>
      <h4>Step #{index + 1}</h4>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text test-case" id="basic-addon1">
            Expectation
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="What should happen?"
          defaultValue={testCase.expectation}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text test-case" id="basic-addon1">
            Actual
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="What actually happened?"
          defaultValue={testCase.actual}
        />
      </div>
    </>
  );
}

export default TestCase;
