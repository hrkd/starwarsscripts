import {TITLE} from '@/constant/'
import type {Title} from '@/constant/'
import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>StarWarsScripts.com</h1>
      {Object.keys(TITLE).map((episode) => (
        <div key={episode}>
          <Link href={`/${episode}`} key={episode}>
            Episode {TITLE[episode as keyof Title].number} - {TITLE[episode as keyof Title].title}
          </Link>
        </div>
      ))}
    </main>
  );
}
