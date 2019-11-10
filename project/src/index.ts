import { SkillBuilders } from "ask-sdk-core";

import { LaunchRequestHandler } from "./handlers/LaunchRequestHandler"
import { HelloWorldIntentHandler } from "./handlers/HelloWorldIntentHandler"
import { HelpIntentHandler } from "./handlers/HelpIntentHandler"
import { CancelAndStopIntentHandler } from "./handlers/CancelAndStopIntentHandler"
import { SessionEndedRequestHandler } from "./handlers/SessionEndedRequestHandler"
import { MyErrorHandler } from "./handlers/MyErrorHandler"

export const handler = SkillBuilders.custom()
.addRequestHandlers(
  new LaunchRequestHandler,
  new HelloWorldIntentHandler,
  new HelpIntentHandler,
  new CancelAndStopIntentHandler,
  new SessionEndedRequestHandler,
)
.addErrorHandlers(new MyErrorHandler)
.lambda();
