import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ManageWorkers = () => {
  const [workers, setWorkers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorker = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    setWorkers([...workers, newWorker]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

  const handleRemoveWorker = (id) => {
    const updatedWorkers = workers.filter((worker) => worker.id !== id);
    setWorkers(updatedWorkers);
  };

  return (
    <Box>
      <Heading mb={4}>Manage Workers</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Add Worker
          </Button>
        </Stack>
      </form>
      <Table mt={8}>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {workers.map((worker) => (
            <Tr key={worker.id}>
              <Td>{worker.firstName}</Td>
              <Td>{worker.lastName}</Td>
              <Td>{worker.email}</Td>
              <Td>{worker.phoneNumber}</Td>
              <Td>
                <Button size="sm" colorScheme="red" onClick={() => handleRemoveWorker(worker.id)}>
                  Remove
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ManageWorkers;
