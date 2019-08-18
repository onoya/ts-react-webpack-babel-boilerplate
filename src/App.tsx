import React, { FC } from 'react';
import Title from './components/Title';
import styles from './App.css';

const App: FC = () => (
  <div className={styles.app}>
    <Title title="React + Webpack + Babel 7 + Typescript" />
  </div>
);

export default App;
