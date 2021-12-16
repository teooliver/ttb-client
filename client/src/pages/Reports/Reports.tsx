import { ReportsBarChart } from '../../components/ReportsBarChart/ReportsBarChart';
import { useGetGroupedTasks } from '../../hooks/useGetGroupedTasks';
import { PROJECT_COLORS } from '../../utils/projectColors';
import styles from './Reports.module.css';
import { calculateTimer } from '../../utils/timer';

const Reports = () => {
  const {
    data: groupedTasks,
    isLoading,
    isSuccess,
    isError,
  } = useGetGroupedTasks();

  let chartData = {
    // Add day of the week next to date
    labels: groupedTasks?.results.map((result) => result._id),
    datasets: [
      {
        label: 'Hours X days',
        data: groupedTasks?.results.map((result) => {
          let [hours] = calculateTimer(result.total_time);
          return hours;
        }),
        backgroundColor: [...PROJECT_COLORS],
      },
    ],
  };
  return (
    <div className={styles['chart-container']}>
      <ReportsBarChart chartData={chartData} />;
    </div>
  );
};

export default Reports;
