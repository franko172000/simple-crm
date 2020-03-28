const getUrl = window.location;
const baseUrl = getUrl .protocol + "//" + getUrl.host + "/" ;
export default {
    MAIN_SITE_URL : baseUrl,
}
