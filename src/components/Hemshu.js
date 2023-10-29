import { FaInstagram ,FaLinkedinIn,FaChartBar,FaGraduationCap,FaBookOpen,FaReact,FaLaptop} from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr/";
import { HiOutlineBuildingOffice2 , HiOutlineBuildingLibrary } from "react-icons/hi2";


const Hemshu = ()=>{
return <div className="w-[70%] mx-auto">
    <h1 className="text-lg bg-blue-50 text-blue-600 font-semibold w-80 px-6 py-1 rounded-lg"> Choose the Course that you like</h1>
    <h1 className="text-4xl font-bold py-2 ">Browse by <span className="text-blue-500">Category</span></h1>
    <div className=" grid grid-flow-row grid-cols-4  gap-2 my-2 cursor-pointer ">
        <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><FaGraduationCap/></h1>
            <h1>Online PG <h1>Programmes</h1></h1>
            <h1 className="font-light">MBA, MCA, MCom.....</h1>
            </div>
             </div>
             <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><FaChartBar/></h1>
            <h1>Online PG <h1>Programmes</h1></h1>
            <h1 className="font-light">BBA, BCA, BCom...</h1>
            </div>
             </div>
             <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><FaBookOpen/></h1>
            <h1>Executive MBA <h1>Programmes</h1></h1>
            <h1 className="font-light">Marketing, HR, Finance...</h1>
            </div>
             </div>
             <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><FaReact/></h1>
            <h1>Online MSc <h1>Programmes</h1></h1>
            <h1 className="font-light">Data Science, CS, ML & AI...</h1>
            </div>
             </div>
        <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><FaLaptop/></h1>
            <h1>Executive <h1>Programmes</h1></h1>
            <h1 className="font-light">PGP in Data Science, ML & AI</h1>
            </div>
             </div>
             <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><GrCertificate/></h1>
            <h1>Certifications <h1>Courses</h1></h1>
            <h1 className="font-light">Python, Angular, React JS..</h1>
            </div>
             </div>
             <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><HiOutlineBuildingLibrary/></h1>
            <h1>Job Link <h1>Programmes</h1></h1>
            <h1 className="font-light">Cloud Computing, UX/UI...</h1>
            </div>
             </div>
             <div className="bg-blue-100 hover:bg-green-50">
           <div className=" flex-col text-center my-5 "> <h1 className="text-6xl flex justify-center "><HiOutlineBuildingOffice2/></h1>
            <h1>Online DBA <h1>Programmes</h1></h1>
            <h1 className="font-light">Business Administration...</h1>
            </div>
             </div>
             
             </div>
             <div className="bg-blue-500 flex justify-between p-3"> <div className="flex"> <p className="text-3xl invert"><HiOutlineBuildingLibrary/></p> <p className="text-xl text-white ml-5">Not sure what you like? Talk to our experts.</p></div> 
             <div className="bg-white text-blue-600 px-4 py-1 text-lg rounded-md" > <button>Get free Career council</button></div>
             </div> 
             </div> 
    


}
export default Hemshu;