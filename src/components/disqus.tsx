'use client'

import { DiscussionEmbed } from 'disqus-react';

export const Disqus = ({url, identifier, title}:{url:string, identifier:string, title:string}) =>
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