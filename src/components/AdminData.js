
import PieChart from "./PieChart";
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const AdminData = () => {
  const datasets = [
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
    [
        { name: "Postive", value: 30 },
        { name: "Negative", value: 60 },
        { name: "Neutral", value: 10 },
    ],
  ];
  return (
    <div className="">

    <div className="mt-10 flex items-center justify-center">
    <h2 className="text-white text-center text-2xl">Analysis of your Reviews</h2>
          <Link to="/">
              <button
              className='bg-richblack-800 text-white py-[8px] px-[12px] ml-5  rounded-[8px] border border-richblack-700'
               onClick={()=>{
                  toast.success("Logged out")
              }}>Log out</button>
          </Link>
    </div>
      
      <div className="flex justify-center flex-wrap max-w-[1400px] gap-10 mx-auto">
        {datasets.map((data, index) => (
          <PieChart key={index} data={data} width={300} height={300} />
        ))}
      </div>
    </div>
  );
};

export default AdminData;
