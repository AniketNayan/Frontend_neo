import DogCart from  './Dog';
import { Greet } from './Greet';
import './App.css' 
//user defined components start from block letters and the inbuilt ones are defined with initial letter:small
function App() {
  return (
    <>
   helloooo
   <div id="app">
<button className='btn'>
  submit
</button>
<DogCart name='TOM' image='https://www.sheknows.co
m/wp-content/uploads/2018/08/tsqanhuqpcplfcsmuizq.jpeg?w=1024'/>
<Greet text='They called me........***(❁´◡`❁)***........Woohooo'/>
   </div>
    
    </>
  );
}

export default App;
