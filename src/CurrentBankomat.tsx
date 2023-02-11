import React from 'react';
import {MoneyType} from "./App";
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <>
            <BanknoteStyle
                key={props.money.number}
                //передаем пропсы для BanknoteStyle
                color = {props.money.banknotes}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </BanknoteStyle>
            {/*{props.money.banknotes==='Dollars'*/}
            {/*    ? <DollarsStyle key={props.money.number}>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </DollarsStyle>*/}
            {/*    :<RubblesStyle key={props.money.number}>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </RubblesStyle>*/}
            {/*}*/}

        </>
    );
};

//можно стили выносить в отдельный файл, а потом экспортировать
const BanknoteStyle = styled.div`
  background-color: ${props => {
      //если в пропсах придет 'Dollars', то цвет будет 'chartreuse', иначе '#61dafb'
      if(props.color === 'Dollars'){
          return 'chartreuse'
      }
      else{
          return '#61dafb'
      }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`
//первоначальный вариант стилей, когда отдельно отрисовывали (без пропсов)
const DollarsStyle = styled.div`
  background-color: chartreuse;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const RubblesStyle = styled.div`
  background-color: #61dafb;
  width: 400px;
  height: 200px;
  margin: 10px;
`