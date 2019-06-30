import React, { useState, useEffect } from 'react'
import { Select, Row, Button } from 'antd';
import './AddCurrency.css';

const { Option } = Select;

const renderForexOptions = (forexData, addCurrency, amount) => {
    return forexData.map((data, index) => <Option key={index} value={data.id}>{data.id}</Option>);
};

const AddCurrency = ({ amount, forexData, addCurrencyAction, toggleMoreCurrency }) => {
    const [currency, setCurrency] = useState('');
    const [isSubmitted, submitCurrency] = useState(false);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const cardData = forexData.filter(rate => rate.id === currency)[0] || {};
        cardData.value = Number(cardData.rate) * Number(amount);
        setCardData(cardData);
        submitCurrency(false);
    }, [amount, currency, forexData]);

    useEffect(() => {
        isSubmitted && cardData && addCurrencyAction(cardData);
        isSubmitted && cardData && toggleMoreCurrency();
    }, [isSubmitted, cardData, addCurrencyAction, toggleMoreCurrency]);

    return (
        <Row>
            <Select
                showSearch
                className="addCurrency"
                placeholder="Search / Enter Currency"
                onChange={(value) => setCurrency(value)}>
                {renderForexOptions(forexData)}
            </Select>
            <Button className="btnSubmit" value={true} type="primary" onClick={submitCurrency}>Submit</Button>
        </Row>
    )
}

export default AddCurrency
