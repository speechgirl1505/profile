import React, { Component } from 'react';

class yoga extends Component {
  render() {

    if(this.props.data){
      var yoga = this.props.data.yoga.map(function(yoga){
        return  <li key={yoga.user}>
            <blockquote>
               <p>{yoga.text}</p>
               <cite>{yoga.user}</cite>
               <img alt="pics">{yoga.img}</img>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="yoga">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client yoga</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {yoga}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default yoga;
