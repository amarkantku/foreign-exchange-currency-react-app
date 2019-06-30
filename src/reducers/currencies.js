import { SET_CURRENCY_EXCHANGE_RATES, ADD_CURRENCY_AMOUNT,  SET_BASE_CURRENCY, ADD_CURRENCY, REMOVE_CURRENCY } from '../actionTypes';
const initialState = {
    baseCurrency: 'USD',
    amount: 1,
    forexData: [],
    currenciesCard: [],
};

export default function currencies(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENCY_EXCHANGE_RATES:
            return {
                ...state,
                forexData: action.payload.forexData
            }
        case SET_BASE_CURRENCY:
            return {
               ...state,
               baseCurrency: action.payload.currency
            }
        case ADD_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.payload.amount,
                currenciesCard: state.currenciesCard.map(data => {
                    return {
                        id: data.id,
                        name: data.name,
                        rate: data.rate,
                        value: data.rate * action.payload.amount
                    }
                })
            }
        case ADD_CURRENCY:
            return {
                ...state,
                currenciesCard: [...state.currenciesCard, action.payload.currency]
            }
        case REMOVE_CURRENCY:
            return {
                ...state,
                currenciesCard: state.currenciesCard.filter(currency =>
                    currency.id !== action.payload.id
                )
            }
        default:
            return state;
    }
};
