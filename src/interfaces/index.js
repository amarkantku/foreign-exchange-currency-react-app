import Api from '../ApiService';
export const callForexRateApi = baseCurrency => {
    return Api.get('https://api.exchangeratesapi.io/latest', {
        base: baseCurrency
    }).then(exchangeRatesData => exchangeRatesData);
};
