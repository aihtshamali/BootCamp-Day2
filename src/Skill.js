import React from 'react';
import OrderList from './Components/ListComponents/OrderList'
function Skill(){
    return (
        <div>
            <p>I'm a Software Developer by profession</p>
            <p>
                Some of my technical skills are:
            </p>
            <span class="left-align"><OrderList list={["PHP","Laravel","C# MVC5","Docker","JS","and many more"]}/></span>
        </div>
    );
}

export default Skill