export const FLUX_INSTALL_COMMAND =
	"/plugin add https://github.com/Nairon-AI/flux@latest";

export const FLUX_CLAUDE_INSTALL_PROMPT = `I want to install Flux for structured AI development.
The plugin is at: https://github.com/Nairon-AI/flux

Help me install and setup the plugin.

Then explain the core workflow (scope -> build -> review).

The install command is: /plugin add https://github.com/Nairon-AI/flux@latest

Do NOT run /plugin add in bash or via claude plugin add in a nested shell session.
Ask me to run that slash command in this Claude chat and wait for my "done" reply.

After I reply "done", continue automatically:
1) Run /flux:setup (or load flux-setup skill and execute setup workflow)
2) Complete setup questions
3) Confirm setup is complete and list the next Flux commands

Guide me on anything I need to do manually and do the rest automatically.`;
