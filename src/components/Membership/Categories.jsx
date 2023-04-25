import React from 'react';
import './Categories.css'

function Categories(){
    return(
    <div className='body'> 
    
    <h1>Membership Categories</h1>
    <div className='body'>

    <h3><strong>1.&nbsp; Life members; </strong></h3>
    <blockquote>
        <p>Gold Membership – ksh. 100,000 (1000 USD)</p>
        <p>Silver Membership – ksh. 50,000 (500 USD)</p>
        <p>Bronze Membership – ksh. 25,000 (250 USD)</p>
    </blockquote>
    <p>&nbsp;</p>
    <blockquote>
        <p><strong>2. Honorary Membership – ksh 3,000 (30 USD)</strong></p>
    </blockquote>
    <p>&nbsp;</p>
    <blockquote>
        <p><strong>3. Annual Membership – ksh 2,000 (20 USD)</strong></p>
    </blockquote>
        
    </div>     
    </div>)
}
export default Categories;