import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from './Slider';
import demoOne from "../../styles/demo-one.module.scss";

export function DemoOne() {
  const [juices, setJuices] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_MOCKAPI_API_URL;

  useEffect(() => {
    try {
      async function fetchData() {
        const juicesItems = await axios.get(`${API_URL}/demo-1`);
        setLoading(false);
        setJuices(juicesItems.data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className={`${demoOne.home} home__parrent`} data-scroll-section>
      <div className={`${demoOne.home__container} gsap-home-container`}>
        <div className={`${demoOne.home__content} ${demoOne.content}`}>
          <Slider juices={juices} loading={loading} />
        </div>
      </div>
    </section>
  )
}
