import type {Title} from '@/constant/'
import { promises as fs } from "node:fs";

export const readFile = async (episode: keyof Title):Promise<any>=> {
    const path = process.cwd() + `/data/${episode}.json`; //.next/server is the path to the build folder that is created when you run next command
    const fileBuffer = await fs.readFile(path);
    return JSON.parse(fileBuffer.toString());
}