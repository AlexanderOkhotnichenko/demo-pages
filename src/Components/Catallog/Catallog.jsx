import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "./Card";
import catallog from "./catallog.module.scss";

export function Catallog() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_MOCKAPI_API_URL;

  useEffect(() => {
    try {
      async function fetchData() {
        const cardItems = await axios.get(`${API_URL}/card`);
        setLoading(false);
        setCards(cardItems.data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className={catallog.catallog}>
      <div className={catallog.catallog__container}>
        <div className={`${catallog.catallog__content} ${catallog.content}`}>
          {
            !loading ?
            cards.map((card, index) => (
              <Card
                id={card.id}
                key={index}
                img={card.img}
                link={card.link}
                description={card.description}
              />
            )) :
            console.log('Loading...')
          }
        </div>
      </div>
    </section>
  )
}
