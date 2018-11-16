var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
     image: 'h.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
      image: 'k.jpg'
  },
    {
    id: 3,
    title: 'Dirty Dancing',
    desc: 'Film o miłościm i tancu',
    image: 'dd.jpg'
  },
  {
    id: 4,
    title: 'Zaplątani',
    desc: 'Film ten jest inspirowany baśnią braci Grimm opowiadającą o dziewczynie zwanej Roszpunką, zamkniętej w wieży przez czarownicę.',
    image: 'z.jpg'
  },
    {
    id: 5,
    title: 'Kot w butach',
    desc: 'Film opowiada o wczesnych przygodach Kota, jeszcze zanim poznał Shreka',
    image: 'kwb.jpg'
  },
  {
    id: 6,
    title: 'Mentalista',
    desc: 'Serial o Patricku Jane, który po stracie córki i żony zabitych przez seryjnego mordercę, znanego jako Red John, zostaje konsultantem pracującym dla Kalifornijskiego Biura Śledczego (CBI). Jego zdolności obserwacyjne pomagają rozwiązywać najtrudniejsze zagadki',
    image: 'm.jpg'
  }
];

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired 
	},
	render: function() {
		return (React.createElement('h2', {}, this.props.title)
		);
	}
});
var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('p', {}, this.props.desc)
			
		);
	}
});
var MovieImg = React.createClass({
    propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('div', {className: 'foto'},
				React.createElement('img', {src: this.props.image})
                                )
		);
	}
});
var KartaPrawa = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
				React.createElement('div', {className: 'opis'},
					React.createElement(MovieTitle, { title: this.props.movie.title}),
					React.createElement(MovieDescription, { desc: this.props.movie.desc })
					
				)
		);
	}
});
var Movie = React.createClass({ 
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
				React.createElement('div', {className: 'kartaFilmu'},	
					React.createElement(MovieImg, {image: this.props.movie.image}, ''),
					React.createElement(KartaPrawa, { movie: this.props.movie }, '')
				)
		);
	}
});
var Filmoteka = movies.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie});

});
var element = React.createElement('section', {},
		React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'Moje ulubione filmy:'), Filmoteka)
);
                        
ReactDOM.render(element, document.getElementById('app'));