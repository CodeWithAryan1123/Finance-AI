// Test syntax checking for the generateAIResponse function
const generateAIResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('test')) {
    return `This is a test response with ${message}`;
  }
  
  return "Default response";
};

console.log(generateAIResponse("test message"));