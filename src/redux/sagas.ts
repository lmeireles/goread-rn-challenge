import {
  all,
  call,
  put,
  SagaReturnType,
  takeLeading,
} from 'redux-saga/effects';
import { findRepositories } from '../services/api';
import { GET_REPOSITORIES, setRepositories } from './actions';

function* searchRepositories(action: any) {
  const { searchTerm, page } = action.payload;
  const response: SagaReturnType<typeof findRepositories> = yield call(
    findRepositories,
    searchTerm,
    page
  );
  if (response?.items?.length) {
    yield put(
      setRepositories(response.items, page, response.items.length >= 20)
    );
  } else {
    yield put(setRepositories([], 1, false));
  }
}

const sagas = [takeLeading(GET_REPOSITORIES, searchRepositories)];

export default function* rootSaga() {
  yield all([...sagas]);
}
