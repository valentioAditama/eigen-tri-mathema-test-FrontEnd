import React from 'react';
import { Card, Typography } from 'antd';

const { Text } = Typography;

interface Props {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

const NewsCard: React.FC<Props> = ({ title, description, url, urlToImage }) => {
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
        </Card>
    );
};

export default NewsCard;
