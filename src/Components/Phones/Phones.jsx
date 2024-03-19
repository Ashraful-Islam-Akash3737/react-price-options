import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, Grid } from 'react-loader-spinner'


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 1 way to fetch data-----
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        // 2 way to fetch data with axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneWithFakeData)
                setLoading(false);
                console.log(phoneWithFakeData)
            })
    }, [])
    return (
        <div>
            {loading &&
                // <Audio
                //     height="80"
                //     width="80"
                //     radius="9"
                //     color="green"
                //     ariaLabel="three-dots-loading"
                //     wrapperStyle
                //     wrapperClass
                // /> 
                <Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;