import { ChangeEvent } from "react";

interface Props {
    value: string;
    label: string;
    onchange: (e: any)=> void;
    classname: string;
    placeholder: string;
    type: string;
}
function Input({
  value,
  label,
  onchange,
  classname,
  placeholder,
  type
}: Props)
{

const changehandler = (e: ChangeEvent<HTMLInputElement>)=>{
  onchange(e.target.value)
}
  return (
    <>
      <div className="my-2">
            <label  className="block mb-2 text-sm font-medium text-gray-500 my-1">{label}</label>
            <input type={type} id="first_name" className={`bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${classname}`} placeholder={placeholder} required  onChange={changehandler} value={value}/>
        </div>
    </>
  )
}

export default Input