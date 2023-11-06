export type OverviewJson = {
  commit_graph_starting_date: string
  commit_graph_ending_date: string
  /**
   * Each number represents the number of commits on that day
   */
  commit_graph: number[]

  version_released_on_date: {
    [date: string]: {
      [repo: string]: string
    }
  }

  recent_open_issues: Array<{
    issue_url: string
    created_at: string
    title: string
    user: string
    repo: string
  }>
  recent_closed_issues: Array<{
    issue_url: string
    created_at: string
    closed_at: string
    title: string
    user: string
    repo: string
  }>

  /**
   * The most recent 1,000 commits.
   * NOTE: non-meaningful commits messages are filtered out, e.g. wherever the
   * message contains "wip" or "bump"
   */
  recent_commits: Array<{
    repo: string // "org/repo-name"
    commit_url: string
    message: string
    date: string // "yyyy-mm-dd"
    author: string
  }>
}
