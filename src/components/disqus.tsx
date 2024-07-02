'use client'

import { DiscussionEmbed } from 'disqus-react';
import styles from './disqus.module.scss'

export const Disqus = ({url, identifier, title}:{url:string, identifier:string, title:string}) =>
<div className={styles.disqus}>
    <DiscussionEmbed
        shortname='starwarsscripts'
        config={
            {
                url,
                identifier,
                title,
            }
        }
    />
</div>