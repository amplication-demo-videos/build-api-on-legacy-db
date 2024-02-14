import { ApiKeyCreateNestedManyWithoutAppModelsInput } from "./ApiKeyCreateNestedManyWithoutAppModelsInput";
import { CredentialCreateNestedManyWithoutAppModelsInput } from "./CredentialCreateNestedManyWithoutAppModelsInput";
import { InputJsonValue } from "../../types";
import { WebhookCreateNestedManyWithoutAppModelsInput } from "./WebhookCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  apiKey?: ApiKeyCreateNestedManyWithoutAppModelsInput;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  credentials?: CredentialCreateNestedManyWithoutAppModelsInput;
  dirName: string;
  keys?: InputJsonValue;
  webhook?: WebhookCreateNestedManyWithoutAppModelsInput;
};
