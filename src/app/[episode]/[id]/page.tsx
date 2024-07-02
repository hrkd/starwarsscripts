import type {Title} from '@/constant/'
import { readFile } from "@/utils/readFile";
import styles from "./page.module.scss";
import Link from 'next/link';
import {TITLE} from '@/constant/'
import { Disqus } from '@/components/disqus';
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
    {params}:{params:{episode:string, id:string}},
    parent: ResolvingMetadata
    ): Promise<Metadata> {
    // read route params
    const {episode, id} = params;
    const json = await readFile(episode as keyof Title)
    const item = json.find((item:any) => item.id === id);
    const title = (item.text as string).length > 50 ? `${(item.text as string).slice(0,100)}... | starwarsscripts.com`: `${item.text} | starwarsscripts.com`;

    return {
        title,
        description: `${item.text} | Star Wars: Episode ${TITLE[episode as keyof Title].number} - ${TITLE[episode as keyof Title].title} | starwarsscripts.com`,
    }
} 

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

                </article>

                <div className={styles.comment}>
                    <Disqus {...{
                        url:`https://starwarsscripts.com/${episode}/${id}`,
                        identifier:id,
                        title:id}}/>
                </div>
            </div>
    );
}