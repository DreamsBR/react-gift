
export const getGifts = async( cateogy ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cateogy)}&limit=10&api_key=RCvSBBYEc2Bb1oXdHiuhhoVCS5jn3SWx`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id:img.id,
            title : img.title,
            url:img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);

    return gifs;
}