import {config} from "./config";

export class Demo {
    greeting(){
        return config.default_greeting_message;
    }
}