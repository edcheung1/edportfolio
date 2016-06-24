var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TimerMixin = require('react-timer-mixin');
var ReactSticky = require('react-sticky');

var allProjects = require('./data/projects.json');
var ascending = true;

const Modal = ReactBootstrap.Modal;
const ButtonToolbar = ReactBootstrap.ButtonToolbar;
const Button = ReactBootstrap.Button;
const Nav = ReactBootstrap.Nav;
const Navbar = ReactBootstrap.Navbar;
const NavItem = ReactBootstrap.NavItem;
const NavDropdown = ReactBootstrap.NavDropdown;
const MenuItem = ReactBootstrap.MenuItem;
const ProgressBar = ReactBootstrap.ProgressBar;
const Tooltip = ReactBootstrap.Tooltip;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;

const Sticky = ReactSticky.Sticky;
const StickyContainer = ReactSticky.StickyContainer;

// const {Modal, ButtonToolbar, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} = ReactBootstrap;
// const {StickyContainer, Sticky} = ReactSticky;

/*
	React class for about container
*/

var AboutBox = React.createClass({
  getInitialState: function() {
    return {
      aboutState: 'span-engr'
    }   
  },
  
  changeBackground: function(spanId) {
    if(spanId == this.state.aboutState) {
      return;
    }
    
    $('h3').children().css('text-decoration', '');
    $('#'+spanId).css('text-decoration', 'underline');
		
		$('.style-bg').stop(true).css('opacity', 1).animate({
      opacity: .75
    }, 150, function() {
			switch(spanId) {
				case 'span-dev':
					$('#about-bg').removeClass().addClass('style-bg dev-bg');
					$('#profile-icon').removeClass().addClass('fa fa-code fa-lg');									
					break;
				case 'span-engr':
					$('#about-bg').removeClass().addClass('style-bg engr-bg');
					$('#profile-icon').removeClass().addClass('fa fa-cogs fa-lg');
					break;
				case 'span-data':
					$('#about-bg').removeClass().addClass('style-bg data-bg');
					$('#profile-icon').removeClass().addClass('fa fa-database fa-lg');
					break;
			};
			$('.style-bg').css('opacity', 0.75).animate({
				opacity: 1
			}, 500);	
		});
    
    this.setState({
      aboutState: spanId
    });    
  },
  
  render: function() {
    return(
      <div id='about-box'>				
        <div id='about-inner'>
          <div id='about-header'>
            <h1>ED CHEUNG</h1>
          </div>
          <div id='profile'>
            <img src='https://res.cloudinary.com/edcheung/image/upload/c_crop,h_1400,w_1400,x_1415,y_140/v1458272643/Ed_Self_n6tf30.jpg' id='profile-pic' />
            <div className="fa fa-cogs fa-lg" id='profile-icon'></div>
          </div>
          <h3>
            <span id="span-dev" onMouseOver={this.changeBackground.bind(null,'span-dev')}>Full-Stack Developer</span> |&nbsp;
            <span id="span-engr" onMouseOver={this.changeBackground.bind(null,'span-engr')}>Engineer</span> |&nbsp;
            <span id="span-data" onMouseOver={this.changeBackground.bind(null,'span-data')}>Data Enthusiast</span></h3>
        </div>
        <div id='about-bg' className='style-bg engr-bg'></div>
      </div>
    );
  }  
})

/*
	React class for introduction container
*/

var IntroBox = React.createClass({
	getInitialState: function() {
		return {
			progressValues: {
				html: 0,
				javascript: 0,
				react: 0,
				d3: 0,
				mongo: 0,
				node: 0,
				java: 0
			}
		}
	},
	
	fillProgressBar: function(name, value) {
		var waitProgress = 500;
		var newProgressValues = this.state.progressValues;
		
		switch(name) {
			case 'html':
				if(this.state.progressValues.html == 0) waitProgress = 0;
				newProgressValues.html = 0;
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.html = value;
					this.setState({
						progressValues: newProgressValues
					});
				}.bind(this), waitProgress);
				break;
			case 'javascript':
				if(this.state.progressValues.javascript == 0) waitProgress = 0;
				newProgressValues.javascript = 0;
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.javascript = value;
					this.setState({
						progressValues: newProgressValues
					});
				}.bind(this), waitProgress);
				break;
			case 'react':
				if(this.state.progressValues.react == 0) waitProgress = 0;
				newProgressValues.react = 0;
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.react = value;
					this.setState({
						progressValues: newProgressValues
					});
				}.bind(this), waitProgress);
				break;
			case 'd3':
				if(this.state.progressValues.d3 == 0) waitProgress = 0;
				newProgressValues.d3 = 0;
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.d3 = value;
					this.setState({
						progressValues: newProgressValues
					});
				}.bind(this), waitProgress);
				break;
			case 'mongo':
				if(this.state.progressValues.mongo == 0) waitProgress = 0;
				newProgressValues.mongo = 0;
				$('#mongo-star').removeClass('fa-star-o gold')
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.mongo = value;
					this.setState({
						progressValues: newProgressValues
					});
					$('#mongo-star').removeClass('fa-star-o').addClass('fa-star gold');
				}.bind(this), waitProgress);
				break;
			case 'node':
				if(this.state.progressValues.node == 0) waitProgress = 0;
				newProgressValues.node = 0;
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.node = value;
					this.setState({
						progressValues: newProgressValues
					});
				}.bind(this), waitProgress);
				break;
			case 'java':
				if(this.state.progressValues.java == 0) waitProgress = 0;
				newProgressValues.java = 0;
				this.setState({
					progressValues: newProgressValues
				});
				setTimeout(function() {
					newProgressValues.java = value;
					this.setState({
						progressValues: newProgressValues
					});
				}.bind(this), waitProgress);
				break;
		}
		
	},
	
	render: function() {
		var certTooltip = <Tooltip id="cert-tooltip">Certified!</Tooltip>;
		
		return(
			<div id="intro-box">				
				<div className="container">
					<div className="col-sm-6 text-left">
						<div className="navAnchor" id="about" />
						
						<div id="hello-box">
							<h2>Hello!</h2>
							<h3>My name is Ed. I'm a self-taught full-stack developer and tech aficionado.</h3><br/>
							<p><i>
							I love innovation and being on the forefront of groundbreaking technology. 
							Building and creating, virtually or physically, is my passion.</i>
							<br/><br/>
							While working as a structural engineer, I was tasked to perform repeated structural analyses with slight parameter changes between each one. 
							Not wanting to perform monotonous work, I began tinkering with ways to automate the process with the tool available to me at the time: Excel VBA. 
							I taught myself the ins and outs of the language and I was able to script many of the tedious and non-value-adding portions of my work. 
							Along the way, I discovered my passion for coding.
							<br/><br/>
							I began my programming journey by working through courses offered on Codecademy, but quickly exhausted the introductory material. 
							With the goal of further developing my programming fundamentals, I enrolled and completed a 12-week Java course in <b>Object-Oriented Programming</b>, learning concepts that are applicable for any languages. 
							Currently, I am working through the <b>Full-Stack Developer</b> curriculum offered through FreeCodeCamp, having completed the <b>Front-End Developer</b> certification and a majority of the projects in the <b>Back-End Developer</b> and <b>Data Visualization</b> certifications. 
							Many of the projects I've completed for these courses can be found in my portfolio below.
							<br/><br/> 
							By combining my engineering background and industry work experience, I can bring a unique and powerful perspective to a software firm looking for a self-motivated and forward-thinking developer.
							I am located in Seattle, WA and am open to any developer opportunities in the area or remotely.
							</p>
						</div>
						
					</div>
					<div className="col-sm-6 text-left">
					
						<div id="skills-box">
							<h2>Skills</h2>
							HTML/CSS/Bootstrap<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'html', 80)} bsStyle="success" now={this.state.progressValues.html} label="Advanced"/><br/>
							Javascript<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'javascript', 75)} bsStyle="success" now={this.state.progressValues.javascript} label="Advanced"/><br/>
							React.js<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'react', 75)} bsStyle="success" now={this.state.progressValues.react} label="Advanced"/><br/>
							D3.js<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'d3', 60)} bsStyle="info" now={this.state.progressValues.d3} label="Intermediate"/><br/>
							MongoDB<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'mongo', 65)} bsStyle="info" now={this.state.progressValues.mongo} label="Intermediate"/>
								<div className="progress-icon">
									<OverlayTrigger placement="top" overlay={certTooltip}>
										<i id="mongo-star" className="fa fa-star-o fa-lg" aria-hidden="true"></i>
									</OverlayTrigger>
								</div><br/>
							Node.js<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'node', 50)} bsStyle="warning" now={this.state.progressValues.node} label="Basic"/><br/>
							Java<br/>
								<ProgressBar striped onMouseOver={this.fillProgressBar.bind(null,'java', 55)} bsStyle="warning" now={this.state.progressValues.java} label="Basic"/><br/>
						</div>
					
						<div id="cert-box">
							<h2>Certificates</h2>
							<a href="https://university.mongodb.com/exams/display_certificate?license1=194&license2=791&license3=790" target="_blank">
								<Button><i className="fa fa-leaf fa-fw" />&nbsp;MongoDB Certified Developer Associate</Button>
							</a><br/><br/>
							<a href="./public/data/certificates/mongodbcert.pdf" target="_blank">
								<Button><i className="fa fa-leaf fa-fw" />&nbsp;MongoDB for Node.js Developers</Button>
							</a><br/><br/>
							<a href="https://www.freecodecamp.com/edcheung1/front-end-certification" target="_blank">
								<Button><i className="fa fa-fire fa-fw" />&nbsp;FreeCodeCamp Front-End</Button>
							</a><br/><br/>
							<a href="./public/data/certificates/java_mooc1.pdf" target="_blank">
								<Button><i className="fa fa-coffee fa-fw" />&nbsp;OOP with Java Part 1</Button>
							</a><br/><br/>
							<a href="./public/data/certificates/java_mooc2.pdf" target="_blank">
								<Button><i className="fa fa-coffee fa-fw" />&nbsp;OOP with Java Part 2</Button>
							</a><br/><br/>
							<h2>Resumé</h2>
							<a href="./public/data/certificates/EdwardCheungResume.pdf" target="_blank">
								<Button><i className="fa fa-graduation-cap fa-fw" />&nbsp;Edward Cheung</Button>
							</a>
						</div>
						
					</div>
				</div>				
			</div>
		);
	}	
})

/*
	React class for portfolio container
*/

var PortfolioBox = React.createClass({
	mixins: [TimerMixin],
  getInitialState: function() {
		var initialFilterFav = allProjects.filter(function(project) {
			return $.inArray('fav', project.tags) > -1;      
		});     
		
     return {
       projectList: initialFilterFav,
			 currFilter: 'fav'
     }
  },
  
  sortDate: function() {
		if(this.state.projectList.length <= 0) {
			return;
		};
		
		var sortedProjects = this.state.projectList.sort(compareDate);
		
		this.setState({
			projectList: []
		});
		
		this.setTimeout(function() {			
			this.setState({
				projectList: sortedProjects
			})
			ascending = !ascending;			
		}, 300);    
  },
  
  setFilter: function(filter, e) {
		if(this.state.currFilter === filter) {
			return;
		}
		
		$('#portfolio-menu').children().removeClass('portfolio-menu-select').css('color', '#333');    
		if(typeof e !== 'undefined') {
			$(e.currentTarget).addClass('portfolio-menu-select');
		};
		
		this.setState({
			projectList: []
		});

		// Give 300ms for old filtered projects to leave
		this.setTimeout(function() {			  
			var filteredList = allProjects;
			if(filter != 'all') {      
				var filteredList = allProjects.filter(function(project) {
					return $.inArray(filter, project.tags) > -1;      
				});      
			}    
			
			this.setState({
				projectList: filteredList,
				currFilter: filter
			});			
		}, 300);    
  },
  
  componentDidMount: function() {    
    this.setFilter('fav');
    $('#portfolio-menu div').first().addClass('portfolio-menu-select');
  },
  
  render: function() {    
    return(
        <div id="portfolio-box">
					<StickyContainer>
						<div className="navAnchor" id="portfolio" />
						<h2>Portfolio</h2>
						<Sticky topOffset={-74}>
							<div id="portfolio-menu">
								<div onClick={this.setFilter.bind(null, 'fav')}>
									<div>
										<i className='fa fa-heart fa-fw' /><span>&nbsp;My Favorites</span>
									</div>
								</div>
								<div onClick={this.setFilter.bind(null,'front')}>
									<div>
										<i className="fa fa-desktop fa-fw" /><span>&nbsp;Front-End</span>
									</div>
								</div>
								<div onClick={this.setFilter.bind(null,'back')}>
									<div>
										<i className="fa fa-database fa-fw" /><span>&nbsp;Back-End</span>
									</div>
								</div>
								<div onClick={this.setFilter.bind(null,'full')}>
									<div>
										<i className="fa fa-exchange fa-fw" /><span>&nbsp;Full-Stack</span>
									</div>
								</div>
								<div onClick={this.setFilter.bind(null,'data')}>
									<div>
										<i className="fa fa-bar-chart fa-fw" /><span>&nbsp;Data Visuals</span>
									</div>
								</div>
								<div onClick={this.setFilter.bind(null,'other')}>
									<div>
										<i className='fa fa-cogs fa-fw' /><span>&nbsp;Other</span>
									</div>
								</div>
								<div onClick={this.setFilter.bind(null,'all')}>
									<div>
										<i className='fa fa-asterisk fa-fw' /><span>&nbsp;All</span>
									</div>
								</div>
							</div>
						</Sticky>
					
						<div className="container">
							<ProjectRow projects={this.state.projectList} />
						</div>
						<div className="btn-group">            
							<Button onClick={this.sortDate}>Sort by Date</Button>
						</div>
					</StickyContainer>
        </div>
    )
  }  
});

/* 
  React class for creating items for individual projects and onClick events (i.e. modals)
*/

var ProjectRow = React.createClass({  
  getInitialState: function() {
    return {
      showModal: false
    }
  },
  
  openModal: function(project) {
    this.getModalButtons(project);    
    this.setState({      
      projectTitle: project.title,
      projectLink: project.link,
      projectImg: project.thumb,
      projectDesc: project.desc,
      projectDate: project.date,      
      showModal: true
    });        
  },
  
  closeModal: function() {
    this.setState({
      showModal: false
    })
  },
  
  getModalButtons: function(project) {
    var modalButtons = [];    
    if (project.hasOwnProperty('link')) {
      modalButtons.push(<Button href={project.link} target='blank'><i className="fa fa-cog"></i> Demo</Button>)
    };    
    if (project.hasOwnProperty('git')) {
      modalButtons.push(<Button href={project.git} target='blank'><i className="fa fa-github"></i> GitHub</Button>)
    };    
    this.setState({
      projectButtons: modalButtons,
    });
  },

  render: function() {
    var projectList = this.props.projects.map(function(project, i) {
    	var isFav = project.tags.indexOf('fav') > -1 ? 'project-thumb-fav' : '';
      return(
        <div className="col-md-4 col-sm-6 col-xs-12 project-col project-slideup" key={i+1}>
					<div className="project-box">						
						<img src={project.thumb} className={"project-thumb " + isFav} onClick={this.openModal.bind(null, project)}/>
						<span>{project.title}</span> 
					</div>
        </div>
      );
    }.bind(this));    
       
    return (
      <div className='project-list-container'>
				<ReactCSSTransitionGroup transitionName="project" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{projectList}
				</ReactCSSTransitionGroup>
        <Modal
          show={this.state.showModal}
          onHide={this.closeModal} >
          <Modal.Header closeButton>
            {this.state.projectTitle}
          </Modal.Header>
          <Modal.Body>
						<div className="col-sm-6 col-xs-12">
							<img src={this.state.projectImg} className='modal-img'/>
						</div>
						<div className="col-sm-6 col-xs-12">
							<div className='modal-desc'>
								<strong>Description: </strong><div dangerouslySetInnerHTML={{__html: this.state.projectDesc}} /><br />
								<strong>Completed: </strong>{this.state.projectDate}
							</div>
						</div>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              {this.state.projectButtons}
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }  
});

/*
	React class for contact information container
*/

var ContactBox = React.createClass({
  render: function() {
    return(
      <div id="contact-box">
				<h2>Contact</h2>
				<span>Feel free to send me a message!<br/>I will respond as quickly as I can.<br/><br/></span>
				<div className="navAnchor" id="contact" />
        <a href='https://github.com/edcheung1' target='_blank'>
          <i className="fa fa-github fa-2x fa-fw" /></a>
        <a href='https://www.linkedin.com/in/edcheung1991' target='_blank'>
          <i className="fa fa-linkedin-square fa-2x fa-fw" /></a>
        <a href='https://www.freecodecamp.com/edcheung1' target='_blank'>
          <i className="fa fa-fire fa-2x fa-fw" /></a>
        <a href='mailto:echeung1991@gmail.com'>
          <i className="fa fa-envelope fa-2x fa-fw" /></a>
        <span style={{fontSize: '.75em'}}><br/><br/>© Edward Cheung 2016</span>
      </div>
    );    
  }  
})

var NavbarBox = React.createClass({
	smoothScroll: function(anchor, e) {
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $(anchor).offset().top
		}, 500, function(){
			window.location.hash = anchor;
		});
	},
	
	render: function() {
		return (
			<Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={this.smoothScroll.bind(null, '#top')}>Ed Cheung</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={this.smoothScroll.bind(null, '#about')}>About</NavItem>
            <NavItem eventKey={2} onClick={this.smoothScroll.bind(null, '#portfolio')}>Portfolio</NavItem>
            <NavItem eventKey={3} onClick={this.smoothScroll.bind(null, '#contact')}>Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>			
		);	
	}
})

var Main = React.createClass({
	
  render: function() {
    return (
      <div>
				<div id="top" />
        <NavbarBox />			
        <AboutBox />
				<IntroBox />
        <PortfolioBox />
				<div id="spacer-box" />
        <ContactBox id="contactBox"/>
      </div>
    );    
  }  
})

ReactDOM.render(
  <Main />,
  document.getElementById('react-hook')
)

function compareDate(a,b) {
  var aDate = new Date(a.date);
  var bDate = new Date(b.date);
  if(aDate < bDate) {
    return ascending ? 1 : -1;
  } else if (aDate > bDate) {
    return ascending ? -1 : 1;
  } else {
    return 0;
  }
};