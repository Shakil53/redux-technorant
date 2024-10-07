import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";

const App = () => {
  const {count} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch();
  return (
    <>
    <div className="h-screen w-full flex justify-center items-center">
        <div className="flex border border-purple-300 rounded p-8 bg-gray-50">
        <button onClick={()=> dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white ">Increment</button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">Decrement</button>
        
      </div>
       
      
    </div>
     <div className="flex ">
     {Array.from({ length: Math.floor(count / 5) }).map((_, index) => {
       const boxValue = (index + 1) * 5; // Calculate the value for the box
       return (
         <div key={index} className="p-4 border border-blue-300 bg-blue-100 rounded mb-2">
           Box for count: {boxValue}
         </div>
       );
     })}
   </div>
    </>
  );
};

export default App;