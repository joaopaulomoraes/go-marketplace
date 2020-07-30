import React, { memo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

type TotalItemsData = {
  cartTotal: number;
  totalItemsInCart: number;
};

const TotalItems: React.FC<TotalItemsData> = ({
  cartTotal = 0,
  totalItemsInCart = 0,
}) => (
  <TotalProductsContainer>
    <FeatherIcon name="shopping-cart" color="#fff" size={24} />
    <TotalProductsText>{`${totalItemsInCart} itens`}</TotalProductsText>
    <SubtotalValue>{cartTotal}</SubtotalValue>
  </TotalProductsContainer>
);

export default memo(TotalItems);
