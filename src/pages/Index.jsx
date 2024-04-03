import React from "react";
import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Stack, Divider, Image, VStack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaUsers, FaCog, FaChartLine, FaDollarSign } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  return (
    <Box bg="gray.100" w="250px" p={4}>
      <VStack align="stretch" spacing={6}>
        <Heading size="md">Dashboard</Heading>
        <Divider />
        <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
          <Text color={linkColor}>Dashboard</Text>
        </Link>
        <Link as={RouterLink} to="/manage-workers" style={{ textDecoration: "none" }}>
          <Box>
            <Icon as={FaUsers} mr={2} />
            <Text color={linkColor}>Manage Workers</Text>
          </Box>
        </Link>
        <Box>
          <Icon as={FaCog} mr={2} />
          <Text color={linkColor}>Manage Services</Text>
        </Box>
      </VStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Flex>
      <Navigation />

      {/* Main Content */}
      <Box flex={1} p={8}>
        <Stack spacing={8}>
          {/* Sales and Revenue */}
          <Flex justify="space-between">
            <Stat>
              <StatLabel>Total Sales</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$45,670</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
          </Flex>

          {/* Charts */}
          <Flex justify="space-between">
            <Box>
              <Heading size="md" mb={4}>
                Sales Chart
              </Heading>
              <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxMjEyMDg1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" />
            </Box>
            <Box>
              <Heading size="md" mb={4}>
                Revenue Chart
              </Heading>
              <Image src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXZlbnVlJTIwY2hhcnR8ZW58MHx8fHwxNzEyMTg3MDY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue Chart" />
            </Box>
          </Flex>

          {/* Worker of the Month */}
          <Box>
            <Heading size="md" mb={4}>
              Worker of the Month
            </Heading>
            <Flex align="center">
              <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjE4NzA2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Worker" w="100px" h="100px" mr={4} />
              <Box>
                <Text fontWeight="bold">John Doe</Text>
                <Text>Sales Manager</Text>
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Index;
