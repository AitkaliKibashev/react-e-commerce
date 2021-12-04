import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemActionCreators from "../store/action-creators/item";

export const UseActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(itemActionCreators, dispatch);
};
