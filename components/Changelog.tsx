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
import type { OverviewJson } from "lib/types/overview-json"

function chunkByMap<T, K>(
  array: T[],
  discriminator: (element: T) => K
): Map<K, T[]> {
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

  return chunkMap
}

function chunkBy<T, K>(
  array: T[],
  discriminator: (element: T) => K
): Array<T[]> {
  return Array.from(chunkByMap(array, discriminator).values())
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

  const closedIssuesByDayRepo = chunkByMap(
    changelog.recent_closed_issues,
    (c) => `${c.closed_at}-${c.repo}`
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
                    {(closedIssuesByDayRepo.get(`${date}-${repo}`) ?? []).map(
                      (issue) => (
                        <HStack key={`${issue.created_at}-${issue.repo}`}>
                          <Box flexGrow={1}>
                            <Link href={issue.issue_url}>
                              Issue Closed: {issue.title}
                            </Link>
                          </Box>
                          <Box>
                            <Link
                              display="flex"
                              href={`https://github.com/${issue.user}`}
                              color="gray.500"
                            >
                              @{issue.user}
                            </Link>
                          </Box>
                        </HStack>
                      )
                    )}
                    {commitsOnRepo.map((commit) => (
                      <HStack key={`${commit.date}-${commit.repo}`}>
                        <Box flexGrow={1}>
                          <Link href={commit.commit_url}>{commit.message}</Link>
                        </Box>
                        <Box>
                          <Link
                            display="flex"
                            href={`https://github.com/${commit.author}`}
                            color="gray.500"
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
