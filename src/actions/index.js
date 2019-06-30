import * as types from '../actionTypes';
export const addCurrency = currency => ({
    type: types.ADD_CURRENCY,
    payload: {
        currency
    }
});
export const setBaseCurrency = ({ currency }) => ({
    type: types.SET_BASE_CURRENCY,
    payload: {
        currency
    }
});
export const removeCurrency = id => ({
    type: types.REMOVE_CURRENCY,
    payload: {
        id
    }
});
export const setAmount = amount => ({
    type: types.ADD_CURRENCY_AMOUNT,
    payload: {
        amount
    }
})

export const getCurrencyExchangeRates = () => ({
    type: types.GET_CURRENCY_EXCHANGE_RATES
})