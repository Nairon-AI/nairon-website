import CodeBlock from "@/components/code-block"

export const CodeBlockIllustration = () => {
    const code = `// AI-augmented SDLC loop\nawait agent.run('/flux:interview feature-brief')\nawait agent.run('/flux:plan feature-brief')\n\nconst tasks = await orchestrator.spawn([\n  'implement-api',\n  'write-tests',\n  'review-edge-cases',\n])\n\nawait Promise.all(tasks)\nawait agent.run('/flux:improve') // score + recommendations\n`

    return (
        <CodeBlock
            code={code}
            lang="javascript"
            maxHeight={360}
            lineNumbers
            theme="github-light"
            className="[&_pre]:mask-y-from-80% [&_pre]:min-h-[5rem] [&_pre]:max-w-xs [&_pre]:rounded-xl [&_pre]:border-none [&_pre]:!bg-transparent"
        />
    )
}
