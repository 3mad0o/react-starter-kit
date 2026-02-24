import React, { useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";



type CustomFileProps = {
  name: string;
  placeholder: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentPropsWithoutRef<"input">;
export const FileUpload = ({ name, placeholder,onchange,...rest }:CustomFileProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef(null); // 👈 create a ref

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      setPreview(URL.createObjectURL(file));
    }
    if(onchange){
      onchange(e)
    }
  };

  const removePreview =() =>{
    setPreview(null)

  }
  return (
    <div className="mb-4">
      <div className="relative w-full h-[300px]">
        {preview && <button 
        onClick={removePreview}
          type="button"
        className="absolute top-[-20px] right-[-20px] z-20 cursor-pointer  rounded-full">
          <TiDelete className="text-5xl text-red-500"/>

          
          </button>}

        {!preview && (
          <div className=" absolute h-full w-full">
            <div className="flex flex-col gap-2 justify-center items-center h-full bg-gray-100  cursor-pointer z-0">
              <FaUpload className="text-6xl " />
              <h3>{placeholder}</h3>
              
            </div>
          </div>
        )}

        {preview && (
          <div className="absolute h-full w-full">
            <img
              src={preview}
              className="h-full w-full object-cover"
              alt="Image"
              srcSet=""
            />
          </div>
        )}

        {!preview && (
          <input
           ref={fileInputRef}
           {...rest}
            className={`
            opacity-0  cursor-pointer
             absolute top-0 left-0 bottom-0 right-0
            z-10
          `}
            type="file"
            id={name}
            placeholder={placeholder}
            onChange={handleFileChange}
            
          />
        )}
      </div>

    
    </div>
  );
};
