import { promises as fs } from "node:fs";
import Link from "next/link";
import {TITLE} from '@/constant/'
import type {Title} from '@/constant/'

export default async function Home({params}:{params:{episode:string}}) {
    const {episode} = params;
    const path = __dirname.replace(`.next/server/app/[episode]`, "data/") + `${episode}.json`; //.next/server is the path to the build folder that is created when you run next command
    const fileBuffer = await fs.readFile(path);
    const json = JSON.parse(fileBuffer.toString());

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