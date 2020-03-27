import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";



const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),  
      positions: yup.string().required("pick a size"),

  Sausage:yup.boolean().defined() ,
  Pepperoni: yup.boolean().defined(),
  canadianBecon: yup.boolean().defined(),
  spicyitalionSausage: yup.boolean().defined(),
  Grilledchicker: yup.boolean().defined(),
  Onions: yup.boolean().defined(),
  GreenPepper: yup.boolean().defined(),
  DicedTomatos: yup.boolean().defined(),
  BlackOlives: yup.boolean().defined(),
  RoastedGarlic: yup.boolean().defined(),
  ArtichokeHearts: yup.boolean().defined(),
  ThreeCheese: yup.boolean().defined(),
  Pineapple: yup.boolean().defined(),
  Extracheese: yup.boolean().defined(),

  Originalred: yup.boolean().defined(),
  GarlicRanch:yup.boolean().defined(),
  BBQSauce: yup.boolean().defined(),
  spinachAlfredo: yup.boolean().defined(),

  sauce: yup.string(),

  motivation: yup.string().required("must include why you'd like to join")
});

export default function Form() {
 
  const [buttonDisabled, setButtonDisabled] = useState(true);

 
  const [formState, setFormState] = useState({
    name: "",
 positions: "",

    Sausage:false,
    Pepperoni:false,
    canadianBecon:false,
spicyitalionSausage:false,
Grilledchicker:false,
Onions:false,
GreenPepper:false,
DicedTomatos:false,
BlackOlives:false,
RoastedGarlic:false,
ArtichokeHearts:false,
ThreeCheese:false,
Pineapple:false,
Extracheese: false,

Originalred: false,
GarlicRanch: false,
BBQSauce: false,
spinachAlfredo: false,

 
   
    motivation: ""
  });

 
  const [errors, setErrors] = useState({
    name: "",  
    Sausage:"",
    Pepperoni:"",
    canadianBecon:"",
    spicyitalionSausage:"",
    Grilledchicker:"",
    Onions:"",
    GreenPepper:"",
    DicedTomatos:"",
    BlackOlives:"",
    RoastedGarlic:"",
    ArtichokeHearts:"",
    ThreeCheese:"",
    Pineapple:"",
    Extracheese: "",

    Originalred: "",
GarlicRanch: "",
BBQSauce: "",
spinachAlfredo: "",
    

    positions: "",
    motivation: ""
  });


  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); 
        console.log("success", post);
        
        setFormState({
            name: "",
positions: (res.data.size),
          Sausage:false,
          Pepperoni:false,
          canadianBecon:false,
spicyitalionSausage:false,
Grilledchicker:false,
Onions:false,
GreenPepper:false,
DicedTomatos:false,
BlackOlives:false,
RoastedGarlic:false,
ArtichokeHearts:false,
ThreeCheese:false,
Pineapple:false,
Extracheese: false,

Originalred: false,
GarlicRanch: false,
BBQSauce: false,
spinachAlfredo: false,


          
          motivation: ""
        });
      })
      .catch(err => console.log(err.response));
  };

  const validateChange = e => {
    
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
<div><h1>build Your Own Pizza</h1></div>
<img ></img>
<label htmlFor="name">
         Name
        <input
          type="text"
           name="name"
           id = 'nameinput'
           placeholder = 'Name'
          value={formState.name}
          onChange={inputChange}
          />  {errors.name.length > 0  ? <p className="error">{errors.name}</p> : null}
        
      </label>
      <div><h1>build Your Own Pizza</h1></div>
<div><h1>choice of Size</h1> <p>required</p></div>
      <label htmlFor='positions'>
        
        <select id='positions' name='positions' onChange={inputChange}>
          <option value ={null}>select</option>
          <option value='small'>small</option>
          <option value='medium'>medium</option>
          <option value='large'>large</option>
        </select>
      </label>
      <div><h1>choice of Sauce</h1> <p>required</p></div>
      <label htmlFor='Originalred'className='terms'>
        
              <input
          type='checkbox'
          name='Originalred'
          checked={formState.Originalred}
          onChange={inputChange}
        />
        Original red
      </label>  
      <label htmlFor='GarlicRanch' className='terms'>
        <input
          type='checkbox'
          name='GarlicRanch'
          checked={formState.GarlicRanch}
          onChange={inputChange}
        />
         Garlic Ranch
      </label>  
      <label htmlFor='BBQSauce' className='terms'>
        <input
          type='checkbox'
          name='BBQSauce'
          checked={formState.BBQSauce}
          onChange={inputChange}
        />
        BBQ Sauce
      </label>  
      <label htmlFor='spinachAlfredo' className='terms'>
        <input
          type='checkbox'
          name='spinachAlfredo'
          checked={formState.spinachAlfredo}
          onChange={inputChange}
        />
        spinach Alfredo
      </label>  

      <div><h1>Add Topings</h1> <p>Choose up to 10</p></div>
 

 <label htmlFor='Pepperoni' className='terms'>
        <input
          type='checkbox'
          name='Pepperoni'
          checked={formState.Pepperoni}
          onChange={inputChange}
        />
        Pepperoni
      </label>      

      <label htmlFor='Sausage' className='terms'>
        <input
          type='checkbox'
          name='Sausage'
          checked={formState.Sausage}
          onChange={inputChange}
        />
        Sausage
      </label>  
      <label htmlFor='canadianBecon' className='terms'>
        <input
          type='checkbox'
          name='canadianBecon'
          checked={formState.canadianBecon}
          onChange={inputChange}
        />
        canadian Becon
      </label>  

      <label htmlFor='spicyitalionSausage' className='terms'>
        <input
          type='checkbox'
          name='spicyitalionSausage'
          checked={formState.spicyitalionSausage}
          onChange={inputChange}
        />
        spicy italion Sausage
      </label>  

      <label htmlFor='Grilledchicker' className='terms'>
        <input
          type='checkbox'
          name='Grilledchicker'
          checked={formState.Grilledchicker}
          onChange={inputChange}
        />
        Grilled chicker
      </label>  

      <label htmlFor='Onions' className='terms'>
        <input
          type='checkbox'
          name='Onions'
          checked={formState.Onions}
          onChange={inputChange}
        />
        Onions
      </label>  

      <label htmlFor='GreenPepper' className='terms'>
        <input
          type='checkbox'
          name='GreenPepper'
          checked={formState.GreenPepper}
          onChange={inputChange}
        />
        Green Pepper
      </label>  





      <label htmlFor='DicedTomatos' className='terms'>
        <input
          type='checkbox'
          name='DicedTomatos'
          checked={formState.DicedTomatos}
          onChange={inputChange}
        />
        Diced Tomatos
      </label>      

      <label htmlFor='BlackOlives' className='terms'>
        <input
          type='checkbox'
          name='BlackOlives'
          checked={formState.BlackOlives}
          onChange={inputChange}
        />
        Black Olives
      </label>  
      <label htmlFor='RoastedGarlic' className='terms'>
        <input
          type='checkbox'
          name='RoastedGarlic'
          checked={formState.RoastedGarlic}
          onChange={inputChange}
        />
        Roasted Garlic
      </label>  

      <label htmlFor='ArtichokeHearts' className='terms'>
        <input
          type='checkbox'
          name='ArtichokeHearts'
          checked={formState.ArtichokeHearts}
          onChange={inputChange}
        />
        Artichoke Hearts
      </label>  

      <label htmlFor='ThreeCheese' className='terms'>
        <input
          type='checkbox'
          name='ThreeCheese'
          checked={formState.ThreeCheese}
          onChange={inputChange}
        />
        Three Cheese
      </label>  

      <label htmlFor='Pineapple' className='terms'>
        <input
          type='checkbox'
          name='Pineapple'
          checked={formState.Pineapple}
          onChange={inputChange}
        />
        Pineapple
      </label>  

      <label htmlFor='Extracheese' className='terms'>
        <input
          type='checkbox'
          name='Extracheese'
          checked={formState.Extracheese}
          onChange={inputChange}
        />
        Extra cheese
      </label>  

      <div><h1>Choice of Substitute</h1> <p>Choose up to 1</p></div>

      <div><h1>Special instructions</h1></div>

      <label htmlFor='motivation'>
        
        <textarea
          name='motivation'
          value={formState.motivation}
          onChange={inputChange}
        />
        {errors.motivation.length > 0 ? (
          <p className='error'>{errors.motivation}</p>
        ) : null}
      </label>

     
      
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button name ='submit'disabled={buttonDisabled}
      >Add to order</button>
    </form>
  );
}