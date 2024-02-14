import { ApiKey as TApiKey } from "../api/apiKey/ApiKey";

export const APIKEY_TITLE_FIELD = "hashedKey";

export const ApiKeyTitle = (record: TApiKey): string => {
  return record.hashedKey?.toString() || String(record.id);
};
