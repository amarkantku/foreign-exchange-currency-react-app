import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import './CardInfo.css';

const CardInfo = ({cardData, removeCurrencyAction, baseCurrency, index}) => {
    return (
        <div key={cardData.id + '_' + index} className="cardWrapper">
            <div className="cardBody">
                <div className="cardTitle">
                    <p className="cardTitle left">{cardData.id}</p>
                    <p className="cardTitle right">{cardData.value}</p>
                </div>
                <div className="cardText">
                    <p><strong>{cardData.id} - {cardData.name}</strong></p>
                    <p>1 {baseCurrency} = {cardData.id} {cardData.rate}</p>
                </div>
            </div>
            <div className="cardButtonContainer">
                <Button className='btnCardRemove' type="primary" block onClick={e => removeCurrencyAction(cardData.id)}>
                    <Icon type="minus-circle" />
                </Button>
            </div>
        </div>
    );
}
CardInfo.propTypes = {
    cardData: PropTypes.object.isRequired,
    removeCurrencyAction: PropTypes.func.isRequired,
    baseCurrency: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default CardInfo;
