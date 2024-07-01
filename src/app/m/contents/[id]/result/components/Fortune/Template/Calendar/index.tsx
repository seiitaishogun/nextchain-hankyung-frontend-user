import { format, getDate } from 'date-fns';
import ReactCalendar from 'react-calendar';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';
import 'react-calendar/dist/Calendar.css';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div`
  display: flex;
  justify-content: center;

  .react-calendar {
    width: 100%;
    max-width: 320px;
    margin-top: 15px;
    border: 0;
    font-family: ${props => props.theme.fontFamilies.inner};
    font-weight: normal;
  }

  .react-calendar__month-view__weekdays {
    font-size: 13px;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    letter-spacing: 3px;
    text-align: center;
    color: #7085c3;

    abbr {
      text-decoration: none !important;
    }
  }

  button {
    box-sizing: border-box;
    height: 40px;
    padding: 0;
    border-radius: 5px;
    background: #ffffff !important;
    font-size: 13px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary} !important;

    &.highlight {
      background: ${props => props.theme.colors.primary} !important;
      color: ${props => props.theme.colors.white} !important;
    }
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffffff;
  }
`;

function Calendar({ items }: Props) {
  const mark = items.map(x => x.name);
  return (
    <Layout>
      <ReactCalendar
        formatDay={(_, date) => getDate(date).toString()}
        calendarType="gregory"
        goToRangeStartOnSelect={false}
        showNavigation={false}
        showNeighboringMonth={false}
        tileClassName={({ date }) => {
          if (mark.find(x => x === format(date, 'yyyy-MM-dd'))) {
            return 'highlight';
          }
          return undefined;
        }}
      />
    </Layout>
  );
}

export default Calendar;
