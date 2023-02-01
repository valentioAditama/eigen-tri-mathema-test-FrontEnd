import React from 'react';
import { Button, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

interface Props {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    link: string;
}

const NewsCard: React.FC<Props> = ({ title, description, url, urlToImage, link }) => {
    return (
        <Card
            title={title}
            hoverable
            style={{
                width: 310,
            }}
            cover={
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                        style={{
                            height: '100%',
                            width: '100%',
                            padding: '10px'
                        }}
                        alt={title}
                        src={urlToImage}
                    />
                </a>
            }
        >
            <Text ellipsis>{description}</Text>
            <Link to={`/review/${link}`}>
                <Button color='#69b1ff' style={{
                    marginTop: '10px',
                    color: 'white',
                    backgroundColor: 'black'
                }}>Load More</Button>
            </Link>
        </Card>
    );
};

export default NewsCard;
