export const FLUX_INSTALL_COMMAND =
	"/plugin add https://github.com/Nairon-AI/flux@latest";

export const FLUX_INSTALL_PROMPT = `Help me install Flux in this current agent environment.

First detect whether this session is Claude Code, Factory Droid, Codex, or another Flux-compatible environment.
Use the correct install path for this platform.
Handle as much of the install as you can yourself.
Only stop when I need to run a slash command, approve something, or restart the session.

If Flux is already installed, verify it and continue.
After install, run /flux:setup if this platform supports it and complete setup.

After setup and any required restart, check whether this repository has been primed yet.
If not, run /flux:prime automatically before any scoping or implementation work.

Once Flux is ready, I should be able to describe what I want naturally:
- build a feature
- fix a bug
- refactor something
- continue existing work

Flux should route to the right workflow automatically based on state and intent.

Tell me exactly what you need from me, one step at a time, and do the rest automatically.`;

export const FLUX_UNINSTALL_PROMPT = `Help me completely uninstall Flux from this environment.

First detect which Flux-compatible agent/platform this environment is using.
Use the correct uninstall path for this platform.
Handle as much as you can yourself.
Only stop when I need to run a slash command, confirm removal, or restart the session.

Remove project-local Flux state (.flux) unless I ask to keep it.
Offer machine-level cleanup separately before removing caches or global Flux data.
When finished, verify Flux is no longer installed and tell me whether I need to restart anything.`;
