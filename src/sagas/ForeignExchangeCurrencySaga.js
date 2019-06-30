import { all, takeLatest, select, put } from 'redux-saga/effects';
import get from 'lodash/get';
import { callForexRateApi } from '../interfaces';
import { SET_CURRENCY_EXCHANGE_RATES } from '../actionTypes';
import currencyMockData from '../mock/currency'; 

const getBaseCurrency = state => get(state, 'currencies.baseCurrency');

export function* getCurrencyExchangeRatesSaga(action) {
    try {
        const baseCurrency = yield select(getBaseCurrency);
        const response = yield callForexRateApi(baseCurrency);
        const getCurrencyFormated = response && response.rates && Object.keys(response.rates).map(key => {
            return {
                id: key,
                rate: response.rates[key],
                name: currencyMockData[key],
            }
        });
        yield put({
            type: SET_CURRENCY_EXCHANGE_RATES, payload: {
                forexData: getCurrencyFormated
            }
        });
    } catch (err) {
        yield 1;
        console.error(err);
    }
}

export default function* root() {
    yield all([
        takeLatest('GET_CURRENCY_EXCHANGE_RATES', getCurrencyExchangeRatesSaga),
    ]);
}

