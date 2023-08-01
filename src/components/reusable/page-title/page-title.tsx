import styles from './page.title.module.scss'

interface Iprops {
    header: string;
}

export const PageHeader = (props: Iprops) => {
    return (
        <h1 className={styles.header}>{props.header}</h1>
    )
}