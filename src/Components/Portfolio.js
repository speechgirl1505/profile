import React, { Component } from 'react';

class Portfolio extends Component {

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>Technologies Used:</h5>

                     <p>{projects.technologies}</p>
                  </div>
                </div>
              {/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
            </a>
            {/* drop-icon <i class="fas fa-angle-down fa-3x"></i> */}
          </div>
          {/* <a className="drop-icon"><i class="fas fa-angle-down fa-3x"></i></a> */}
          <div className="projInfo">
            <h3 className="projTitle">{projects.title}</h3>
            <p className="projDesc">{projects.category}</p>
            {/* <p className="projtech"><strong>Technologies used:</strong> {projects.technologies}</p> */}
            <a href={projects.url}><button  className="portBtn">Website</button></a>
            <a href={projects.github}><button  className="portBtn">Github</button></a>
            </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
            {/* drop down for more info on each project needs to be in here */}
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
