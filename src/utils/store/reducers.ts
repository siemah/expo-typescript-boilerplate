import { Action, GlobalReducerActionType, GlobalReducerState } from "../../types/reducer";

/**
 * global reducer
 * @param state current state
 * @param action action to perform
 */
export function globalReducer(state: GlobalReducerState, action: Action<GlobalReducerActionType, any>) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'ERROR':
      return { ...state, loading: false, errors: action.payload }
    case 'SUCCESS':
      return { ...state, loading: false, errors: {}, global: action.payload };
    case 'SET_FIELD':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value
        }
      };
    case 'SET_FIELD_WITH_LOADING':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value,
        },
        loading: action.payload.loading,
      };
    case 'SET_FIELDS':
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload
        },
      };
    case 'RESET_STATE':
      return action.payload;
    case 'SET_LIST':
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    case 'SET_LIST_WITH_MESSAGE':
      return {
        ...state,
        loading: false,
        global: action.payload.message,
        data: action.payload.data,
      };
    case 'SET_FIELD_WITH_MESSAGE':
      return {
        ...state,
        loading: false,
        errors: {},
        global: action.payload.message,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value
        },
      };
    case 'SET_STATE':
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
}