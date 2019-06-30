import { fork, all } from 'redux-saga/effects';
import ForeignExchangeCurrencySaga from './ForeignExchangeCurrencySaga';

export default function* rootSaga() {
    yield all([
        fork(ForeignExchangeCurrencySaga),
    ])
}
