import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col, Card, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import AddCurrency from './AddCurrency/AddCurrency';
import CardInfo from '../component/Card/CardInfo';
import './App.css';

class App extends Component {
  state = {
    buttonText: 'Add More Currencies',
    addMoreCurrency: false,
  };
  static propTypes = {
    baseCurrency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    forexData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })).isRequired,
    getCurrencyExchangeRates: PropTypes.func.isRequired,
    addCurrency: PropTypes.func.isRequired,
    currenciesCard: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  constructor(props) {
    super(props);
    if (process.env.REACT_APP_BASE_CURRENCY && !props.baseCurrency) {
      this.initComponent();
    }
  }
  initComponent() {
    this.props.setBaseCurrency({ currency: process.env.REACT_APP_BASE_CURRENCY });
  }
  componentDidMount() {
    this.props.getCurrencyExchangeRates();
  }

  updateAmount = (e) => {
    this.props.setAmount(e.target.value);
  }
  toggleMoreCurrency = () => {
    this.setState((state) => ({ addMoreCurrency: !state.addMoreCurrency }));
  }
  render() {
    const { amount, forexData, currenciesCard, baseCurrency } = this.props;
    const { addMoreCurrency } = this.state;
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h3><center>Foreign Exchange Currency ReactJs App</center></h3>
            <div className="cardContainer">
              <p>Enter amount: </p>
              <Input type='number' min={1} onChange={this.updateAmount} defaultValue={amount} />
              <div style={{ marginTop: 20 }}>
                <Card title='USD - United States Dollars' extra={<span>{amount}</span>}>
                  <div>
                    {currenciesCard.map((data, index) => {
                      return (
                        <CardInfo 
                          baseCurrency={baseCurrency}
                          removeCurrencyAction={this.props.removeCurrency}
                          cardData={data}
                          key={index}
                          index={index}/>
                        )
                    })}
                    {!addMoreCurrency && (
                      <Button type="primary" block onClick={this.toggleMoreCurrency}>
                        <Icon type="plus-circle" />
                        {this.state.buttonText.toUpperCase()}
                      </Button>
                    )}
                    {addMoreCurrency && (<AddCurrency
                      forexData={forexData}
                      amount={amount}
                      addCurrencyAction={this.props.addCurrency}
                      toggleMoreCurrency={this.toggleMoreCurrency}/>)}
                  </div>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
