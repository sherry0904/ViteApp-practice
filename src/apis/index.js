export const API_ENDPOINT = 'https://restcountries.com/v2/all?fields=flags%2Cname%2Cpopulation%2Cregion%2Ccapital%2CnativeName%2Clanguages%2CtopLevelDomain%2Csubregion%2Ccurrencies';

export const fetchCountersData = async (callback) => {

    try {
        let res = await fetch(API_ENDPOINT);

        res = await res.json();

        return callback(res);

    } catch (error) {
        console.log({ error, message: 'Something went wrong!' })
    }

    return;
}