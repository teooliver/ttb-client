import EventsTable from '../../components/TimeTracker/EventsTable/EventsTable';
import Stopwatch from '../../components/TimeTracker/StopWatch/Stopwatch';

const TimeTracker = () => {
  return (
    <section aria-label='time tracker'>
      <Stopwatch />
      <EventsTable />
    </section>
  );
};

export default TimeTracker;
