import { connect } from 'react-redux';
import App from '../component/App';

import {
    setBaseCurrency,
    setAmount,
    addCurrency,
    removeCurrency,
    getCurrencyExchangeRates,
} from '../actions';

const mapStateToProps = ({ currencies }) => ({
    baseCurrency: currencies.baseCurrency,
    forexData: currencies.forexData || [],
    amount: Number(currencies.amount),
    currenciesCard: currencies.currenciesCard || [],
});

const mapDispatchToProps = {
    setBaseCurrency,
    setAmount,
    addCurrency,
    removeCurrency,
    getCurrencyExchangeRates
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
