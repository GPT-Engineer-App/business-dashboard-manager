import { Box, VStack, Divider, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaUsers, FaCog } from "react-icons/fa";

const Navigation = () => {
  return (
    <Box bg="gray.100" w="250px" p={4}>
      <VStack align="stretch" spacing={6}>
        <Heading size="md">Dashboard</Heading>
        <Divider />
        <NavLink to="/">
          <Box>
            <FaUsers mr={2} />
            <Text>Dashboard</Text>
          </Box>
        </NavLink>
        <NavLink to="/manage-workers">
          <Box>
            <FaCog mr={2} />
            <Text>Manage Workers</Text>
          </Box>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Navigation;
