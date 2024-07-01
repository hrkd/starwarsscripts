import Link from "next/link";
import {TITLE} from '@/constant/'
import type {Title} from '@/constant/'
import { readFile } from "@/utils/readFile";

export default async function Home({params}:{params:{episode:string}}) {
    const {episode} = params;
    const json = await readFile(episode as keyof Title)

    return (
        <div>
        <h1>{TITLE[episode as keyof Title]}</h1>
        {json.map((item:any) => (
            <Link href={`/${episode}/${item.id}`} key={item.id}>
                <p>{item.text} / {item.from}</p>
            </Link>
        ))}
        </div>
    );
}