"use client"

import {
  Box,
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

export const CircuitEditor = () => (
  <Box
    as="section"
    bg="bg-surface"
    // borderWidth={1}
    // borderColor="gray.200"
    borderRadius={8}
    minH={500}
    py={3}
    boxShadow="sm"
  >
    <Tabs size="md" variant="enclosed">
      <TabList px={4}>
        <Tab px={4}>Code</Tab>
        <Tab px={4}>Schematic</Tab>
        <Tab px={4}>PCB</Tab>
        <Tab px={4}>Debug</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>4</TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
)
