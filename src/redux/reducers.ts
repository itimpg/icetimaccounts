import { combineReducers, AnyAction } from "redux";
import { ActionTypes } from "./actionsTypes";
import { AccountInfo } from "../models/accountInfo";

function accountInfo(state: any = {}, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.ADD_ACCOUNT_ITEM:
      break;
    case ActionTypes.EDIT_ACCOUNT_ITEM:
      break;
    case ActionTypes.DELETE_ACCOUNT_ITEM:
      break;
    case ActionTypes.MOVE_ACCOUNT_ITEM:
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ accountInfo });

export default rootReducer;
