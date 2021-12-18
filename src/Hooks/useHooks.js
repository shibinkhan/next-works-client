import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useHooks = () => {
    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBikes(data);
            });
    }, []);

    const { bikeId } = useParams();
    const [singleBike, setSingleBike] = useState({});
    useEffect(() => {
        fetch(`https://guarded-sierra-27673.herokuapp.com/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleBike(data);
            });
    }, [bikeId]);

    const [sixBikes, setSixBikes] = useState([]);

    // services
    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/bikes/six')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSixBikes(data);
            });
    }, []);

    const [singleReview, setSingleReview] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleReview(data);
            });
    }, []);

    return {
        singleOrder,
        setSingleOrder,
        bikes,
        setBikes,
        singleBike,
        setSingleBike,
        sixBikes,
        setSixBikes,
        singleReview,
        setSingleReview
    };
};

export default useHooks;