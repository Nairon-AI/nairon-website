# Work Command Diagram Options

Goal: pick the most intuitive flow for `/flux:work` before we implement visuals.

## Option A - State Machine (Most explicit)

```mermaid
flowchart LR
    T[Task Ready] --> C[Implement Change]
    C --> V[Verify: tests + checks]
    V -->|pass| K[Commit]
    K --> D[Done]
    V -->|fail| W[Why failed?]
    W --> F[Fix]
    F --> R[Re-run checks]
    R --> V
```

Why this works:
- Clearly shows pass path vs fail path.
- Matches real engineering loop semantics.
- Easy to animate with pulse lanes.

---

## Option B - Dual-Lane (Action vs Validation)

```mermaid
flowchart LR
    subgraph Build Lane
      T[Task] --> C[Implement]
      C --> K[Commit]
      K --> D[Done]
    end

    subgraph Validation Lane
      V[Verify]
      W[Why failed?]
      F[Fix]
      R[Re-check]
    end

    C --> V
    V -->|pass| K
    V -->|fail| W --> F --> R --> V
```

Why this works:
- Separates coding from quality control.
- Clean mental model for teams.
- Good for a diagram that feels "systematic".

---

## Option C - Gate + Rework Ring (Most visual)

```mermaid
flowchart LR
    T[Task] --> C[Implement]
    C --> G{Quality Gate}
    G -->|pass| K[Commit]
    K --> D[Done]

    subgraph Rework Ring
      W[Diagnose] --> F[Fix]
      F --> R[Re-check]
      R --> W
    end

    G -->|fail| W
    R --> G
```

Why this works:
- Very distinctive shape.
- Makes "gate" concept obvious.
- Great for cinematic animations.

---

## Animation Notes (for whichever option wins)

- Nodes stay static; only traces pulse.
- Slow cadence: 8-10s per full loop.
- Fail path pulses in a different intensity than pass path.
- Commit path should feel like a clear "release" moment.

---

## Locked Draft v1 (Chosen)

Chosen so far:
- Base: Option A (State Machine)
- Priority: Intuitive correctness
- Labels: Engineer precise

```mermaid
flowchart LR
    T[Task Ready] --> I[Implement]
    I --> V[Verify]
    V -->|pass| C[Commit]
    C --> D[Done]

    V -->|fail| W[Why failed?]
    W --> F[Fix]
    F --> R[Re-run]
    R --> V
```

UX intent:
- Main lane (happy path): `Task Ready -> Implement -> Verify -> Commit -> Done`
- Failure lane (below): `Verify -> Why failed? -> Fix -> Re-run -> Verify`
- This keeps "what happens" and "why it loops" obvious without visual noise.

---

## Locked Constraints v2

Chosen interaction constraints:
- Fail branch: **vertical drop** from `Verify`
- Retry lane depth: **shallow** (close to main lane)
- Branch labels: **explicit `pass` / `fail`**

### Variant A - Direct Return to Verify (Recommended)

```mermaid
flowchart LR
    T[Task Ready] --> I[Implement]
    I --> V[Verify]
    V -->|pass| C[Commit]
    C --> D[Done]

    V -->|fail| W[Why failed?]
    W --> F[Fix]
    F --> R[Re-run]
    R --> V
```

Notes:
- Most literal and easiest to reason about.
- Re-check flows directly into verify, matching runtime behavior.

### Variant B - Re-run Gate Before Verify

```mermaid
flowchart LR
    T[Task Ready] --> I[Implement]
    I --> V[Verify]
    V -->|pass| C[Commit]
    C --> D[Done]

    V -->|fail| W[Why failed?]
    W --> F[Fix]
    F --> R[Re-run]
    R --> G[Re-check signal]
    G --> V
```

Notes:
- Adds one tiny semantic checkpoint before re-entering `Verify`.
- Slightly richer but still clean.

### Layout guidance for final UI implementation

- Main lane y-axis: centerline.
- Retry lane y-axis: ~40-56px below centerline (shallow, not deep).
- `Verify -> Why failed?` edge should be vertical first, then horizontal.
- Keep nodes static; animate pulses only.
