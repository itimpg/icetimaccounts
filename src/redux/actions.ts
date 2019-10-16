import { AnyAction, Dispatch } from "redux";
import { AccountItem } from "../models/accountItem";
import { ActionTypes } from "./actionsTypes";
import { database } from "../database/connection";

export function doLoadAccountItem(yearMonthId: number) {
  return (dispatch: Dispatch) => {
  };
}

export function doAddAccountItem(item: AccountItem, yearMonthId: number) {
  return (dispatch: Dispatch) => {};
}

export function doUpdateAccountItem(item: AccountItem, yearMonthId: number) {
  return (dispatch: Dispatch) => {};
}

export function doDeleteAccountItem(item: AccountItem, yearMonthId: number) {
  return (dispatch: Dispatch) => {};
}

export function AddAccountItem(item: AccountItem): AnyAction {
  return {
    type: ActionTypes.ADD_ACCOUNT_ITEM,
    item
  };
}

export function EditAccountItem(item: AccountItem): AnyAction {
  return {
    type: ActionTypes.EDIT_ACCOUNT_ITEM,
    item
  };
}

export function DeleteAccountItem(key: number): AnyAction {
  return {
    type: ActionTypes.DELETE_ACCOUNT_ITEM,
    key
  };
}

export function MoveAccountItemToIceTimAccount(item: AccountItem): AnyAction {
  return {
    type: ActionTypes.MOVE_ACCOUNT_ITEM,
    item
  };
}
