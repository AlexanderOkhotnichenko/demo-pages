import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from './Slider';
import styles from "./styles.module.scss";

export function DemoOne() {
  const [juices, setJuices] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_MOCKAPI_API_URL;

  useEffect(() => {
    async function fetchData() {
      const juicesItems = await axios.get(`${API_URL}`);
      setLoading(false)
      setJuices(juicesItems.data);
    }
    fetchData();
  }, []);

  return (
    <section className={`${styles.home} home__parrent`}>
      <div className={`${styles.home__container} gsap-home-container`}>
        <div className={`${styles.home__content} ${styles.content}`}>
          <Slider juices={juices} loading={loading} />
        </div>
      </div>
    </section>
  )
}
