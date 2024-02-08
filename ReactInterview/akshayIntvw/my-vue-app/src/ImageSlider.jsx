import { useState } from "react";

const data =["https://tse2.mm.bing.net/th?id=OIP.j9_MMVSZXUjcWjUjggNzdQHaEo&pid=Api&P=0&h=180",
"https://tse4.mm.bing.net/th?id=OIP._u4zg38uPLinnbJVhFgdNQHaEo&pid=Api&P=0&h=180",
"https://tse3.mm.bing.net/th?id=OIP.2UChTg_TGQk5_R8JDwjXZQHaEo&pid=Api&P=0&h=180",
"https://tse4.mm.bing.net/th?id=OIP.EVE5nUV12hUo68Pwokc9yAHaEo&pid=Api&P=0&h=180",
"https://tse1.mm.bing.net/th?id=OIP.EFfHlKF7dHrhV1n6xUgEQgHaEo&pid=Api&P=0&h=180",
];
// const [next,setNext] = useState[0];
const ImageSlider = ()=> {

    return(
     <>
     <div className="flex justify-center bg-slate-700 ">
        <button className="font-bold h-6 w-12 m- 10">Prev</button>
        <img className="w-[700px] h-[400]px m-10 p-5" src={data[1]} alt="wallpaer" />
        <button>next</button>
     </div>   
    </>  
    )
};
export default ImageSlider;