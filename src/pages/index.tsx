import Head from 'next/head';
import TimeTracker from './timetracker';

export default function Home() {
  return (
    <>
      <Head>
        <title>Time Base Tracker</title>
        <meta name='description' content='Track time and organize your tasks' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TimeTracker />
    </>
  );
}
