import { Inngest } from "inngest";
import { serve } from "inngest/express";

// Create an Inngest client
export const inngest = new Inngest({ 
  id: "hacker-movie-app",
  name: "Hacker Movie App" 
});

// Define background functions
export const functions = [
  // Example function for processing bookings
  inngest.createFunction(
    { name: "Process Booking" },
    { event: "booking.created" },
    async ({ event, step }) => {
      // TODO: Implement booking processing logic
      await step.run("process-booking", async () => {
        console.log("Processing booking:", event.data);
        // Add your booking processing logic here
      });
    }
  ),

  // Example function for sending confirmation emails
  inngest.createFunction(
    { name: "Send Confirmation Email" },
    { event: "booking.confirmed" },
    async ({ event, step }) => {
      // TODO: Implement email sending logic
      await step.run("send-email", async () => {
        console.log("Sending confirmation email for booking:", event.data);
        // Add your email sending logic here
      });
    }
  ),

  // Example function for cleanup tasks
  inngest.createFunction(
    { name: "Cleanup Expired Bookings" },
    { cron: "0 0 * * *" }, // Daily at midnight
    async ({ step }) => {
      // TODO: Implement cleanup logic
      await step.run("cleanup", async () => {
        console.log("Running cleanup for expired bookings");
        // Add your cleanup logic here
      });
    }
  )
];

export default { inngest, functions }; 