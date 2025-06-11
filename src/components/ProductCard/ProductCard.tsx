
import type { FC } from 'react';
import { Box, Button, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material';
import type { IProductCard } from '../../interfaces/IProductCard';
import styles from './styles.module.scss'


const ProductCard: FC <IProductCard> = ({title = '', origin = '', price = 0, currency = 'RUB', imageUrl = ''}) => {
    const formatPrice = () => {
        const amount = price / 100;
        const locale = currency === 'RUB' ? 'ru-RU' : 'en-US';
        return new Intl.NumberFormat(locale, { 
            style: 'currency', 
            currency 
        }).format(amount);
}

  return (
    <Card variant='elevation' sx={{padding: 0}} className={styles.card}>
            {imageUrl 
                ? (<img src={imageUrl}  alt={title} loading='lazy' className={styles.card_image}/>) 
                : (<Skeleton variant='rounded' className={styles.card_image}/>)
            }
            <CardContent >
            {title 
                ? (<Typography variant="h6" className={styles.card_title}>{title}</Typography>)
                : (<Skeleton variant='text' className={styles.card_title}/>)
            }
            {origin 
                ? ( <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} className={styles.card_origin}> {origin} </Typography>) 
                : (<Skeleton variant='text' className={styles.card_origin}/>)
            }
            {price 
                ? (<Box className={styles.card_price}>{formatPrice()}</Box>) 
                : (<Skeleton variant='text' className={styles.card_price}/>)
            } 
            </CardContent>
        <CardActions sx={{paddingTop: 0}}>
            <Button variant='contained' sx={{width: '100%'}}>Добавить</Button>
        </CardActions>
    </Card>  

  );
};

export default ProductCard;