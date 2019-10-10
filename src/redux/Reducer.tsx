import { combineReducers, AnyAction } from "redux";
import { ActionTypes } from "./ActionsTypes";
import { AccountInfo } from "../models/AccountInfo";
import mockData from "../data/accountData";

function accountInfo(state: AccountInfo = mockData, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.ADD_ACCOUNT_ITEM:
            break;
        case ActionTypes.EDIT_ACCOUNT_ITEM:
            break;
        case ActionTypes.DELETE_ACCOUNT_ITEM:
            break;
        case ActionTypes.MOVE_ACCOUNT_ITEM:
            break;
        default: return state;
    }
}

const rootReducer = combineReducers({ accountInfo });

export default rootReducer;