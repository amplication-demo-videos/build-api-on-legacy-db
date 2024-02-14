import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";

export type AppModelWhereInput = {
  apiKey?: ApiKeyListRelationFilter;
  createdAt?: DateTimeFilter;
  credentials?: CredentialListRelationFilter;
  dirName?: StringFilter;
  id?: StringFilter;
  keys?: JsonFilter;
  updatedAt?: DateTimeFilter;
  webhook?: WebhookListRelationFilter;
};
