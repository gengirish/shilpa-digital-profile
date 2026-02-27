# Antigravity Agents Workspace

This `.agents` directory is used to define custom behavior, instructions, and workflows for Antigravity, your AI coding assistant.

## Features Currently Supported

### Workflows
Workflows are defined in the `workflows/` directory. They provide specific step-by-step instructions on how to achieve a particular task, such as deploying an app, testing your code, or a setup process.

- **Creating a Workflow**: Create a `.md` file in `.agents/workflows/`.
- **Format**: It must contain YAML frontmatter with a `description`, and markdown content detailing the steps.
- **Turbo Mode**: You can insert a `// turbo` annotation on the line preceding a specific step if you want Antigravity to run that step automatically without pausing for user approval. Using `// turbo-all` anywhere in the file allows all such command-running steps to auto-run.
- **Trigger**: You can trigger a workflow by referencing it or by calling its `/` slash command name. (For example, `/hello-world`).
