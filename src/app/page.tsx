import {TITLE} from '@/constant/'
import type {Title} from '@/constant/'
import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {Object.keys(TITLE).map((episode) => (
        <div key={episode}>
          <Link href={`/${episode}`} key={episode}>
            {TITLE[episode as keyof Title]}
          </Link>
        </div>
      ))}
    </main>
  );
}
