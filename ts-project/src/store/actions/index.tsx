import * as constants from '../../constants'

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface NameChange {
  type: constants.NAME_CHANGE;
  payload: string;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | NameChange;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}

//自己加的带payload的action
export function nameChange(value: string): NameChange {
  return {
    type: constants.NAME_CHANGE,
    payload: value
  }
}
