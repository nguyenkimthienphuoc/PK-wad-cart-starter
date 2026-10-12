# Self-assessment — IA#1

Submitted by: 24127510 — Nguyễn Kim Thiên Phước

Total I claim: **98 / 100**

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js` implements subtotal, VAT, free-shipping threshold, final rounding, empty-cart handling, and required `RangeError` validation. `test/cart.test.js` verifies the worked example returning the number `467400`, shipping boundaries, and invalid inputs. Commit `63a8565`. |
| Tests | 20 | 20 | `test/cart.test.js` contains 15 tests covering the worked example, empty cart, shipping below/at/above the threshold, negative price, invalid quantities, zero price, and rounding. `npm test` passes all 15 tests. Commit `63a8565`. |
| Harness | 20 | 20 | `RULES.md` defines the project stack, commands, and Never rules. `scripts/check-format.js` checks indentation and final newlines. `package.json` defines `format:check` and `check`. `.github/workflows/ci.yml` runs `npm run check` on every push. The GitHub Actions workflow passed after implementation. Commits `38e4ff7`, `73626f4`, and `b3e50d0`. |
| Brief | 15 | 15 | `BRIEF.md` specifies the function contract, expected behavior, error cases, file scope, no-dependency requirement, and AI approval workflow. Commit `63a8565`. |
| AI-LOG.md | 15 | 13 | `AI-LOG.md` records GitHub Copilot usage, requests, outputs kept, changes, rejected suggestions, and manual work for project rules, the format checker, CI, and cart implementation. Entries correspond to commits `38e4ff7`, `73626f4`, `b3e50d0`, and `63a8565`. |
| **Total** | **100** | **98** | |

## What I did not manage

I did not implement additional validation for malformed inputs or options that were not explicitly required by the assignment specification. I focused on the documented contract rather than introducing undocumented restrictions.

I also did not test every possible JavaScript numeric edge case. The tests cover the required behavior and representative boundary cases.

## What I would do differently

I would separate the implementation brief, cart implementation, and test additions into smaller commits. Although the final implementation and tests were verified successfully, smaller commits would make the development history easier to review.

I would also keep AI-LOG entries more concise and avoid duplicating planning notes, while continuing to document important decisions and rejected AI suggestions as they occur.