import { SiMastercard } from "react-icons/si";
import { BarChart, Bar,XAxis, ResponsiveContainer } from 'recharts';

function CreditCard() {
  const data= [
    {
      name: 'agu',
      uv: 4000,
      
    },
    {
      name: 'sep',
      uv: 3000,
    },
    {
      name: 'oct',
      uv: 2000,
    },
    {
      name: 'Nov',
      uv: 2780,
    },
    {
      name: 'Dec',
      uv: 12500,
    },
    {
      name: 'Jan',
      uv: 2390,
    },
   
  ]
  return (
    <div className="">
      <div className="flex gap-x-6 overflow-x-auto scrollbar-hide lg:gap-8 mb-4">
        <div className="min-w-80">
          <h1 className="pb-5 text-lg font-semibold text-gray-700">My Cards</h1>
          <div className="h-54 rounded-3xl bg-gradient-to-bl from-[#0000FF] to-[#5151f8]">
            <div className="flex justify-between p-6">
              <span className="text-white text-xs">
                Balance <p className="text-lg font-normal">$5,756</p>
              </span>
              <image src={"/chip.svg"} width={40} height={40} alt="chip" />
            </div>
            <div className="flex gap-x-14 px-6 mb-7">
              <span className="text-gray-300 text-xs">
                CARD HOLDER <p className="text-white text-sm">Eddy Cusuma</p>
              </span>
              <span className=" text-gray-300 text-xs">
                VALID THRU<p className="text-white text-sm">12/22</p>
              </span>
            </div>
            <div className=" bg-gradient-to-br from-white/5 via-white/10 to-[#0000FF] rounded-b-3xl p-0">
              <div className="px-8 py-4 flex justify-between items-center">
                <p className="text-white text-xl ">3778**** ****1234</p>
                <SiMastercard className="text-4xl text-white/50" />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-80">
          <h1 className="pb-5 text-lg font-semibold text-gray-700 text-right">
            +Add Card
          </h1>
          <div className="h-54 rounded-3xl bg-white border">
            <div className="flex justify-between p-6">
              <span className="text-gray-400 text-xs">
                Balance <p className="text-lg font-normal text-black">$5,756</p>
              </span>
              <image src={"/chip.svg"} width={40} height={40} alt="chip" />
            </div>
            <div className="flex gap-x-14 px-6 mb-7">
              <span className="text-gray-400 text-xs">
                CARD HOLDER <p className="text-black text-sm">Eddy Cusuma</p>
              </span>
              <span className=" text-gray-400 text-xs">
                VALID THRU<p className="text-black text-sm">12/22</p>
              </span>
            </div>
            <div className=" bg-white border-t-2 rounded-b-3xl p-0">
              <div className="px-8 py-4 flex justify-between items-center">
                <p className="text-black text-xl ">3778**** ****1234</p>
                <SiMastercard className="text-4xl text-gray-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 min-w-80 rounded-lg bg-gray-200 hidden lg:block">
        <div className="h-[30vh] rounded-lg bg-white shadow-md">
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" className="text-gray-200 text-xs" />
            <Bar dataKey="uv" fill="#ececec" radius={10} >
              {data.map((entry, index) => (
                <>  
                </>
                
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
      </div>
      </div>
        </div>
      </div>
      <div className="h-32 rounded-lg bg-gray-200 mb-[5rem] lg:hidden">
      <div className="h-[25vh] rounded-lg bg-white shadow-md">
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" className="text-gray-200 text-xs" />
            <Bar dataKey="uv" fill="#ececec" radius={10} >
              {data.map((entry, index) => (
                <>  
                </>
                
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
      </div>
      </div>
      </div>
    </div>
  );
}

export default CreditCard;
