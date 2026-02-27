---
description: This is a sample workflow to test Antigravity
---
This is a sample workflow that you can ask Antigravity to run! When Antigravity evaluates this workflow, it will follow these steps:

1. Use the run_command tool to execute `echo "Hello world"` in the terminal.
// turbo
2. Use the run_command tool to execute `echo "This step was auto-run!"`. The `// turbo` annotation right above this step tells Antigravity it can safely auto-run it.
