import css from './App.module.css';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <>
      <h1 className={css.title}>Feedback</h1>
      <Feedback />
    </>
  );
};
