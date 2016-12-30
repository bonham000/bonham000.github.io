'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// Set initial note for first page load:
var initialNotes = [['Studying', 'Finish Free Code Camp Front End Certification\nLearn Sass\nLearn React\nReact You Don"t Know JavaScript\nPractice Algorithm Challenges']];

// Root Component:
var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			empty: false,
			showAbout: true,
			showForm: false,
			showOne: false,
			showAll: false,
			showEdit: false,
			showOneKey: '',
			noteBook: [],
			note: [],
			noteTitle: '',
			noteText: '',
			editKey: '',
			editValue: '',
			editTitle: ''
		};
		_this.handleInputTitle = _this.handleInputTitle.bind(_this);
		_this.handleInputText = _this.handleInputText.bind(_this);
		_this.submitNote = _this.submitNote.bind(_this);
		_this.showAllNotes = _this.showAllNotes.bind(_this);
		_this.showNote = _this.showNote.bind(_this);
		_this.removeAll = _this.removeAll.bind(_this);
		_this.removeOne = _this.removeOne.bind(_this);
		_this.setEdit = _this.setEdit.bind(_this);
		_this.handleEdit = _this.handleEdit.bind(_this);
		_this.submitEdit = _this.submitEdit.bind(_this);
		_this.showForm = _this.showForm.bind(_this);
		_this.showAll = _this.showAll.bind(_this);
		_this.cancelSubmit = _this.cancelSubmit.bind(_this);
		_this.cancelEdit = _this.cancelEdit.bind(_this);
		_this.handleEditTitle = _this.handleEditTitle.bind(_this);
		_this.updateStars = _this.updateStars.bind(_this);
		return _this;
	}

	App.prototype.showAllNotes = function showAllNotes() {
		var keys = [];
		for (var i = 0; i < localStorage.length; i++) {
			keys[i] = localStorage.key(i);
		}
		for (var j = 0; j < keys.length; j++) {
			if (keys[j] === 'firstLoad12345' || keys[j].substr(keys[j].length - 6, 6) === '_stars' || keys[j].substr(0, 9) === 'bonham000') {
				keys.splice(j, 1);
				j--;
			}
		}
		this.setState({
			noteBook: keys
		});

		var notes = [];

		for (var k = 0; k < keys.length; k++) {
			notes[k] = [keys[k], localStorage.getItem(keys[k])];
		}
		this.setState({
			note: notes
		});
	};

	App.prototype.showNote = function showNote(key) {
		this.setState({
			showAbout: false,
			showAll: false,
			showForm: false,
			showOneKey: key
		});
		setTimeout(function () {
			this.setState({
				showOne: true
			});
		}.bind(this), 500);
	};

	App.prototype.showAll = function showAll() {
		if (this.state.note.length === 0) {
			this.setState({
				empty: true,
				showForm: false,
				showOne: false,
				showAll: false,
				showEdit: false
			});
			setTimeout(function () {
				this.setState({
					showAbout: true
				});
			}.bind(this), 500);
		} else if (this.state.showAll === false) {
			this.setState({
				showAbout: false,
				showForm: false,
				showOne: false,
				noteTitle: '',
				noteText: '',
				showEdit: false,
				editValue: ''
			});
			setTimeout(function () {
				this.setState({
					showAll: true
				});
			}.bind(this), 500);
		} else {
			this.setState({
				showAll: false,
				showOne: false,
				showEdit: false
			});
			setTimeout(function () {
				this.setState({
					showAbout: true
				});
			}.bind(this), 500);
		}
	};

	App.prototype.submitNote = function submitNote(event) {
		event.preventDefault();
		var currentTitle = this.state.noteTitle.slice();
		// Prevent user from creating note with the same name:
		if (localStorage.getItem(this.state.noteTitle)) {
			alert("Sorry, you've already created this note!");
		} else {
			if (this.state.noteTitle !== '' && this.state.noteText !== '') {

				// Verify local storage is available
				if ((typeof Storage === 'undefined' ? 'undefined' : _typeof(Storage)) !== undefined) {
					localStorage.setItem(this.state.noteTitle, this.state.noteText);
					localStorage.setItem(this.state.noteTitle + '_stars', 1);
				} else {
					alert("Local storage is unavailable");
				}
				this.setState({
					showForm: false,
					showOne: false,
					noteTitle: '',
					noteText: ''
				});

				setTimeout(function () {
					this.setState({
						showAll: true
					});
				}.bind(this), 500);

				this.showAllNotes();
			}
		}
	};

	App.prototype.cancelSubmit = function cancelSubmit() {
		this.setState({
			showForm: false,
			noteTitle: '',
			noteText: ''
		});
		setTimeout(function () {
			this.setState({
				showAbout: true
			});
		}.bind(this), 250);
	};

	App.prototype.handleInputTitle = function handleInputTitle(event) {
		this.setState({
			noteTitle: event.target.value
		});
	};

	App.prototype.handleInputText = function handleInputText(event) {
		this.setState({
			noteText: event.target.value
		});
	};

	App.prototype.showForm = function showForm() {
		this.setState({
			showAbout: false,
			showOne: false,
			showAll: false,
			showEdit: false
		});
		setTimeout(function () {
			this.setState({
				showForm: true
			});
		}.bind(this), 250);
	};

	App.prototype.setEdit = function setEdit(key) {
		this.setState({
			showEdit: true,
			editKey: key,
			editTitle: key,
			editValue: localStorage.getItem(key)
		});
	};

	App.prototype.handleEdit = function handleEdit(event) {
		this.setState({
			editValue: event.target.value
		});
	};

	App.prototype.handleEditTitle = function handleEditTitle(event) {
		this.setState({
			editTitle: event.target.value
		});
	};

	App.prototype.submitEdit = function submitEdit() {
		if (this.state.editValue !== '') {
			var oldKey = this.state.editKey;
			localStorage.removeItem(oldKey);

			var newKey = this.state.editTitle;
			localStorage.setItem(newKey, this.state.editValue);

			this.setState({
				showEdit: false,
				showOne: false,
				showAll: true,
				editKey: '',
				editValue: '',
				editTitle: ''
			});
			this.showAllNotes();
		}
	};

	App.prototype.cancelEdit = function cancelEdit() {
		this.setState({
			showEdit: false,
			editKey: '',
			editValue: ''
		});
		this.showAllNotes();
	};

	App.prototype.removeOne = function removeOne(key) {
		localStorage.removeItem(key);
		localStorage.removeItem(key + '_stars');
		this.setState({
			showOne: false
		});
		this.showAllNotes();
	};

	App.prototype.removeAll = function removeAll(event) {
		event.preventDefault();
		var currentNotes = this.state.noteBook.slice();

		for (var k = 0; k < currentNotes.length; k++) {
			localStorage.removeItem(currentNotes[k]);
			localStorage.removeItem(currentNotes[k] + '_stars');
		}

		this.setState({
			empty: true,
			showAbout: true,
			showOne: false,
			showAll: false,
			showEdit: false,
			noteBook: [],
			note: []
		});
	};

	App.prototype.updateStars = function updateStars(noteKey, stars) {
		localStorage.removeItem(noteKey + '_stars');
		localStorage.setItem(noteKey + '_stars', stars);
		this.forceUpdate();
	};

	App.prototype.componentWillMount = function componentWillMount() {
		// Perform the first time a user loads the page in order to load the initial note array:
		if (!localStorage.getItem('firstLoad12345')) {

			localStorage.setItem("firstLoad12345", "true");

			for (var a = 0; a < initialNotes.length; a++) {
				localStorage.setItem(initialNotes[a][0], initialNotes[a][1]);
				localStorage.setItem(initialNotes[a][0] + '_stars', 3);
			}
		}
		this.showAllNotes();
	};

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			{ id: 'content' },
			React.createElement(NoteList, {
				note: this.state.note,
				showNote: this.showNote,
				showForm: this.showForm,
				removeAll: this.removeAll,
				empty: this.state.empty,
				showAll: this.state.showAll,
				handleShowAll: this.showAll }),
			React.createElement(
				'div',
				{ className: 'contentWrapper' },
				React.createElement(About, {
					showAbout: this.state.showAbout }),
				React.createElement(SubmitNote, {
					showForm: this.state.showForm,
					submitNote: this.submitNote,
					cancelSubmit: this.cancelSubmit,
					noteTitle: this.state.noteTitle,
					noteText: this.state.noteText,
					handleInputTitle: this.handleInputTitle,
					handleInputText: this.handleInputText }),
				React.createElement(ShowOne, {
					showOne: this.state.showOne,
					showOneKey: this.state.showOneKey,
					editKey: this.state.editKey,
					setEdit: this.setEdit,
					showEdit: this.state.showEdit,
					editValue: this.state.editValue,
					editTitle: this.state.editTitle,
					handleEdit: this.handleEdit,
					handleEditTitle: this.handleEditTitle,
					submitEdit: this.submitEdit,
					cancelEdit: this.cancelEdit,
					removeOne: this.removeOne,
					updateStars: this.updateStars }),
				React.createElement(ShowAll, {
					note: this.state.note,
					setEdit: this.setEdit,
					showAll: this.state.showAll,
					removeOne: this.removeOne,
					showEdit: this.state.showEdit,
					editKey: this.state.editKey,
					editValue: this.state.editValue,
					editTitle: this.state.editTitle,
					handleEdit: this.handleEdit,
					handleEditTitle: this.handleEditTitle,
					submitEdit: this.submitEdit,
					cancelEdit: this.cancelEdit,
					updateStars: this.updateStars })
			)
		);
	};

	return App;
}(React.Component);

;

// Component shows details about the project to the user:
var About = function (_React$Component2) {
	_inherits(About, _React$Component2);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	About.prototype.render = function render() {
		var component;
		if (this.props.showAbout === true) {
			component = React.createElement(
				'div',
				{ className: 'aboutWrapper' },
				React.createElement(
					'div',
					{ className: 'about' },
					React.createElement(
						'h1',
						null,
						'This is a Notes App'
					),
					React.createElement(
						'h2',
						null,
						'You can record your notes here'
					),
					React.createElement(
						'p',
						null,
						'All your notes are stored in your browser\'s local storage and any changes you make will remain saved as long as you continue to access this page from the same browser.'
					),
					React.createElement(
						'p',
						null,
						'Built by ',
						React.createElement(
							'a',
							{ target: '_blank', href: 'http://sean-smith.me' },
							'Sean Smith'
						)
					)
				)
			);
		};
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'aboutDiv',
				transitionEnterTimeout: 1000,
				transitionLeaveTimeout: 100 },
			component
		);
	};

	return About;
}(React.Component);

;

// This is the control side bar that allows the user to navigate the app:
var NoteList = function (_React$Component3) {
	_inherits(NoteList, _React$Component3);

	function NoteList() {
		_classCallCheck(this, NoteList);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	NoteList.prototype.render = function render() {
		var _this4 = this;

		var noteListTitle = "Current Notes:";
		if (this.props.empty === true) {
			noteListTitle = "There Are No Notes";
		}
		var noteList = this.props.note.map(function (note) {
			return React.createElement(
				'div',
				{ className: 'noteListItem', key: note, onClick: _this4.props.showNote.bind(_this4, note[0]) },
				React.createElement('i', { className: 'fa fa-file-text-o', 'aria-hidden': 'true' }),
				' ',
				note[0]
			);
		});
		var showHideStyle = "Show All Notes";
		if (this.props.showAll === true) {
			showHideStyle = "Hide All Notes";
		}
		return React.createElement(
			'div',
			{ className: 'listWrapper' },
			React.createElement(
				'div',
				{ className: 'titleBox' },
				React.createElement('i', { className: 'fa fa-book', 'aria-hidden': 'true' }),
				React.createElement(
					'h1',
					null,
					React.createElement(
						'a',
						{ target: '_blank', href: 'https://www.freecodecamp.com/challenges/build-a-note-box' },
						'Free Code Camp'
					),
					React.createElement('br', null),
					'Notes App'
				)
			),
			React.createElement(
				'div',
				{ className: 'listBtn addBtn', onClick: this.props.showForm },
				React.createElement('i', { className: 'fa fa-plus-square-o', 'aria-hidden': 'true' }),
				' Add a New Note'
			),
			React.createElement(
				'div',
				{ className: 'listBtn allBtn', onClick: this.props.handleShowAll },
				React.createElement('i', { className: 'fa fa-globe', 'aria-hidden': 'true' }),
				' ',
				showHideStyle
			),
			React.createElement(
				'div',
				{ className: 'listBtn removeBtn', onClick: this.props.removeAll },
				React.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' }),
				' Remove All Notes'
			),
			React.createElement(
				'h1',
				{ className: 'listTitle' },
				noteListTitle
			),
			noteList
		);
	};

	return NoteList;
}(React.Component);

;

// Submit form for new note:
var SubmitNote = function (_React$Component4) {
	_inherits(SubmitNote, _React$Component4);

	function SubmitNote() {
		_classCallCheck(this, SubmitNote);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	SubmitNote.prototype.render = function render() {
		var component;
		if (this.props.showForm === true) {
			component = React.createElement(
				'div',
				{ className: 'submitForm' },
				React.createElement(
					'form',
					{ onSubmit: this.props.submitNote },
					React.createElement('input', {
						autoFocus: true,
						type: 'text',
						placeholder: 'Note',
						value: this.props.noteTitle,
						onChange: this.props.handleInputTitle }),
					React.createElement('br', null),
					React.createElement('textarea', {
						type: 'text',
						placeholder: 'Details',
						value: this.props.noteText,
						onChange: this.props.handleInputText }),
					React.createElement('br', null),
					React.createElement(
						'button',
						{
							className: 'submitBtn',
							onClick: this.props.submitNote },
						'Submit Note'
					),
					React.createElement('br', null),
					React.createElement(
						'button',
						{
							className: 'cancelBtn',
							onClick: this.props.cancelSubmit },
						'Cancel'
					)
				)
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'submitDiv',
				transitionEnterTimeout: 750,
				transitionLeaveTimeout: 500 },
			component
		);
	};

	return SubmitNote;
}(React.Component);

;

// Panel to show when one note is clicked:
var ShowOne = function (_React$Component5) {
	_inherits(ShowOne, _React$Component5);

	function ShowOne() {
		_classCallCheck(this, ShowOne);

		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
	}

	ShowOne.prototype.render = function render() {
		var component;
		var editBox;
		if (this.props.editKey === this.props.showOneKey) {
			editBox = React.createElement(EditNote, {
				showEdit: this.props.showEdit,
				editKey: this.props.editKey,
				editValue: this.props.editValue,
				editTitle: this.props.editTitle,
				handleEdit: this.props.handleEdit,
				handleEditTitle: this.props.handleEditTitle,
				submitEdit: this.props.submitEdit,
				cancelEdit: this.props.cancelEdit });
		}
		if (this.props.showOne === true) {
			component = React.createElement(
				'div',
				{ className: 'noteView' },
				React.createElement(
					'h1',
					null,
					this.props.showOneKey
				),
				React.createElement(
					'div',
					{ className: 'editBtnWrapper' },
					React.createElement(
						'button',
						{
							className: 'removeBtn',
							onClick: this.props.removeOne.bind(this, this.props.showOneKey) },
						React.createElement('i', { className: 'fa fa-minus-circle', 'aria-hidden': 'true' }),
						' Remove This Note'
					),
					React.createElement(
						'button',
						{
							className: 'editBtn',
							onClick: this.props.setEdit.bind(this, this.props.showOneKey) },
						React.createElement('i', { className: 'fa fa-pencil', 'aria-hidden': 'true' }),
						' Edit This Note'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(Stars, {
						noteKey: this.props.showOneKey,
						updateStars: this.props.updateStars })
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'strong',
						null,
						'Note Details:'
					)
				),
				React.createElement(
					'pre',
					{ className: 'ingredients' },
					localStorage.getItem(this.props.showOneKey)
				),
				editBox
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'transitionDiv',
				transitionEnterTimeout: 750,
				transitionLeaveTimeout: 50 },
			component
		);
	};

	return ShowOne;
}(React.Component);

;

// Show all note view:
var ShowAll = function (_React$Component6) {
	_inherits(ShowAll, _React$Component6);

	function ShowAll() {
		_classCallCheck(this, ShowAll);

		return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
	}

	ShowAll.prototype.render = function render() {
		var _this8 = this;

		var note = this.props.note.map(function (note) {
			var editBox;
			if (_this8.props.editKey === note[0]) {
				editBox = React.createElement(EditNote, {
					showEdit: _this8.props.showEdit,
					editKey: _this8.props.editKey,
					editValue: _this8.props.editValue,
					editTitle: _this8.props.editTitle,
					handleEdit: _this8.props.handleEdit,
					handleEditTitle: _this8.props.handleEditTitle,
					submitEdit: _this8.props.submitEdit,
					cancelEdit: _this8.props.cancelEdit });
			}
			return React.createElement(
				'div',
				{ className: 'noteView', key: note[0] + note[1].substr(0, 5) },
				React.createElement(
					'h1',
					null,
					note[0]
				),
				React.createElement(
					'div',
					{ className: 'editBtnWrapper' },
					React.createElement(
						'button',
						{
							className: 'removeBtn',
							onClick: _this8.props.removeOne.bind(_this8, note[0]) },
						React.createElement('i', { className: 'fa fa-minus-circle', 'aria-hidden': 'true' }),
						' Remove This Note'
					),
					React.createElement(
						'button',
						{
							className: 'editBtn',
							onClick: _this8.props.setEdit.bind(_this8, note[0]) },
						React.createElement('i', { className: 'fa fa-pencil', 'aria-hidden': 'true' }),
						' Edit This Note'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(Stars, {
						noteKey: note[0],
						updateStars: _this8.props.updateStars })
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'strong',
						null,
						'Note Details:'
					)
				),
				React.createElement(
					'pre',
					{ className: 'ingredients' },
					localStorage.getItem(note[0])
				),
				editBox
			);
		});
		var component;
		if (this.props.showAll === true) {
			component = React.createElement(
				'div',
				{ className: 'showAllWrapper' },
				note
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'transitionDiv',
				transitionEnterTimeout: 1500,
				transitionLeaveTimeout: 50 },
			component
		);
	};

	return ShowAll;
}(React.Component);

;

// Edit Note Component, will load in ShowOne or ShowAll view:
var EditNote = function (_React$Component7) {
	_inherits(EditNote, _React$Component7);

	function EditNote() {
		_classCallCheck(this, EditNote);

		return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
	}

	EditNote.prototype.render = function render() {
		// Conditionally calculate height of textarea based on inner content:
		var num = this.props.editValue.split(/\r\n|\r|\n/).length;
		var textAreaStyle = {
			height: 25 * num + 25
		};
		var component;
		if (this.props.showEdit === true) {
			component = React.createElement(
				'div',
				{ className: 'editBox' },
				React.createElement(
					'p',
					null,
					'Edit Title:'
				),
				React.createElement('input', {
					type: 'text',
					value: this.props.editTitle,
					onChange: this.props.handleEditTitle }),
				React.createElement(
					'p',
					null,
					'Edit Ingredients:'
				),
				React.createElement('textarea', {
					style: textAreaStyle,
					id: 'edit',
					value: this.props.editValue,
					onChange: this.props.handleEdit }),
				React.createElement('br', null),
				React.createElement(
					'button',
					{
						className: 'submitBtn',
						onClick: this.props.submitEdit },
					'Submit Edit'
				),
				React.createElement(
					'button',
					{
						className: 'cancelBtn',
						onClick: this.props.cancelEdit },
					'Cancel Edit'
				)
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'editTransitionDiv',
				transitionAppear: true,
				transitionAppearTimeout: 750,
				transitionEnterTimeout: 750,
				transitionLeaveTimeout: 100 },
			component
		);
	};

	return EditNote;
}(React.Component);

;

var Stars = function (_React$Component8) {
	_inherits(Stars, _React$Component8);

	function Stars() {
		_classCallCheck(this, Stars);

		return _possibleConstructorReturn(this, _React$Component8.apply(this, arguments));
	}

	Stars.prototype.render = function render() {
		var getStars = localStorage.getItem(this.props.noteKey + '_stars');
		var renderStars;
		if (getStars == 0) {
			renderStars = React.createElement(
				'div',
				null,
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 1), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 2), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 3), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 4), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 5), 'aria-hidden': 'true' })
			);
		} else if (getStars == 1) {
			renderStars = React.createElement(
				'div',
				null,
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 1), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 2), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 3), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 4), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 5), 'aria-hidden': 'true' })
			);
		} else if (getStars == 2) {
			renderStars = React.createElement(
				'div',
				null,
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 1), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 2), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 3), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 4), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 5), 'aria-hidden': 'true' })
			);
		} else if (getStars == 3) {
			renderStars = React.createElement(
				'div',
				null,
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 1), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 2), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 3), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 4), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 5), 'aria-hidden': 'true' })
			);
		} else if (getStars == 4) {
			renderStars = React.createElement(
				'div',
				null,
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 1), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 2), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 3), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 4), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star-o', onClick: this.props.updateStars.bind(this, this.props.noteKey, 5), 'aria-hidden': 'true' })
			);
		} else if (getStars == 5) {
			renderStars = React.createElement(
				'div',
				null,
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 1), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 2), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 3), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 4), 'aria-hidden': 'true' }),
				React.createElement('i', { className: 'fa fa-star', onClick: this.props.updateStars.bind(this, this.props.noteKey, 5), 'aria-hidden': 'true' })
			);
		}
		return React.createElement(
			'div',
			{ className: 'stars' },
			renderStars
		);
	};

	return Stars;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));