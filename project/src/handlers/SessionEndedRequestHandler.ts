import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response, SessionEndedRequest } from "ask-sdk-model"

export class SessionEndedRequestHandler implements RequestHandler {
    canHandle(handlerInput : HandlerInput) : boolean {
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    }
    
    handle(handlerInput : HandlerInput) : Response {
      console.log(`Session ended with reason: ${(handlerInput.requestEnvelope.request as SessionEndedRequest).reason}`);
  
      return handlerInput.responseBuilder.getResponse();
    }
  };
