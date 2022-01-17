import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/homepage.png"
          alt="universe"
          width={1500}
          height={1000}
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className="bgText bg-lime-200 hover:bg-lime-100 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
