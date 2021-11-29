import React from 'react';
import moment from 'moment';

import styles from './Ticket.module.scss';
import { Segment, Item } from '../../shared/interface';

function Ticket(props: { ticket: Item; }) {
  const { ticket } = props;

  return (
    <div className={styles['Tickets__box']}>
      <div className={styles['Tickets__ticket']}>
        <div className={`${styles['Tickets__ticket-row']} ${styles['Tickets__ticket-row_between']}`}>
          <div className={styles['Tickets__ticket-price']}>{ticket.price}</div>
          <div className={styles['Tickets__ticket-logo']}>
            <div className={`${styles['Tickets__ticket-logo-image']} image`}>
              <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="Airlines"/>
            </div>
          </div>
        </div>
        { ticket.segments.map((segment: Segment, index: number) =>
          <div key={index} className={styles['Tickets__ticket-row']}>
            <div className={styles['Tickets__ticket-col']}>
              <div className={styles['Tickets__ticket-title']}>{segment.origin} – {segment.destination}</div>
              <div className={styles['Tickets__ticket-value']}>{`${moment(segment.date).format('HH:mm')} - ${moment(segment.date).add(segment.duration, 'minutes').format('HH:mm')}`}</div>
            </div>
            <div className={styles['Tickets__ticket-col']}>
              <div className={styles['Tickets__ticket-title']}>В пути</div>
              <div className={styles['Tickets__ticket-value']}>
                {`${Math.floor(moment.duration(segment.duration, 'm').asHours())}ч ${Math.floor(moment.duration(segment.duration, 'm').minutes())}м`}
              </div>
            </div>
            {
              segment.stops.length ?
                <div className={styles['Tickets__ticket-col']}>
                  <div className={styles['Tickets__ticket-title']}>{segment.stops.length} пересадки</div>
                  <div className={styles['Tickets__ticket-value']}>{segment.stops.map((stop: string) => `${stop} `)}</div>
                </div> : null
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Ticket;
