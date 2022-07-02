import {set} from '../store/config';

const configurl = "api.json";


export default async function getConfig()
{
    //get Base URL
    const resp = await fetch(configurl);
    const data = await resp.json();

    //set Base URL in Redux/Config store
    set(data.url);
}
