"use client"
import { OverviewJson } from "lib/types/overview-json"
import { BsGithub } from "react-icons/bs"
import { Heading, Box, Container, Link, HStack, Text } from "@chakra-ui/react"

export const GetInvolved = ({ overview }: { overview: OverviewJson }) => {
  return (
    <Container>
      <Heading size="md">Get Involved</Heading>

      <Text mt={8} mb={8}>
        This page tracks open issues across tscircuit repositories. If you want
        to contribute, join the slack and we'll use this page to select an
        issue.
      </Text>

      <Box mt={4}>
        {overview.recent_open_issues.map((issue) => (
          <HStack key={issue.issue_url}>
            <Box
              style={{
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {issue.created_at}
            </Box>
            <Box flexGrow={1}>
              <HStack>
                <BsGithub />
                <Link href={issue.issue_url}>{issue.title}</Link>
              </HStack>
            </Box>
            <Link href={`https://github.com/${issue.repo}`}>
              <Box>{issue.repo}</Box>
            </Link>
          </HStack>
        ))}
      </Box>
    </Container>
  )
}
