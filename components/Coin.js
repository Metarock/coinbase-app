import React from 'react';
import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';

const Coin = ({ coin }) => {
    return (
        <Wrapper>
            <div>
                <div style={{ flex: 3 }}>
                    {/* Coin details */}
                    <NameCol>
                        {/* Coin Icon */}
                        <CoinIcon>
                            {/* Get coin logo from the coino props */}
                            <Image src={coin.logo} alt={coin.name} />
                        </CoinIcon>
                        {/* Coin names */}
                        <div>
                            <Primary>{coin.name}</Primary>
                            <Secondary>{coin.sign}</Secondary>
                        </div>
                    </NameCol>
                </div>
                <div style={{ flex: 2 }}>
                    {/* Display price */}
                    <Primary>
                        {'$'}
                        {coin.balanceUsd}
                    </Primary>
                    {/* Display crypto sign and amount */}
                    <Secondary>
                        {coin.balanceCoin} {coin.sign}
                    </Secondary>
                </div>
                <div style={{ flex: 1 }}>
                    <Primary>
                        {'$'}
                        {coin.priceUsd}
                    </Primary>
                    {/* display price changes whether positive or negative depending if the change is less than 0 */}
                    <div
                        style={{
                            color: coin.change < 0 ? '#f0616d' : '#26ad75',
                        }}
                    >
                        {coin.change > 0 && '+'}
                        {coin.change}%
                    </div>
                    {/* How much of allocation of our budget is in it; meaning how much the user has for that crypto */}
                    <div style={{ flex: 1 }}>{coin.allocation}%</div>
                    <div style={{ flex: 0 }}>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Coin;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
`;

const NameCol = styled.div`
    display: flex;
    align-items: center;
`;

const CoinIcon = styled.div`
    width: 1.8rem;
    margin-right: 1rem;
`;

const Primary = styled.div`
    margin-bottom: 0.1rem;
`;

const Secondary = styled.div`
    color: #8a919e;
    font-size: 0.8rem;
`;
