import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2023-09-22',
    useCdn: false,
    token: process.env.SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source).width(800).url();
}
