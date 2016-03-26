var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TimerMixin = require('react-timer-mixin');

var allProjects = require('./data/projects.json');
var ascending = true;

var Modal = ReactBootstrap.Modal;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Navbar = ReactBootstrap.Navbar, Nav = ReactBootstrap.Nav, NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown, MenuItem = ReactBootstrap.MenuItem;

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
	render: function() {
		return(
			<div id="intro-box">
				<div className="navAnchor" id="about"></div>
				<div className="container">
					<div className="col-sm-6 text-left" id="hello-box">
						<h2>Hello!</h2><br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
					<div className="col-sm-6 text-left">
						<h2>Certificates</h2><br/>
						<a href="./public/data/certificates/mongodbcert.pdf" target="_blank">
							<Button><i className="fa fa-leaf fa-fw" />&nbsp;MongoDB</Button>
						</a><br/><br/>
						<a href="https://www.freecodecamp.com/edcheung1/front-end-certification" target="_blank">
							<Button><i className="fa fa-fire fa-fw" />&nbsp;FreeCodeCamp Front-End</Button>
						</a><br/><br/>
						<a href="./public/data/certificates/java_mooc1.pdf" target="_blank">
							<Button><i className="fa fa-coffee fa-fw" />&nbsp;OOP with Java Part 1</Button>
						</a><br/><br/>
						<a href="./public/data/certificates/java_mooc2.pdf" target="_blank">
							<Button><i className="fa fa-coffee fa-fw" />&nbsp;OOP with Java Part 2</Button>
						</a>
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
    var sortedProjects = this.state.projectList.sort(compareDate);
    this.setState({
      projectList: sortedProjects
    })
    ascending = !ascending;
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
					<div className="navAnchor" id="portfolio"></div>
          <h2>Portfolio</h2>
          <div id="portfolio-menu">
            <div onClick={this.setFilter.bind(this, 'fav')}>
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
            <div onClick={this.setFilter.bind(this,'all')}>
							<div>
								<i className='fa fa-asterisk fa-fw' /><span>&nbsp;All</span>
							</div>
            </div>
          </div>
          <div className="container">
            <ProjectRow projects={this.state.projectList} />
          </div>
          <div className="btn-group">            
            <Button onClick={this.sortDate}>Sort by Date</Button>
          </div>
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
    }
    
    if (project.hasOwnProperty('git')) {
      modalButtons.push(<Button href={project.git} target='blank'><i className="fa fa-github"></i> GitHub</Button>)
    }
    
    this.setState({
      projectButtons: modalButtons,
    });
  },
  
	componentDidMount: function() {
		this.setProjectHover();
	},
	
  componentDidUpdate: function() {
    this.setProjectHover();
  },   
  
	setProjectHover: function() {
		// $('.project-box').hover(function() {
      // $(this).find('img').stop(true, true).fadeTo(250, .25);
			// // $(this).find('span').stop(true, true).fadeIn(250); 
    // }, function() {
      // $(this).find('img').stop(true, true).fadeTo(250, 1);     
			// // $(this).find('span').stop(true, true).fadeOut(250); 
    // });
	},
	
	// <div className="project-title">{project.title}</div>
  render: function() {
    var projectList = this.props.projects.map(function(project, i) {
      return(
        <div className="col-md-4 col-sm-6 col-xs-12 project-box project-slideup" key={i+1}>
					<span>{project.title}</span> 
					<img src={project.thumb} className="project-thumb" onClick={this.openModal.bind(null, project)}/>
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
            <img src={this.state.projectImg} className='modal-img pull-left'/>
            <strong>Description: </strong><p>{this.state.projectDesc}</p>
            <strong>Completed: </strong>{this.state.projectDate}
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
				<div className="navAnchor" id="contact"></div>
        <a href='https://github.com/edcheung1' target='_blank'>
          <i className="fa fa-github fa-2x fa-fw" /></a>
        <a href='https://www.linkedin.com/in/edcheung1991' target='_blank'>
          <i className="fa fa-linkedin-square fa-2x fa-fw" /></a>
        <a href='https://www.freecodecamp.com/edcheung1' target='_blank'>
          <i className="fa fa-fire fa-2x fa-fw" /></a>
        <a href='mailto:echeung1991@gmail.com'>
          <i className="fa fa-envelope fa-2x fa-fw" /></a>
      </div>
    );    
  }  
})

var Main = React.createClass({	
  render: function() {
    const navbarInstance = (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Ed Cheung</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about">About</NavItem>
            <NavItem eventKey={2} href="#portfolio">Portfolio</NavItem>
            <NavItem eventKey={3} href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    
    return (
      <div>
        {navbarInstance}        
        <AboutBox />
				<IntroBox />
        <PortfolioBox />
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