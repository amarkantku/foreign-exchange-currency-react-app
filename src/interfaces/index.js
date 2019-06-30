import Api from '../ApiService';
export const callForexRateApi = baseCurrency => {
    return Api.get(process.env.REACT_APP_API_URL, {
        base: baseCurrency
    }).then(exchangeRatesData => exchangeRatesData);
};
