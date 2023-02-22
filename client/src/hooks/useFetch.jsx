const useFetch = () =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([false])
    const [error, setError] = useState([false])

    useEffect(()=>{
        const fetchData = async = ()=>{
            setLoading(true)
            try{
                const res = axios.get(url)
                setData(res.data);
            }
            catch(error){
                setError(error)
            }
            setLoading(false)
        };
        fetchData();
    }, [url])
};
const reFetch = async = ()=>{
    setLoading(true)
    try{
        const res = axios.get(url)
        setData(res.data);
    }
    catch(error){
        setError(error)
    }
    setLoading(false)
};