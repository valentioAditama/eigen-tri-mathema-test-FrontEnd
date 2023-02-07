import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import NewsCard from './NewsCard';

export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                `https://newsapi.org/v2/everything?q=apple&from=2023-01-31&to=2023-01-31&sortBy=popularity&apiKey=4e5a2895ab4e4d72a888becae8ce37a8`
            );
            console.log(result);
            const data = await result.json();
            setNews(data.articles);
        };

        fetchData();
    }, []);

    return (
        <Row>
            {news.map((item: Article) => (
                <Col key={item.title} xs={24} md={12} lg={8} xl={6}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                    <NewsCard
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        urlToImage={item.urlToImage}
                        link={item.title}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default NewsList;
