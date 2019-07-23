import Hello from '../components/Hello';
import * as actions from '../store/actions';
import {StoreState} from "../types";
import {connect} from "react-redux";
//文档中写的 Dispatch是从 react-redux中引入，但是看了声明文件，没有，redux的声明文件中才有
import {Dispatch} from "redux";
import {FormEvent} from "react";

export function mapStateToProps({enthusiasmLevel, languageName}: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    //试错：event事件需要从 react 包中引入
    languageNameChange: (event: FormEvent<HTMLInputElement>) => {
      //event事件对象中 event.target.value会报错，提示TS2339: Property 'value' does not exist on type 'EventTarget'.
      //搜了很长时间，才知道用currentTarget
      dispatch(actions.nameChange(event.currentTarget.value))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

