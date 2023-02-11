import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue:BanknotsType)=>void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilterValue('All')// засетаем 'All'
    }

    const setDollars = () => {


        props.setFilterValue('Dollars')// засетаем 'Dollars'

    }

    const setRUBLS = () => {
        props.setFilterValue('RUBLS')// засетаем 'RUBLS'
    }

    return (
        <div>
            {/*внутри онклик можно просто указать название функции, которая вызовется при нажатии*/}
            <button onClick={setAll}>All</button>
            {/*также можно вызывать функцию, которая вызовет функцию, при этом в нее можно передать параметры (в данном случае мы не передаем ничего)*/}
            <button onClick={()=>setDollars()}>Dollars</button>
            {/*т.к. ничего не передает, то просто укажем название*/}
            <button onClick={setRUBLS}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

