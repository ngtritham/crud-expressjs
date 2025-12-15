---
description: Commit and push all changes with concise message
---

Commit and push all current changes to git. Follow these steps:

1. Run `git status` and `git diff` in parallel to see changes
2. Run `git log -3 --format='[%h] (%an <%ae>) %s'` to see recent commit style
3. Analyze the changes and create a commit message that is EXACTLY 5-7 words long
4. The commit message should be concise and describe the main change
5. Stage all changes with `git add .`
6. Push the changes to the current branch
7. Run `git status` to verify success

IMPORTANT: The commit message must be 5-7 words only. Do not make it longer.
