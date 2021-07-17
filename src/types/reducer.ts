export interface GlobalReducerState {
  errors: any;
  loading: boolean;
  global: string;
  data: any;
}
export interface Action<T, K> {
  type: T;
  payload: K;
}
export type GlobalReducerActionType = 'SET_LOADING' | 'ERROR' | 'SUCCESS' | 'SET_FIELD' | 'SET_FIELDS' | 'SET_LIST' | 'SET_LIST_WITH_MESSAGE' | 'SET_FIELD_WITH_MESSAGE' | 'RESET_STATE' | 'SET_FIELD_WITH_LOADING' | 'SET_STATE';