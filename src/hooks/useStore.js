import {
    useState,
    useEffect,
    useCallback
} from 'react';
import { fetchCountersData } from '../apis';

const useStore = (initialize = []) => {

    const [countries, setCountries] = useState(initialize);

    const [region, setRegion] = useState(['All']);

    const [fields, setFields] = useState({
        search: '',
        region: 'All'
    })

    useEffect(() => {

        fetchCountersData(res => setCountries(res));

    }, []);

    useEffect(() => {

        if (!countries.length) return;

        setRegion((prev) => {
            let _region = prev;

            return countries.reduce((_, curr) => {

                if (curr.region && !_region.includes(curr.region)) {

                    _region = _region.concat(curr.region);
                }

                return _region;

            }, [])
        })
    }, [countries])

    return {
        state: {
            countries,
            fields,
            region
        },
        action: {
            setCountries: useCallback((e) => setCountries(e), []),
            setFields: useCallback((e) => setFields(e), [])
        }
    }
}

export default useStore;
