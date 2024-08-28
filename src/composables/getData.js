import axios from "axios";
import {ref} from "vue";

export const useGetData = () => {
    const data = ref(null)
    const loading = ref(true)

    const getData = async ( url ) => {
        try {
            const res = await axios.get(url);
            data.value = res.data
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading
    }
}