// import { connectDb, disconnectDb } from "./db.js";
const { App } = require("@slack/bolt");
import dotenv from "dotenv";
import { query } from "express";
dotenv.config({ path: __dirname + "/.env" });

// connectDb();
const SLACK_BOT_TOKEN="xoxb-3032928636562-3072376446770-wnInzlczCIUGFWzwPUr6SCKy";
const SLACK_SIGNING_SECRET="2a561b82321bd44162cb6e2570809d73";
const SLACK_APP_TOKEN="xapp-1-A0324BGAFD1-3085070057969-2e3c128cdbdfaffbe5549dbf2e40ec34fcf3acfdf76af47a3102cc1da279cf2d";

const app = new App({
	token: SLACK_BOT_TOKEN,
	signingSecret: SLACK_SIGNING_SECRET,
	appToken: SLACK_APP_TOKEN,
	socketMode: true,
	port: process.env.PORT || 3000,
});
// SHORTCUT
// ADD command permission

app.shortcut("algorith", async ({ shortcut, ack, client, logger }) => {
	try {
		// Acknowledge shortcut request
		await ack();
		const allData = await query.query("select * from energisers where id = 1");
		console.log(allData);
		// Call the views.open method using one of the built-in WebClients
		const result = await client.views.open({
			trigger_id: shortcut.trigger_id,
			view: {
				type: "modal",
				title: {
					type: "plain_text",
					text: "My App",
				},
				close: {
					type: "plain_text",
					text: "Close",
				},
				blocks: [
					{
						type: "section",
						text: {
							type: "mrkdwn",
							text: "About the simplest modal you could conceive of :smile:\n\nMaybe <https://api.slack.com/reference/block-kit/interactive-components|*make the modal interactive*> or <https://api.slack.com/surfaces/modals/using#modifying|*learn more advanced modal use cases*>.",
						},
					},
					{
						type: "context",
						elements: [
							{
								type: "mrkdwn",
								text: "Psssst this modal was designed using <https://api.slack.com/tools/block-kit-builder|*Block Kit Builder*>",
							},
						],
					},
				],
			},
		});

		logger.info(result);
	} catch (error) {
		logger.error(error);
	}
});
// Listen for view_submission modal events
// Handle a view_submission request

// Listens for messages containing "knock knock" and responds with an italicized "who's there?"
app.message(/:cry:/g, async ({ message, say }) => {
	console.log(message);
	await say(
		`_Please smile <@${message.user}> :smile: There is always a reason to smile_`
	);
});
app.message("knock knock", async ({ message, say }) => {
	await say("_Who's there?_");
});

app.message(/energiser-bot/i, async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say({
		blocks: [
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: ` Hey there <@${message.user}>,You can click on this link to go to <https://algorithm-doctors-energisersv1.herokuapp.com/|Algorithm Docs Energisers>\n\n and here for <https://syllabus.codeyourfuture.io/|CYF Syllabus>`,
				},
			},
		],
		text: `Hey there <@${message.user}>!`,
	});
});
app.action("button_click", async ({ body, ack, say }) => {
	// Acknowledge the action
	await ack();
	await say(`<@${body.user.id}> clicked the button`);
});
app.message("hello there bot", async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say(`Hey there <@${message.user}>!`);
});

(async () => {
	// Start your app
	const port = process.env.PORT || 3000;
	await app.start(port);

	console.log("⚡️ Bolt app is running on port:" + port);
})();
