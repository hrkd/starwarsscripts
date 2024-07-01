import type {Title} from '@/constant/'
import { readFile } from "@/utils/readFile";
import styles from "./page.module.scss";
import Link from 'next/link';
import {TITLE} from '@/constant/'
import { Disqus } from '@/components/disqus';

export default async function Home({params}:{params:{episode:string, id:string}}) {
    const {episode, id} = params;
    const json = await readFile(episode as keyof Title)
    const item = json.find((item:any) => item.id === id);

    return (
            <div className={styles.wrapper}>
                <article className={styles.item}>
                    <p>{item.text}</p>
                    <span>{item.from}</span>
                    <Link href={`/${episode}#${id}`}>
                        {`<- Episode ${TITLE[episode as keyof Title].number} - ${TITLE[episode as keyof Title].title}`}
                    </Link>

                    <div className={styles.comment}>
                        <Disqus {...{
                            url:`https://starwarsscripts.com/${episode}/${id}`,
                            identifier:id,
                            title:id}}/>
                    </div>
                </article>
            </div>
    );
}