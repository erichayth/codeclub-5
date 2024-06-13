//site https://codeclub4.erichayth.com/api/hello

import { NextRequest, NextResponse } from 'next/server';

// Define the runtime environment
export const runtime = 'edge';

// Define the response mapping
const responseArray: { [key: number]: string } = {
  1: "You're contestant number 1",
  2: "You're contestant number 2",
  3: "You're contestant number 3",
  4: "You're contestant number 4"
};

// Function to generate a random number and return the corresponding message
function getRandomMessage(): string {
  const id = Math.floor(Math.random() * 4) + 1; // Generate a random number between 1 and 4
  return responseArray[id]; // Return the message associated with the random number
}

// API route handler function
export async function GET(request: NextRequest): Promise<NextResponse> {
  const responseMessage = getRandomMessage(); // Call the function to get a random message
  return new NextResponse(responseMessage, {
    headers: { 'content-type': 'text/plain' }
  });
}