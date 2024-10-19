import React from "react";

function Tabs({ TabsContent, onChange }) {
  const [currIndex, setCurrIndex] = React.useState(0);

  function handleOnClick(getIndex){
    setCurrIndex(getIndex);
    onChange(currIndex);
  }
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center h-screen">
      <div className="headings flex gap-4  text-xl font-bold">
        {TabsContent.map((TabItem,index) => {
          return (
            <div onClick={()=>handleOnClick(index)} className="flex bg-gray-400 px-4 gap-5 cursor-pointer " key={TabItem.label}>
              <span className="block">{TabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="content mt-2 text-2xl  tracking-widest">
        {TabsContent[currIndex] && TabsContent[currIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
