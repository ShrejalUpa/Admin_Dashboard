
import { IoMdHome } from "react-icons/io";
import { MdTransform } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbDeviceIpadHorizontalDollar } from "react-icons/tb";
import { TbAntennaBars5 } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { CiSettings } from "react-icons/ci";


export const NavData =[
    {
        id:1,
        icons:<IoMdHome />,
        path:"/",
        name:"Dashboard"
    },
    {
        id:2,
        icons:<MdTransform />,
        path:"/transactions",
        name:'Transactions'
    },
    {
        id:3,
        icons:<FaUser />,
        path:"/accounts",
        name:"Account"
    },
    {
        id:4,
        icons:<TbAntennaBars5 />,
        path:"/investments",
        name:"Investments"
    },
    {
        id:5,
        icons:<TbDeviceIpadHorizontalDollar />,
        path:"/creditcards",
        name:"CreditCards"
    },
    {
        id:6,
        icons:<FaMoneyCheckDollar />,
        path:"/loans",
        name:"Loans"
    },
    {
        id:7,
        icons:<MdDesignServices />,
        path:"/services",
        name:"Services"
    },
    {
        id:8,
        icons:<CiSettings />,
        path:"/settings",
        name:"Settings",
    }
]

export const TransactionsTab =[
    {
        des:'Spotify Subscription',
        id:'#12548796',
        type:'shopping',
        card:'1234****',
        date:'28 jan, 12.30 AM',
        amount:'-$2,500'
    },
    {
        des:'Freepik Sales',
        id:'#12548796',
        type:'Transfer',
        card:'1234****',
        date:'25 jan, 10.40 AM',
        amount:'+$750'
    },
    {
        des:'Mobile Service',
        id:'#12548796',
        type:'service',
        card:'1234****',
        date:'20 jan, 10.39 PM',
        amount:'-$150'
    },
    {
        des:'Wilson',
        id:'#12548796',
        type:'Transfer',
        card:'1234****',
        date:'15 jan, 03.29 PM',
        amount:'-$1050'
    },
    {
        des:'Emilly',
        id:'#12548796',
        type:'Transfer',
        card:'1234****',
        date:'14 jan, 10.40 PM',
        amount:'+$840'
    },
]