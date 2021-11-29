import React, { createContext, useEffect, useState } from 'react';

import './App.scss';
import { FilterTypes, StopTypes } from './app/shared/interface';
import SideBar from './app/components/SideBar/SideBar';
import Filters from './app/components/Filters/Filters';
import Tickets from './app/components/Tickets/Tickets';

const getSearchId = () => {
  return fetch("https://front-test.beta.aviasales.ru/search")
    .then((response) => response.json())
    .then(({ searchId }) => getTickets(searchId))
    .catch (error => console.error(error));
}

const getTickets = (searchId: string) => {
  return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    .then((response) => response.json())
    .then(data => data)
    .catch (error => console.error(error));
}

export const MyContext = createContext({
  stop: false,
  tickets: [],
  ticketsCount: 5,
  filterType: FilterTypes.Lower,
  stops: StopTypes.All
});

function App() {
  const [data, getTicketsData] = useState({ stop: false, tickets: [] });
  const [count, updateCounter] = useState(5);
  const [type, updateType] = useState(FilterTypes.Lower);
  const [stops, updateStops] = useState(StopTypes.All);

  useEffect(() => {
    const fetchDataTicket = async () => {
      getTicketsData(await getSearchId())
    };

    fetchDataTicket();
  }, []);


  function changeTicketsCount() {
    updateCounter(prevCount => prevCount + 5);
  }

  return (
    <div className="my-app">
      <header className="header">
        <div className="content">
          <div className="header__logo image">
            <img src="" alt="logo"/>
          </div>
        </div>
      </header>
      <section className="aviasales">
        <MyContext.Provider value={{
          stop: data.stop,
          tickets: data.tickets,
          ticketsCount: count,
          filterType: type,
          stops
        }}>
          <div className="content">
            <SideBar updateStops={updateStops} />
            <div className="aviasales__wrapper">
              <Filters updateType={updateType} />
              <Tickets />
              <div onClick={changeTicketsCount}  className="aviasales__more">Показать еще 5 билетов!</div>
            </div>
          </div>
        </MyContext.Provider>
      </section>
    </div>
  );
}

export default App;
