import {onRequest} from "firebase-functions/v2/https";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";

export const healthCheck = onRequest((request, response) => {
  logger.info("Request sent to function ;)", {structuredData: true});
  response.send("Function is up and running",);
});

export const makeUppercase = onDocumentCreated("/users/{last}", (event) => {
  logger.info(event, {structuredData: true});

  const original = event.data?.data().original;

  // Access the parameter `{documentId}` with `event.params`
  logger.log("Uppercasing", event.params.last, original);

  const uppercase = original.toUpperCase();
  return event.data?.ref.set({uppercase}, {merge: true});
});
