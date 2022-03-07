import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-07',
    token: process.env.NEXT_PUBLIC_PROJECT_TOKEN,
    useCdn: false,
});
