import type {Title} from '@/constant/'
import { readFile } from "@/utils/readFile";

export default async function Home({params}:{params:{episode:string, id:string}}) {
    const {episode, id} = params;
    const json = await readFile(episode as keyof Title)
    const item = json.find((item:any) => item.id === id);

    return (
            <div key={item.id}>
                <p>{item.text} / {item.from}</p>
            </div>
    );
}