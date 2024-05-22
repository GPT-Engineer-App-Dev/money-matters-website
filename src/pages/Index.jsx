import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <Box mb={4}>
            <Heading as="h2" size="lg" mb={2}>
              Featured Article
            </Heading>
            <Text>Content for the featured article goes here...</Text>
          </Box>
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Article 1
                </Heading>
                <Text>Summary of article 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Article 2
                </Heading>
                <Text>Summary of article 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Article 3
                </Heading>
                <Text>Summary of article 3...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Article 4
                </Heading>
                <Text>Summary of article 4...</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box flex="1" borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Trending Topics
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>Topic 1</Text>
            <Text>Topic 2</Text>
            <Text>Topic 3</Text>
            <Text>Topic 4</Text>
          </VStack>
          <Heading as="h3" size="md" mt={4} mb={2}>
            Latest News
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>News 1</Text>
            <Text>News 2</Text>
            <Text>News 3</Text>
            <Text>News 4</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;