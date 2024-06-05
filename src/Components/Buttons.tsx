type propsType={
    onClick?:()=>void;
    title:string;
    className?:string;
}
export default function Buttons(props:propsType) {
  return (
    <div>
        <button className={props.className?props.className:"bg-gradient-to-r from-[#53246d] to-[#c0604c] text-white font-bold py-2 px-4 rounded-full"} onClick={props.onClick}>{props.title}</button>      
    </div>
  )
}
