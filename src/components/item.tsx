import Link from "next/link";
import styles from "./item.module.scss";

export const Item = ({episode, item}: {episode: string, item: any}) => (
    <p className={styles.wrapper}>
        <Link href={`/${episode}/${item.id}`}>
            <span>{item.from}</span><span>{item.text}</span> 
        </Link>
    </p>
)
