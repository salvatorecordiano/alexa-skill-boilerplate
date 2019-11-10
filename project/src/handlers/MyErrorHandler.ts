import { HandlerInput, ErrorHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model"

export class MyErrorHandler implements ErrorHandler {
    canHandle(handlerInput : HandlerInput, error : Error ) : boolean {
      return true;
    }
    
    handle(handlerInput : HandlerInput, error : Error) : Response {
      console.log(`Error handled: ${error.message}`);
  
      return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please say again.')
        .reprompt('Sorry, I can\'t understand the command. Please say again.')
        .getResponse();
    }
  };
