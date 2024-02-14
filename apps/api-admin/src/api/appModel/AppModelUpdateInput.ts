import { ApiKeyUpdateManyWithoutAppModelsInput } from "./ApiKeyUpdateManyWithoutAppModelsInput";
import { CredentialUpdateManyWithoutAppModelsInput } from "./CredentialUpdateManyWithoutAppModelsInput";
import { InputJsonValue } from "../../types";
import { WebhookUpdateManyWithoutAppModelsInput } from "./WebhookUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  apiKey?: ApiKeyUpdateManyWithoutAppModelsInput;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  credentials?: CredentialUpdateManyWithoutAppModelsInput;
  dirName?: string;
  keys?: InputJsonValue;
  webhook?: WebhookUpdateManyWithoutAppModelsInput;
};
