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

Tool: GitHub Copilot Chat
Asked for: Compare dependency-free custom checker vs standard lint/format tools
Kept: Custom checker recommendation
Changed: Chỉ giữ ba quy tắc định dạng đơn giản, nếu bạn quyết định như vậy
Rejected: Standard tools requiring external dependencies
By hand: Tự chọn phương án dựa trên README và rubric