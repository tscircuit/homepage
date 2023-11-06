"use client"
import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react"
import { BsGithub } from "react-icons/bs"
import CommitBarChart from "./CommitBarChart"

type OverviewJson = {
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

  /**
   * The most recent 1,000 commits.
   * NOTE: non-meaningful commits messages are filtered out, e.g. wherever the
   * message contains "wip"
   */
  recent_commits: Array<{
    repo: string // "org/repo-name"
    commit_url: string
    message: string
    date: string // "yyyy-mm-dd"
    author: string
  }>
}

function chunkBy<T, K>(
  array: T[],
  discriminator: (element: T) => K
): Array<T[]> {
  const chunkMap = new Map<K, T[]>()

  for (const element of array) {
    const key = discriminator(element)
    const chunk = chunkMap.get(key)
    if (chunk) {
      chunk.push(element)
    } else {
      chunkMap.set(key, [element])
    }
  }

  return Array.from(chunkMap.values())
}

export const Changelog = ({ changelog }: { changelog: OverviewJson }) => {
  const dates = Array.from(
    new Set(changelog.recent_commits.map((c) => c.date))
  ).sort()
  dates.reverse()

  const commitsByDayRepo = chunkBy(
    changelog.recent_commits,
    (c) => `${c.date}-${c.repo}`
  )

  return (
    <Container>
      <Heading size="md">Changelog</Heading>
      <CommitBarChart height={200} points={changelog.commit_graph} />
      {dates.map((date) => {
        return (
          <Box
            sx={{
              borderLeft: "4px solid",
              borderLeftColor: "blue.100",
            }}
          >
            <Heading size="sm" mt={8} mb={4}>
              <Box
                pl={2}
                pr={2}
                pb={1}
                pt={1}
                bgColor="blue.400"
                style={{ color: "#fff" }}
                display="inline-flex"
              >
                {date}
              </Box>
            </Heading>
            {commitsByDayRepo
              .filter((c) => c[0].date === date)
              .map((commitsOnRepo) => {
                const repo = commitsOnRepo[0].repo
                const versionReleasedOnDay =
                  changelog.version_released_on_date?.[date]?.[repo]
                return (
                  <Box ml={4} pb={8}>
                    <Heading size="xs" mt={6} mb={4}>
                      <HStack>
                        <Link
                          display="flex"
                          alignItems="center"
                          href={`https://github.com/${repo}`}
                        >
                          <BsGithub style={{ marginRight: 4 }} /> {repo}
                        </Link>
                        {versionReleasedOnDay && (
                          <Box color="gray.500" ml={2}>
                            {versionReleasedOnDay}
                          </Box>
                        )}
                      </HStack>
                    </Heading>
                    {commitsOnRepo.map((commit) => (
                      <HStack key={`${commit.date}-${commit.repo}`}>
                        <Box flexGrow={1}>
                          <Link href={commit.commit_url}>{commit.message}</Link>
                        </Box>
                        <Box>
                          <Link
                            display="flex"
                            href={`https://github.com/${commit.author}`}
                          >
                            @{commit.author}
                          </Link>
                        </Box>
                      </HStack>
                    ))}
                  </Box>
                )
              })}
          </Box>
        )
      })}
    </Container>
  )
}
