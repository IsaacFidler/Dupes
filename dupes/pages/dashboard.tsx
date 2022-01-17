import React, { ReactElement } from 'react';
import styles from '../styles/Dashboard.module.scss';

//components
import Sidebar from '../components/sidebar';

interface Props {}

export default function dashboard({}: Props): ReactElement {
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}
