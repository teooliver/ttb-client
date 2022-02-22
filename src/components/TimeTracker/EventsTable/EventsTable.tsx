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

  return (
    <>
      {isLoading && <Spinner />}

      {isSuccess &&
        data?.pages.map((groupedTasks) =>
          groupedTasks?.results.map((group) => {
            const [hours, minutes, seconds] = calculateTimer(
              Math.round(group.total_time)
            );
            return (
              <>
                <ul
                  className={styles['EventsTable']}
                  key={group._id}
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
              </>
            );
          })
        )}

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

      {isError && (
        <div>
          <p style={{ color: 'white', marginLeft: '1rem' }}>
            No Data Available
          </p>
        </div>
      )}
    </>
  );
};

export default EventsTable;
