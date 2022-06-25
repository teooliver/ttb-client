import format from 'date-fns/format';
import { calculateTimer } from '../../../utils/timer';
import EventRow from '../EventRow/EventRow';
import styles from './EventsTable.module.css';
import { useGetInifiniteTasks } from '../../../hooks/useGetInifiniteTasks';
import Spinner from '../../Spinner/Spinner';

const EventsTable = () => {
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isError,
    isLoading,
  } = useGetInifiniteTasks();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div>
        <p style={{ color: 'white', marginLeft: '1rem' }}>
          Something Went Wrong
        </p>
      </div>
    );
  }

  if (data?.pages[0].results.length === 0) {
    return (
      <div>
        <p style={{ color: 'white', marginLeft: '1rem' }}>No Data Available</p>
      </div>
    );
  }

  return (
    <>
      {isSuccess &&
        data?.pages.map((groupedTasks) => {
          if (groupedTasks.results.length === 0) {
            return (
              <div>
                <p style={{ color: 'white', marginLeft: '1rem' }}>
                  No Data Available
                </p>
              </div>
            );
          }

          return groupedTasks.results.map((group) => {
            const [hours, minutes, seconds] = calculateTimer(
              Math.round(group.total_time)
            );
            return (
              <ul
                key={group._id}
                className={styles['EventsTable']}
                data-testid='events-table'
              >
                <li className={styles['date-header']}>
                  <span>{format(new Date(group._id), 'EEE, dd LLL')}</span>
                  <span className={styles['day-total']}>
                    {hours}:{minutes}:{seconds}
                  </span>
                </li>
                {group.tasks.map((task) => (
                  <EventRow key={task._id} task={task} />
                ))}
              </ul>
            );
          });
        })}

      {isSuccess && hasNextPage && (
        <div className={styles['load-more']}>
          <button
            className='btn btn-primary'
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
};

export default EventsTable;
