import {configureStore, createSlice} from '@reduxjs/toolkit';
const productslice=createSlice({
    name:'products',
    initialState:{
        Breakfast:[
         { name: 'idli', price: 40.13, image: "/HiPie/images/idli.png" },
    { name: 'Dosa', price: 60.76, image: "/images/dosa.png" },
    { name: 'poori', price: 70.34, image: "/images/poori.png" },
    { name: 'chapati', price: 120.13, image: "/images/chapati.png" },
    { name: 'vada', price: 90.16, image: "/images/vada.png" },
    { name: 'upma', price: 60.56, image: "/images/upma.png" }
  ],
  Lunch: [
    { name: 'Biryani', price: 400.13, image: "/HiPie/images/biryani.png" },
    { name: 'Roti', price: 100.76, image: "/images/roti.png" },
    { name: 'fried rice', price: 130.34, image: "/images/fried.png" },
    { name: 'paneer rice', price: 260.13, image: "/images/paneer.png" },
    { name: 'dal rice', price: 160.76, image: "/images/dal.png" },
    { name: 'goongura rice', price: 150.34, image: "/images/goongura.png" }
  ],
  Dinner: [
    { name: 'Chicken Biryani', price: 490.13, image: "/images/biryani.png" },
    { name: 'naan', price: 100.76, image: "/images/roti.png" },
    { name: 'fried rice', price: 130.34, image: "/images/fried.png" },
    { name: 'paneer rice', price: 260.13, image: "/images/paneer.png" },
    { name: 'dal rice', price: 245.76, image: "/images/dal.png" },
    { name: 'goongura rice', price: 145.34, image: "/images/goongura.png" }
  ]
},
    reducer:{}
});

const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{ addtocart:(state,action)=>{
        const status=state.find((item)=>item.name===action.payload.name);
        if(status){
            status.quantity+=1;
        }
        else{
            state.push({...action.payload,quantity:1});
        }
    },
    increment:(state,action) => 
    {
        const item=state.find((i)=>i.name===action.payload.name);
    if(item) item.quantity+=1;
    },
    decrement:(state,action) => 
    {
        const item=state.find((i)=>i.name===action.payload.name);
    if(item && item.quantity>1) item.quantity-=1;
    },
    remove:(state,action) =>{
     return   state.filter((item)=> item.name!==action.payload.name);
    },
     clearcart: (state, action) => {
      return [];
    },
    },
    });

export const {addtocart,increment,decrement,remove,clearcart}=cartslice.actions;

const orderslice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addorder: (state, action) => {
      // action.payload should be { id, items, total, date }
      state.push(action.payload);
    }
  }
});

export const { addorder } = orderslice.actions;

const store=configureStore({
    reducer:{products: productslice.reducer,cart:cartslice.reducer, orders: orderslice.reducer},
});
export default store;