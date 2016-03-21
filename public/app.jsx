var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var allProjects = [
	{title: 'My Portfolio', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1458516387/Ed_Portfolio_hd1rck.png', link: 'http://edcheung-portfolio.herokuapp.com/', git: 'https://github.com/edcheung1/edportfolio', date:'3/25/16', tags: ['fav', 'full']},
  {title: 'Simon', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457920043/Ed_Simon_shf5vc.png', link: 'http://codepen.io/edcheung/pen/XXpqKZ', desc: 'A remake of the classic Simon® game, test your memory and reflexes and try to reach a score of 20! Activate strict mode to make the game reset completely on a mistake, or deactivate it so it continues where you left off.', date: '1/5/16', tags: ['fav', 'front']},
  {title: 'Recipe Box', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457919611/Ed_RecipeBox_nzdqpo.png', link:
  'http://codepen.io/edcheung/pen/bExZzv', date: '2/17/16', tags: ['fav', 'front']},
  {title: 'MongoMart', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457911220/Ed_MongoMart_gd0tna.png', link: 'http://edcheung-mongomart.herokuapp.com/', git: 'https://github.com/edcheung1/mongomart', date: '3/1/16', tags: ['fav', 'full']},
  {title: 'Worm Game', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1458191409/Ed_JavaWorm_n1igtk.png', date: '10/27/15', tags: ['fav', 'other']},
  {title: 'Game of Life', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1458191410/Ed_GameOfLifeJava_lzwakq.png', date: '10/10/15', tags: ['other']},
  {title: 'GDP Data Visualization', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457894017/Ed_GDP_zygcqu.png', link: 'http://codepen.io/edcheung/pen/adxRMz', date: '2/29/16', tags: ['fav', 'data']},
  {title: 'Tic-Tac-Toe', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,g_north,h_175,w_275/v1457898738/Ed_TicTacToe_mbchhm.png', link: 'http://codepen.io/edcheung/pen/PZNpbQ', date: '12/22/15', tags: ['fav', 'front']},
  {title: 'Markdown Previewer', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457917602/Ed_MarkdownPreviewer_ddlmxc.png', link: 'http://codepen.io/edcheung/pen/NxzxWQ', date: '1/29/16', tags: ['front']},
  {title: 'Camper Leaderboard', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457917939/Ed_CamperLeaderBoard_gssv7k.png', link: 'http://codepen.io/edcheung/pen/ZQjQyp', date: '2/3/16', tags: ['front']},
  {title: 'TwitchTV App', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457918127/Ed_Twitch_nqchyu.png', link: 'http://codepen.io/edcheung/pen/YyMQPz', date: '12/4/15', tags: ['front']},
  {title: 'Wikipedia App', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_scale,h_175,w_275/v1457918801/Ed_Wikipedia_cnrn9e.png', link: 'http://codepen.io/edcheung/pen/zrYmPg', date: '12/11/15', tags: ['front']},
  {title: 'Camper News App', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457918991/Ed_CamperNews_xjx17n.png', link: 'http://codepen.io/edcheung/pen/KVPoad', date: '12/2/15', tags: ['front']},
  {title: 'Javascript Calculator', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457919250/Ed_Calculator_uvaqtt.png', link: 'http://codepen.io/edcheung/pen/RWEeEK', date: '11/17/15', tags: ['front']},
  {title: 'Local Weather App', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457919450/Ed_Weather_a6dqqp.png', link: 'http://codepen.io/edcheung/pen/qOvBNd', date: '11/18/15', tags: ['front']},
  {title: 'Pomodoro Timer', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,h_175,w_275/v1457920246/Ed_Timer_q0kjfl.png', link: 'http://codepen.io/edcheung/pen/VvEbjm', date: '11/13/15', tags: ['front']},
  {title: 'Timestamp Microservice', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,g_west,h_175,w_275/v1457921043/Ed_Timestamp_tmicee.png', link: 'https://edcheung-fcc-timestamp.herokuapp.com/', git: 'https://github.com/edcheung1/fcc-basejump-timestamp', date: '1/15/16', tags: ['back']},
  {title: 'Header Parser Microservice', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,g_west,h_175,w_275/v1457921199/Ed_HeaderParser_ex6ffo.png', link: 'https://edcheung-fcc-headerparser.herokuapp.com/', git: 'https://github.com/edcheung1/fcc-basejump-headerParser', date: '1/17/16', tags: ['back']},
  {title: 'URL Shortener Microservice', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,g_west,h_175,w_275/v1457998163/Ed_UrlShortener_mxhhzo.png', link: 'https://edcheung-fcc-urlshortener.herokuapp.com/', git: 'https://github.com/edcheung1/fcc-basejump-urlshortener', date: '1/15/16', tags: ['back']},
  {title: 'Image Search Abstraction Layer', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,g_west,h_175,w_275/v1458188556/Ed_ImageSearch_suve2e.png', link: 'https://edcheung-fcc-imgsearch.herokuapp.com/', git: 'https://github.com/edcheung1/fcc-basejump-imagesearch', date: '1/25/16', tags: ['back']},
  {title: 'File Metadata Microservice', thumb: 'http://res.cloudinary.com/edcheung/image/upload/c_thumb,g_west,h_175,w_275/v1458189393/Ed_FileMetadata_wwxtkh.png', link: 'http://edcheung-fcc-filedata.herokuapp.com/', git: 'https://github.com/edcheung1/fcc-basejump-filedata', date: '1/28/16', tags: ['back']}
	
];

var projectsShown = 0;
var ascending = true;

var Modal = ReactBootstrap.Modal;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Navbar = ReactBootstrap.Navbar, Nav = ReactBootstrap.Nav, NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown, MenuItem = ReactBootstrap.MenuItem;

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
    $('.style-bg').stop(true).css('opacity', 0.75).animate({
      opacity: 1
    }, 500)
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
            <img src='http://res.cloudinary.com/edcheung/image/upload/c_crop,h_1400,w_1400,x_1415,y_140/v1458272643/Ed_Self_n6tf30.jpg' id='profile-pic' />
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

var ProjectBox = React.createClass({
  getInitialState: function() {
     return {
       projectList: allProjects
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
    $('#portfolio-menu').children().removeClass('portfolio-menu-select').css('color', '#333');    
    if(typeof e !== 'undefined') {
      // e.currentTarget.style.color = 'orange';
			$(e.currentTarget).addClass('portfolio-menu-select');
    }    
    var filteredList = allProjects;
    if(filter != 'all') {      
      var filteredList = allProjects.filter(function(project) {
        return $.inArray(filter, project.tags) > -1;      
      });      
    }    
		
		this.setState({
			projectList: filteredList        
		});	
    
  },
  
  componentDidMount: function() {    
    this.setFilter('fav');
    $('#portfolio-menu div').first().addClass('portfolio-menu-select');
  },
  
  render: function() {    
    return(
      <div>        
        <div id="portfolio-box">
          <h3>Portfolio</h3>
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
								<i className="fa fa-bar-chart fa-fw" /><span>&nbsp;Data Visualization</span>
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
  
  componentDidUpdate: function() {
    $('.darken').hover(function() {
      $(this).find('img').stop(true, true).fadeTo(250, .5);      
    }, function() {
      $(this).find('img').stop(true, true).fadeTo(250, 1);      
    });
  },   
  
  render: function() {
    var projectList = this.props.projects.map(function(project, i) {
      return(
        <div className="col-md-4 col-sm-6 col-xs-12 project-box project-slideup" key={i+1}>
          <div className="project-title">{project.title}</div>
          <a className="darken">            
            <img src={project.thumb} className="project-thumb" onClick={this.openModal.bind(null, project)}/>
          </a>
        </div>
      );
    }.bind(this));    
       
    return (
      <div>
				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
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

var ContactBox = React.createClass({
  render: function() {
    return(
      <div id="contact-box">
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
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Portfolio</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    
    return (
      <div>
        {navbarInstance}        
        <AboutBox />
        <ProjectBox />
        <ContactBox />
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
}
//http://fb.me/react-with-addons-0.13.2.js
// <ReactCSSTransitionGroup transitionName="example">
//           {projectRow}
//         </ReactCSSTransitionGroup>