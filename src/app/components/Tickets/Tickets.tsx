import React, { useContext } from 'react';

import styles from './Tickets.module.scss';
import { FilterTypes, Item, StopTypes } from '../../shared/interface';
import { MyContext } from '../../../App';
import Ticket from '../Ticket/Ticket';

function Tickets() {
  const { filterType, tickets, ticketsCount, stops } = useContext(MyContext);

  let filteredTickets: Item[] = [];

  switch (filterType) {
    case FilterTypes.Lower: {
      filteredTickets = tickets.sort((a: Item, b: Item) => a.price - b.price)
      break;
    }

    case FilterTypes.Faster: {
      filteredTickets = tickets.sort((a: Item, b: Item) => a.segments[0].duration - b.segments[0].duration);
      break;
    }

    case FilterTypes.Optimal: {
      filteredTickets = tickets;
      break;
    }
  }

  switch (stops) {
    case StopTypes.All: {
      filteredTickets = tickets;
      break;
    }

    case StopTypes.Without: {
      filteredTickets = tickets.filter((ticket: Item) => ticket.segments.some(segment => segment.stops.length === StopTypes.Without));
      break;
    }

    case StopTypes.One: {
      filteredTickets = tickets.filter((ticket: Item) => ticket.segments.some(segment => segment.stops.length === StopTypes.One));
      break;
    }

    case StopTypes.Two: {
      filteredTickets = tickets.filter((ticket: Item) => ticket.segments.some(segment => segment.stops.length === StopTypes.Two));
      break;
    }

    case StopTypes.Three: {
      filteredTickets = tickets.filter((ticket: Item) => ticket.segments.some(segment => segment.stops.length === StopTypes.Three));
      break;
    }
  }

  const renderTicket = filteredTickets && filteredTickets.length ?
    filteredTickets.slice(0, ticketsCount).map((ticket: Item, index: number) => <Ticket key={index} ticket={ticket} />) : null

  return (
    <div className={styles['Tickets__box']}>
      {renderTicket}
    </div>
  )
};

export default Tickets;
