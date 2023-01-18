import React, { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "../../Components/Content";
import { Card } from "../../Components/Card";
import { ShowMoreButton } from "../../Components/ShowMoreButton";
import catallog from "../../styles/catallog.module.scss";

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

  const renderCards = () => {
    return (loading ? [...Array(4)] : cards).map((card, index) => (
      <Card
        key={index}
        loading={loading}
        {...card}
      />
    ));
  };

  return (
    <section className={catallog.catallog}>
      <div className={catallog.catallog__container}>
        <Content className={`${catallog.catallog__content} ${catallog.content}`}>
          {renderCards()}
        </Content>
        <Content className={`${catallog.catallog__content} ${catallog.content}`}>
          <ShowMoreButton className="show-more-button" type="button">
            <span>Show more</span>
          </ShowMoreButton>
        </Content>
      </div>
    </section>
  );
}
