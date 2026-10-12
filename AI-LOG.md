## 2026-10-12 — Create RULES.md for the project

Tool: GitHub Copilot
Asked for: Create a RULES.md file specifying the project stack (JavaScript, Node.js, npm), test commands (npm test), and Never rules (do not modify or comment out tests to pass build errors).
Kept: The overall structure with Stack, Commands, and Never Rules sections, along with Copilot's automated file check workflow.
Changed: None.
Rejected: None.
By hand: Provided the prompt requirements and rule guidelines in Vietnamese.

## 2026-10-12 — Review RULES.md against assignment requirements

Tool: GitHub Copilot
Asked for: Review RULES.md against three criteria (project-specific stack/commands, at least one Never rule, no external dependencies), highlight missing/unclear rules, and translate rules into English.
Kept: the "No external dependencies" rule.
Changed: None.
Rejected: Suggestions regarding the ambiguity of the "Build" definition, as `npm test` serves as our project verification step.
By hand: Decided whether to incorporate the newly suggested rules into RULES.md based on Copilot's review.

## 2026-10-12 — Design Custom Format Checker and Review Implementation Plan

Tool: GitHub Copilot
Asked for: Explain how a dependency-free custom format checker works and propose an implementation plan without modifying files.
Kept: Recursive scanning of .js files in src/, test/, and scripts/; checking leading tab indentation and final newline; reporting violations without modifying files.
Changed: Defined the file scope, allowed empty files, accepted LF and CRLF, and chose a separate `npm run check` command instead of the proposed `pretest` script.
Rejected: Rejecting all tab characters, automatic formatting fixes, additional formatting rules, and modifying the behavior of `npm test` through `pretest`.
By hand: Reviewed Copilot's explanations, selected the formatting rules and edge-case behavior, and decided to keep `npm test` separate from the combined quality gate.

## 2026-10-12 — Implement Custom Format Checker and Quality Gate

Tool: GitHub Copilot
Asked for: Implement the approved custom format checker and npm scripts without modifying the cart implementation or existing tests.
Kept: Recursive scanning of JavaScript files, two formatting rules, error reporting, and separate `format:check` and `check` commands.
Changed: Replaced the original `pretest` proposal with a separate `npm run check` command while keeping `npm test` unchanged.
Rejected: Additional dependencies, automatic formatting fixes, and changes to existing cart source or tests.
By hand: Reviewed the checker implementation and manually created a temporary JavaScript file with tab indentation and no final newline. Confirmed that both violations were detected and the checker returned exit code 1. Removed the temporary file and verified that the checker passed all 3 JavaScript files.

## 2026-10-12 — Design GitHub Actions CI Workflow

Tool: GitHub Copilot
Asked for: Explain how GitHub Actions CI works, what files are required, and how to run the existing quality gate on every push without modifying files.
Kept: Using GitHub Actions, an Ubuntu runner, a workflow in `.github/workflows/ci.yml`, and `npm run check` for validation.
Changed: Selected Node.js 24 instead of the suggested Node.js 20 and decided to skip dependency installation because the project has no external dependencies.
Rejected: Using `npm install`, restricting CI to the main branch, and adding unnecessary workflow complexity.
By hand: Reviewed Copilot's explanation, selected the CI trigger, Node.js version, dependency installation policy, and validation command.

## 2026-10-12 — Implement GitHub Actions CI Workflow

Tool: GitHub Copilot
Asked for: Implement the approved GitHub Actions workflow in `.github/workflows/ci.yml` without modifying other files.
Kept: Workflow triggered on every push, Ubuntu runner, repository checkout, Node.js 24 setup, and `npm run check`.
Changed: None during implementation.
Rejected: Dependency installation and additional workflow steps not required by the project.
By hand: Reviewed the generated workflow, committed and pushed it to GitHub, and inspected the Actions run. Confirmed that the format checker passed all 3 JavaScript files and the existing cart test failed with "Error: not implemented". Verified that CI correctly returned exit code 1 without modifying the cart implementation or tests.

## 2026-10-12 — cartTotal Implementation and Tests

Tool: GitHub Copilot
Asked for: Review the implementation brief against README.md and RULES.md, propose an implementation and testing plan, then implement cartTotal and its automated tests after approval.
Kept: The approved plan, required arithmetic and validation rules, existing worked-example test, and 14 additional tests covering shipping boundaries, empty cart, invalid inputs, zero price, and rounding.
Changed: Clarified the brief to avoid undocumented validation rules and require approval before editing. Removed outdated starter comments after implementation.
Rejected: Additional validation for undocumented malformed inputs and options, including extra restrictions not required by README.md.
By hand: Reviewed Copilot's feedback and plan, verified expected results for boundary and rounding cases, approved implementation, inspected the code and tests, cleaned up outdated comments, and reran npm run check successfully. Committed and pushed the implementation, then confirmed that the GitHub Actions workflow passed on the updated repository.