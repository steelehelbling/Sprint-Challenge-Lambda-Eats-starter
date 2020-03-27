import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";



const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),  
  Sausage:yup.boolean().oneOf([true],) ,
  Pepperoni: yup.boolean().oneOf([true], ),
  canadianBecon: yup.boolean().oneOf([true], ),
  spicyitalionSausage: yup.boolean().oneOf([true], ),
  Grilledchicker: yup.boolean().oneOf([true], ),
  Onions: yup.boolean().oneOf([true], ),
  GreenPepper: yup.boolean().oneOf([true], ),
  DicedTomatos: yup.boolean().oneOf([true], ),
  BlackOlives: yup.boolean().oneOf([true], ),
  RoastedGarlic: yup.boolean().oneOf([true], ),
  ArtichokeHearts: yup.boolean().oneOf([true], ),
  ThreeCheese: yup.boolean().oneOf([true], ),
  Pineapple: yup.boolean().oneOf([true], ),
  Extracheese: yup.boolean().oneOf([true], ),

  Originalred: yup.boolean().oneOf([true], ),
  GarlicRanch:yup.boolean().oneOf([true], ),
  BBQSauce: yup.boolean().oneOf([true], ),
  spinachAlfredo: yup.boolean().oneOf([true], ),

  sauce: yup.string(),
  positions: yup.string(),
  motivation: yup.string().required("must include why you'd like to join")
});

export default function Form() {
 
  const [buttonDisabled, setButtonDisabled] = useState(true);

 
  const [formState, setFormState] = useState({
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

    sauce:"",
    positions: "",
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
    
    sauce:"",
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

sauce:"",
          positions: "",
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
<div>build Your Own Pizza</div>
<img ></img>
<label htmlFor="name">
         Name
        <input
          type="text"
           name="name"
          value={formState.name}
          onChange={inputChange}
          />  {errors.name.length > 0  ? <p className="error">{errors.name}</p> : null}
        
      </label>
      <div>build Your Own Pizza</div>
<div><h1>choice of Size</h1> <p>required</p></div>
      <label htmlFor='positions'>
        
        <select id='positions' name='positions' onChange={inputChange}>
          <option value='select'>select</option>
          <option value='small'>small</option>
          <option value='medium'>medium</option>
          <option value='large'>large</option>
        </select>
      </label>
      <div><h1>choice of Sauce</h1> <p>required</p></div>
      <label htmlFor='sauce'className='terms'>
        
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
      <button //disabled={buttonDisabled}
      >Add to order</button>
    </form>
  );
}