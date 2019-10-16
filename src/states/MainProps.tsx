import { AccountItem } from "../models/accountItem";
import { AccountInfo } from "../models/accountInfo";
import { AnyAction } from "redux";

export interface MainProps {
    accountInfo: AccountInfo,
    AddAccountItem: (item: AccountItem) => AnyAction;
    EditAccountItem: (item: AccountItem) => AnyAction;
    DeleteAccountItem: (key: number) => AnyAction;
    MoveAccountItemToIceTimAccount: (item: AccountItem) => AnyAction;
}