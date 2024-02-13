

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getListings = async () => {
    const res = await fetch(URL, { cache: 'no-cache'});
    const data = await res.json();
    return data;
}