import { ApiKey } from "../apiKey/ApiKey";
import { Credential } from "../credential/Credential";
import { JsonValue } from "type-fest";
import { Webhook } from "../webhook/Webhook";

export type AppModel = {
  apiKey?: Array<ApiKey>;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  createdAt: Date;
  credentials?: Array<Credential>;
  dirName: string;
  id: string;
  keys: JsonValue;
  updatedAt: Date;
  webhook?: Array<Webhook>;
};
