import React,{ Component} from 'react';
import './Travel.css'
import axios from 'axios'

class  ValidatingForm extends Component {
    constructor(props){
        super(props);
        this.state={
            sno:'',
            places:'',
            state:'',
            ratings:'',
        };
    }y
    
    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handlePlacesChange=(event)=>{
        this.setState({places:event.target.value})
    };
    handleStateChange=(event)=>{
        this.setState({state:event.target.value})
    };
    handleRatingsChange=(event)=>{
        this.setState({ratings:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            places: this.state.places,
            state: this.state.state,
            ratings: this.state.ratings,
        };
        
        axios.post('http://127.0.0.1:8080/p', data)
    }
    /*const initValues={SerialNo:'',places:'',ratings:'',state:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Za-z]") 

        if(!values.SerialNo)
        errors.SerialNo="Serial No is Required";
        else if(preg.test(values.SerialNo))
        errors.SerialNo="Serial No must be only in numericals"
       
        if(!values.places)
        errors.places="Places is Required";
        
        if(!values.ratings)
        errors.ratings="Ratings is Required";
        else if(preg.test(values.ratings))
        errors.ratings="Ratings must be only in numericals"
       

        if(!values.state)
        errors.state="state is Required";
        return errors;
    }*/
     render(){
    return ( 
        <>
        <center>
        <h1>Tourist Details</h1>
        <div className='container'>
            {
                /*Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed in Successfully</h1>)
                :(<pre></pre>)*/
            }
        <form onSubmit={this.handleSubmit}>
            {/* <h1>Tourist Details</h1> */}
           
            
            <div className='row'>
                <label>Serial No: </label><br></br>
                <input type="number" id='SerialNo' placeholder=' Enter the Serial No...' value={this.state.sno}
                    onChange={this.handleSnoChange}/>
            </div><br></br>
            {/* <p style={{color:"red"}}>{formErrors.SerialNo}</p> */}

            <div className='row'>
                <label>Places : </label><br></br>
                <input type="text" id='places' placeholder=' Enter the place...' value={this.state.places}
                    onChange={this.handlePlacesChange}/>
            </div><br></br>
            {/* <p style={{color:"red"}}>{formErrors.places}</p> */}


            <div className='row'>
                <label>State : </label><br></br>
                <input type="text" id='state' placeholder=' Enter the State...' value={this.state.state}
                    onChange={this.handleStateChange}/>
            </div><br></br>
            {/* <p style={{color:"red"}}>{formErrors.state}</p> */}

            <div className='row'>
                <label>Ratings : </label><br></br>
                <input type="text" id='ratings' placeholder=' Enter the Ratings...' value={this.state.ratings}
                    onChange={this.handleRatingsChange}/>
            </div><br></br>
            {/* <p style={{color:"red"}}>{formErrors.ratings}</p> */}

            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div>
       
        </center>
        </>
     );
        }
}

export default ValidatingForm