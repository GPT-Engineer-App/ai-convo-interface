import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const mockAIResponse = (message) => {
  // Simulate an AI response
  return `AI: You said "${message}"`;
};

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    const aiMessage = { sender: "ai", text: mockAIResponse(input) };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid #e2e8f0" borderRadius="md" padding={4}>
          {messages.map((msg, index) => (
            <Box key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"} marginBottom={2}>
              <Text bg={msg.sender === "user" ? "blue.500" : "gray.200"} color={msg.sender === "user" ? "white" : "black"} borderRadius="md" padding={2}>
                {msg.text}
              </Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
