import { AccountItem } from "../models/AccountItem";
import { AccountInfo } from "../models/AccountInfo";
import { AnyAction } from "redux";

export interface MainProps {
    accountInfo: AccountInfo,
    AddAccountItem: (item: AccountItem) => AnyAction;
    EditAccountItem: (item: AccountItem) => AnyAction;
    DeleteAccountItem: (key: number) => AnyAction;
    MoveAccountItemToIceTimAccount: (item: AccountItem) => AnyAction;
}