import Link from "next/link";
import {TITLE} from '@/constant/'
import type {Title} from '@/constant/'
import { readFile } from "@/utils/readFile";
import type { Metadata, ResolvingMetadata } from 'next'
import { Item } from "@/components/item";

export async function generateMetadata(
    {params}:{params:{episode:string}},
    parent: ResolvingMetadata
    ): Promise<Metadata> {
    // read route params
    const {episode} = params;

    return {
        title: `Star Wars: Episode ${TITLE[episode as keyof Title].number} - ${TITLE[episode as keyof Title].title} | starwarsscripts.com`,
        description: `Star Wars: Episode ${TITLE[episode as keyof Title].number} - ${TITLE[episode as keyof Title].title} | starwarsscripts.com`,
    }
} 

export default async function Home({params}:{params:{episode:string}}) {
    const {episode} = params;
    const json = await readFile(episode as keyof Title)

    return (
        <div>
        <h1><Link href='/'>StarWarsScripts.com</Link></h1>
        <h2>Episode {TITLE[episode as keyof Title].number} - {TITLE[episode as keyof Title].title}</h2>
        {json.map((item:any) => (
            <Item episode={episode} item={item} key={item.id} />
        ))}
        </div>
    );
}