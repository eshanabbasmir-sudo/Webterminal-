import { WebTerminal } from "@/components/web-terminal"

export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col bg-[#070a0e] p-3 sm:p-6">
      <header className="mx-auto mb-4 w-full max-w-5xl">
        <h1 className="font-mono text-lg font-semibold tracking-tight text-[#7ee787]">
          web<span className="text-[#79c0ff]">://</span>terminal
        </h1>
        <p className="mt-1 font-mono text-xs text-[#7d8695]">
          A live shell running on the server. Full command access — cd, ls, cat, node, npm,
          git and more. State persists across commands.
        </p>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col">
        <div className="h-[70vh] min-h-[420px]">
          <WebTerminal />
        </div>
        <footer className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-[#5c6572]">
          <span>↑ / ↓ history</span>
          <span>Ctrl+C cancel line</span>
          <span>Ctrl+L / clear — clear screen</span>
          <span>Ctrl+A / Ctrl+E — line start / end</span>
        </footer>
      </div>
    </main>
  )
}
