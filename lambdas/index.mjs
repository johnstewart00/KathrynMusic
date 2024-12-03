import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

export async function handler(event) {
  const { name, phone, schedule } = JSON.parse(event.body);

  const emailParams = {
    Source: "stew.john560@gmail.com", // Replace with your verified sender email
    Destination: {
      ToAddresses: ["stew.john560@gmail.com"], // Replace with the recipient email
    },
    Message: {
      Subject: { Data: "New Piano Lesson Schedule" },
      Body: {
        Text: {
          Data: `You have a new piano lesson request.
          
Name: ${name}
Phone: ${phone}

Schedule:
${schedule
  .map((slot) => `- ${slot.day}: ${slot.startTime} to ${slot.endTime}`)
  .join("\n")}`,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(emailParams);
    const response = await ses.send(command);
    console.log("Email sent successfully:", response);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error }),
    };
  }
}
