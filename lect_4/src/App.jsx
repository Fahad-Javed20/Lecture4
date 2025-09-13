

function App() {
  

  return (
   <>
   <div className="flex m-auto">
   <div className=" h-60 w-60 flex m-auto" >
    <div  className="bg-blue-600 w-1/3"></div>
    <div  className="bg-neutral-50 w-1/3"></div>
    <div  className="bg-red-600  w-1/3"></div>

   </div>
 <br /><br />

<div className=" w-100 h-60 flex-row " >
    <div  className="bg-blue-600 h-1/6"></div>
    <div  className="bg-neutral-50 h-1/6"></div>
    <div  className="bg-red-600  h-1/3 flex flex-col justify-center items-center" >
    <div className="bg-green-500 h-15 w-15 rounded-full " ></div>
    </div>
    <div  className="bg-neutral-50 h-1/6"></div>
    <div  className="bg-blue-600 h-1/6"></div>
   </div>
   <br /><br /><br />

   <div className= "bg-neutral-50 w-100 h-60 flex flex-col items-center justify-center " >
  
    <div  className="bg-red-600 h-40 w-40 rounded-full "></div>
    
   </div>
   <br /><br /><br />




   </div>
   <br /><br />
<div className="bg-yellow-600 h-80 w-120 flex" >

    <div className="bg-red-600 w-1/4 h-80" ></div>
  
    <div className=" bg-teal-400 h-80 w-3/4 flex-row">
        <div className="bg-green-500 h-1/3 w-100" ></div>
        <div className="bg-amber-50 h-1/3 w-100 "></div>
        <div className="bg-black h-1/3 w-100"></div>
    </div>
</div>
</>
  )

}

export default App
