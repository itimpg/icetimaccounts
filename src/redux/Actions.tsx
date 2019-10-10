import { AnyAction } from 'redux';
import { AccountItem } from "../models/AccountItem";
import { ActionTypes } from './ActionsTypes';

export function AddAccountItem(item: AccountItem): AnyAction {
    return{
        type: ActionTypes.ADD_ACCOUNT_ITEM,
        item
    }
}

export function EditAccountItem(item: AccountItem): AnyAction {
    return{
        type: ActionTypes.EDIT_ACCOUNT_ITEM,
        item
    }
}

export function DeleteAccountItem(key: number): AnyAction {
    return{
        type: ActionTypes.DELETE_ACCOUNT_ITEM,
        key
    }
}

export function MoveAccountItemToIceTimAccount(item: AccountItem): AnyAction {
    return{
        type: ActionTypes.MOVE_ACCOUNT_ITEM,
        item
    }
}