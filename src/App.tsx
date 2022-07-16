import { useCallback, useState } from 'react';
import FullCalendar, {
  DayCellContentArg,
  EventApi,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS } from './event-utils';
import timeGridPlugin from '@fullcalendar/timegrid';
import './App.css';

function App() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleEvents = useCallback((events: EventApi[]) => {
    console.log('events:', events); // 確認用
    setCurrentEvents(events);
  }, []);

  // const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
  //   let title = prompt('イベントのタイトルを入力してください')?.trim();
  //   let calendarApi = selectInfo.view.calendar;
  //   calendarApi.unselect();
  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay,
  //     });
  //   }
  // }, []);

  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (
      window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)
    ) {
      clickInfo.event.remove();
    }
  }, []);

  const renderEventContent = (eventContent: EventContentArg) => (
    <>
      <div>
        <img className="eventimage" src={eventContent.event.url} alt="stamp" />
      </div>
    </>
  );

  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          selectable={false}
          editable={false}
          initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale="ja"
          eventsSet={handleEvents}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          dayMaxEvents={true}
          navLinks={true}
          businessHours={false}
          handleWindowResize={true}
          eventTimeFormat={{ hour: '2-digit', minute: '2-digit' }}
          dayCellContent={(event: DayCellContentArg) =>
            (event.dayNumberText = event.dayNumberText.replace('日', ''))
          }
        />
      </div>
      <div className="mask"></div>
    </div>
  );
}

export default App;
