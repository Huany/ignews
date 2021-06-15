import { GetStaticProps } from 'next' ;
import Head from 'next/head';
import { SubscribleButton } from '../components/SubscribleButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';
interface HomeProps{
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br />
            <span>form {product.amount} month</span>
          </p>
          <SubscribleButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />

      </main>
    </>
  )
}
 
export const getStaticProps : GetStaticProps = async () =>{
  //retrieve fala que irei buscar apenas 1 resultado
  const price = await stripe.prices.retrieve('price_1IxVhfGprJAMGl0w5RL5iHsn',{
    expand: ['product'] //retorna tudo sobre o produto relacionado
  });

  const product ={
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return{
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //  24 horas
  }
 

}