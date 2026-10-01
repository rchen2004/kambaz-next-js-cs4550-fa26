import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { Gi3dGlasses, GiAbstract046 } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineCamera } from "react-icons/hi2";
import "@/app/labs/lab2/tailwind/index.css";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdOutlineEmail className="text-4xl text-blue-600" />
        <HiOutlineCamera className="text-4xl text-blue-600" />
        <br />
        <Gi3dGlasses className="text-4xl text-red-600"/>
        <GiAbstract046 className="text-blue-500"/>
      </div>
    </div>
  );
}