import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import NewsCard from './NewsCard';

interface Article {
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
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e5a2895ab4e4d72a888becae8ce37a8`
            );
            const data = await result.json();
            setNews(data.articles);
        };

        fetchData();
    }, []);

    return (
        <Row>
            {news.map((item: Article) => (
                <Col key={item.title} span={6}
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
                    />
                </Col>
            ))}
        </Row>
    );
};

export default NewsList;
