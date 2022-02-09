// import http from "http";
import "dotenv/config";
// import app from "./app";
// import { connectDb, disconnectDb } from "./db";

const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});
app.message("hello", async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say(`Hey there <@${message.user}>!`);
});
app.message("hello Mr bot", async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say({
		blocks: [
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: `Hey there <@${message.user}>!`,
				},
				accessory: {
					type: "button",
					text: {
						type: "plain_text",
						text: "Click Me",
					},
					action_id: "button_click",
				},
			},
		],
		text: `Hey there <@${message.user}>!`,
	});
});

(async () => {
	// Start your app
	await app.start(process.env.PORT || 3000);

	console.log("⚡️ Bolt app is running!");
})();


// const port = parseInt(process.env.PORT || "3000");

// const server = http.createServer(app);

// server.on("listening", () => {
// 	const addr = server.address();
// 	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
// 	// eslint-disable-next-line no-console
// 	console.log(`Listening on ${bind}`);
// });

// process.on("SIGTERM", () => server.close(() => disconnectDb()));

// connectDb().then(() => server.listen(port));

