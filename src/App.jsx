import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
const now = new Date();
import { MdDateRange } from "react-icons/md";

function App() {
    const localizer = dayjsLocalizer(dayjs);
    const events = [
        {
            id: 1,
            title: 'Evento 1',
            start: new Date(2024, 4, 2),
            end: new Date(2024, 4, 5),
        },
        {
            id: 3,
            title: 'Evento 3',
            start: new Date(2024, 4, 8),
            end: new Date(2024, 4, 8),
        },
        // {
        //     id: 1,
        //     title: 'Evento 1',
        //     strart: dayjs('2024-04-02T17:00:00').toDate(),
        //     end: dayjs('2024-04-02T19:00:00').toDate(),
        // },
    ];

    const components = {
        event :  props => {
            console.log(props);
            return <div style={{display:'flex', flexDirection:'row',  gap: '10px'}}> <MdDateRange /> {props.title}</div>;
        }
    }

    return (
        <div style={{ height: '95vh', width: '70vh' }}>
            <Calendar
                messages={{
                    next: "Siguiente",
                    previous: "Anterior",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                }}
                localizer={localizer}
                events={events}
                views={['month', 'day']}
                // defaultView= 'day'
                // date={dayjs('2024-04-06T18:00:00').toDate()}
                toolbar={true}
                // min= {dayjs('2024-04-02T08:00:00').toDate()}
                // max= {dayjs('2024-04-02T18:00:00').toDate()}
                components={components}
            // style={{height: 500, width: 500}}
            />
        </div>
    );
}

export default App;
