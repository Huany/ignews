import styles from './styles.module.scss'

interface SubscribleButtonProps{
    priceId: string;
}

export function SubscribleButton ({priceId}: SubscribleButtonProps){
    return(
         <button 
            type="button"
            className={styles.subscribleButton}
        >
            Subscrible now
        </button>
    )
}