import styles from './styles.module.scss'

export function SubscribleButton (){
    return(
         <button 
            type="button"
            class={styles.subscribleButton}
        >
            Subscrible now
        </button>
    )
}