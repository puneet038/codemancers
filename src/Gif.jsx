import React,{useState,useEffect} from 'react';
import Card from "./Card";
import Gifimage from "./Gifimage";
import Gifcard from "./Gifcard";

const Gif = () => {
    const [message,setmesssage]=useState();
    const[show,setshow]=useState(false);
    const [api,setapi]=useState('jump');
    const [response,setresponse]=useState([]);
    

    

    const [allitems,setallitems]=useState([{
        message:'',
        url:''
    }]);

    const adddata=(id)=>{
        if(message=='' && id==''){
            alert('Type the message!')
        }
        else{
            setallitems((oldata)=>{
                return([...oldata,{message:message,url:id}])
            })
        }
     

        setmesssage("");
    }

    const call=async(e)=>{
        setapi(e.target.value)
        const reso=await fetch(`https://api.giphy.com/v1/gifs/search?q=${api}&api_key=cHyLZyf4kJrpa47hQB3BgoGfyt4r47LD&limit=5`);
       const res=await reso.json();
       setresponse(res.data);
    }


 
    return (
        <div class="main_div">
            <input class="input" value={message} type ="text" placeholder="type message" onChange={(e)=>setmesssage(e.target.value)} /> 
            <div style={{width:'300px',marginLeft:'37%',marginTop:'30px'}}>
                <button onClick={()=>setshow(!show)} style={{float:'left'}}>GIF</button>
                <button style={{float:'right'}} onClick={adddata}>POST</button>
                
            </div>  
            <br/>
            {show==true?
             <div style={{marginTop:'50px'}}>
             <input value={api} class="gifinput" type="text" placeholder="Search GIF" onChange={call}/>
         </div>:null}


         
         <div style={{display:'grid',marginTop:'30px'}}>

             
         <div style={{display:'inline'}}>

{response.map((cvalue)=>{
    return(<Gifimage url={cvalue.images.original.webp} functo={adddata}/>)
})}

</div>

         {allitems.map((cvalue)=>{
             if(cvalue.message==''){
                if(cvalue.url==''){

                }
                else{
                    return(<Gifcard img={cvalue.url}/>)
                }

             }
             else{
                return(<Card mess={cvalue.message}/>)
             }
           
         })}
         

        
         

        



         </div>
            
        </div>


// cHyLZyf4kJrpa47hQB3BgoGfyt4r47LD


    
    )
}

export default Gif
