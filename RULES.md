# Project Rules

## Stack

- Plain JavaScript
- Node.js
- npm

## Commands

- Run the test suite with:

  ```bash
  npm test
  ```

## Never Rules

- If npm test fails, fix the implementation or update the test case when the expected behavior has changed. Do not ignore or bypass failures.
- If tests or the build fail, diagnose the root cause of failures. Fix the implementation when the logic is wrong, or update tests when the expected behavior has intentionally changed.
- Update tests only when the intended behavior or project requirements have changed, and ensure the revised tests verify the new behavior.
- Do not add external runtime or development dependencies. Use built-in Node.js functionality unless a dependency is explicitly approved.
