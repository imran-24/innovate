

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getListings = async () => {
    const res = await fetch(URL, { cache: 'no-cache'});
    const data = await res.json();

    const formatedData = data?.map((item: any) => (
       { 
        ...item,
        value: item.country_name,
        label: `${item.airport_name}, ${item.city_name}, ${item.country_name}`}
    ))
    return formatedData;
}