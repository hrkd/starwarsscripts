import { promises as fs } from "node:fs";

export default async function Home({params}:{params:{episode:string, id:string}}) {
    const {episode, id} = params;
    console.log(episode)
    const path = __dirname.replace(`.next/server/app/[episode]/[id]`, "data/") + `${episode}.json`; //.next/server is the path to the build folder that is created when you run next command
    const fileBuffer = await fs.readFile(path);
    const json = JSON.parse(fileBuffer.toString());
    const item = json.find((item:any) => item.id === id);

    return (
            <div key={item.id}>
                <p>{item.text} / {item.from}</p>
            </div>
    );
}