
interface ButtonINterface {
  onclick: ()=> void;
  className: string;
  title: string;
 }
function Buttons({
  onclick,
  className,
  title
}: ButtonINterface) {
  const clickHandler = ()=>{
    onclick();
  }
  return (
    <>
      <button className={`bg-black text-center p-2 w-full text-white rounded-md my-2 hover:bg-opacity-90 transition transition-opacity ${className}`} onClick={clickHandler}>{title}</button>
    </>
  )
}

export default Buttons