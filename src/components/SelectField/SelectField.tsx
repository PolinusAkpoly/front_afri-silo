import React, { ChangeEvent, useEffect, useState } from 'react';
import { ucfirst } from '../../api/helpers/utils';


interface Option {
  key: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: Option[];
  value: string;
  model?: string;
  onChange: (value: any) => void;
  
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options, value, onChange }) => {
 
  // const [newOption, setNewOption] = useState<any[]>(options)
 

 

  const runLocallData = async () =>{
    // if(model){
    //   const datas = await getDatas(model)
    //   if(datas.isSuccess){
    //     let newOptionResults = datas.results.map((d: any) => {return {value: d._id, key: d.name}})
    //     console.log({newOptionResults});
        
    //     setNewOption(newOptionResults)
    //   }
      
    // }
  }

  useEffect(()=>{
  
    runLocallData()
  },[])


  return (
    <div>
      <label>{ucfirst(label)}</label>
      <select className='form-control' 
      onChange={onChange}
      name={name} 
      defaultValue={value} 
      >
        {
          options?.map((option: Option, index) => (
          <option key={index} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>

      
    </div>
  );
};

export default SelectField;
