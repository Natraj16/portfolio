import { GitHubCalendar } from 'react-github-calendar'

export default function GithubStreak({ theme }) {
  return (
    <section className="mt-8">
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">GitHub Stats</h2>
      <p className="text-sm text-muted mt-1.5 mb-8 font-mono">My GitHub contributions.</p>

      <div className="w-full flex justify-start [&>article]:w-full [&_svg]:w-full [&_svg]:h-auto">
        <GitHubCalendar
          username="Natraj16"
          colorScheme={theme || "dark"}
          blockSize={10.15}
          blockMargin={2.58}
          blockRadius={5}
          fontSize={13.5}
          theme={{
            dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            light: ['#d6d6d6', '#9be9a8', '#40c463', '#30a14e', '#216e39']
          }}
          style={{
            fontFamily: 'monospace',
            paddingBottom: '20px',
            lineHeight: '1.5'
          }}
        />
      </div>
    </section>
  )
}
