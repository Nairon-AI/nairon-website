export const FLUX_INSTALL_COMMAND =
	"/plugin add https://github.com/Nairon-AI/flux@latest";

export const FLUX_CLAUDE_INSTALL_PROMPT = `Help me install Flux inside this Claude Code session.

Ask me to run one slash command at a time in chat and wait for my "done":
1) /plugin marketplace add https://github.com/Nairon-AI/flux
2) /plugin install flux@nairon-flux

If Flux is already installed, skip install and continue.

Then run /flux:setup, complete setup questions, and explain the core loop:
/flux:scope -> /flux:work -> /flux:impl-review.

After /flux:setup succeeds, tell me to fully restart Claude Code once and wait for my "done".

Do the rest automatically.

Important: slash commands run in Claude chat input, not terminal bash.`;
