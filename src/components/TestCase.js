import React from "react";

function TestCase({ testCase, index }) {
  return (
    <>
      <h4>Step #{index + 1}</h4>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text test-case" id="basic-addon1">
            Expectation
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="What should happen?"
          defaultValue={testCase.expectation}
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text test-case" id="basic-addon1">
            Actual
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="What actually happened?"
          defaultValue={testCase.actual}
        />
      </div>
    </>
  );
}

export default TestCase;
