import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, '');

export const createEventId = () => String(eventGuid++);

export const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: createEventId(),
  //   title: '',
  //   start: todayStr,
  //   url: './images/stamp_blue.png',
  // },
  {
    id: createEventId(),
    // title: 'Timed event',
    start: '2022-07-15T12:00:00',
    url: 'https://hironius.com/stamp_blue.png',
  },
  {
    id: createEventId(),
    // title: 'Timed event',
    start: todayStr + 'T12:00:00',
    url: 'https://hironius.com/stamp_blue.png',
  },
];
