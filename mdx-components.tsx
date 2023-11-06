import type { MDXComponents } from "mdx/types"
import { Text, Heading, List, ListItem, UnorderedList } from "@chakra-ui/react"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading size="md" mt={8} mb={8} {...props} />,
    h2: (props) => <Heading size="sm" mt={8} mb={8} {...props} />,
    h3: (props) => <Heading size="sm" mt={8} mb={8} {...props} />,
    h4: (props) => <Heading size="sm" mt={8} mb={8} {...props} />,
    p: (props) => <Text mt={4} mb={4} as="p" {...props} />,
    ul: (props) => <UnorderedList as="ul" {...props} />,
    li: (props) => <ListItem as="li" {...props} />,
  }
}
