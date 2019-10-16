import { AccountItem } from "./accountItem";

export interface AccountInfo {
  yearMonthId: number;
  iTimItems: AccountItem[];
  iceItems: AccountItem[];
  iceTimItems: AccountItem[];
}
