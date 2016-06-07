'use strict';

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

var Home = React.createClass({
    displayName: 'Home',

    getInitialState: function getInitialState() {
        return { results: [] };
    },

    sortAlltime: function sortAlltime() {

        var array = this.state.results;
        var sort = array.sort(function (a, b) {
            return parseFloat(a.alltime) - parseFloat(b.alltime);
        });

        var allTime = sort.reverse();
        this.setState({ results: allTime });
    },
    reverseAlltime: function reverseAlltime() {

        var array = this.state.results;
        var sort = array.sort(function (a, b) {
            return parseFloat(a.alltime) - parseFloat(b.alltime);
        });

        this.setState({ results: sort });
    },
    sortRecent: function sortRecent() {

        var array = this.state.results;
        var sort = array.sort(function (a, b) {
            return parseFloat(a.recent) - parseFloat(b.recent);
        });

        var recent = sort.reverse();
        this.setState({ results: recent });
    },
    reverseRecent: function reverseRecent() {

        var array = this.state.results;
        var sort = array.sort(function (a, b) {
            return parseFloat(a.recent) - parseFloat(b.recent);
        });

        this.setState({ results: sort });
    },
    sortUser: function sortUser() {

        var array = this.state.results;
        var sort = array.sort(function (a, b) {
            if (a.username < b.username) return -1;
            if (a.username > b.username) return 1;
            return 0;
        });

        this.setState({ results: sort });
    },
    reverseUser: function reverseUser() {

        var array = this.state.results;
        var sort = array.sort(function (a, b) {
            if (a.username < b.username) return -1;
            if (a.username > b.username) return 1;
            return 0;
        });
        var reverse = sort.reverse();

        this.setState({ results: reverse });
    },
    componentWillMount: function componentWillMount() {
        $.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function (data, status) {

            var result = JSON.stringify(data);
            var array = JSON.parse(result);
            this.setState({ results: array });
        }.bind(this));
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                { className: 'title' },
                'Free Code Camp LeaderBoard'
            ),
            React.createElement(
                'table',
                null,
                React.createElement(
                    'tr',
                    { className: 'mainHeader' },
                    React.createElement('th', null),
                    React.createElement(
                        'th',
                        { className: 'username' },
                        'Username'
                    ),
                    React.createElement(
                        'th',
                        { className: 'points' },
                        'All Time'
                    ),
                    React.createElement(
                        'th',
                        { className: 'points' },
                        'Recent'
                    )
                ),
                React.createElement(
                    'tr',
                    { className: 'controlHeader' },
                    React.createElement('th', null),
                    React.createElement(
                        'th',
                        null,
                        React.createElement(
                            'span',
                            { onClick: this.sortUser },
                            React.createElement('i', { className: 'fa fa-arrow-up fa-2x', 'aria-hidden': 'true' }),
                            ' '
                        ),
                        React.createElement(
                            'span',
                            { onClick: this.reverseUser },
                            ' ',
                            React.createElement('i', { className: 'fa fa-arrow-down fa-2x', 'aria-hidden': 'true' })
                        )
                    ),
                    React.createElement(
                        'th',
                        null,
                        React.createElement(
                            'span',
                            { onClick: this.sortAlltime },
                            React.createElement('i', { className: 'fa fa-arrow-up fa-2x', 'aria-hidden': 'true' }),
                            ' '
                        ),
                        React.createElement(
                            'span',
                            { onClick: this.reverseAlltime },
                            ' ',
                            React.createElement('i', { className: 'fa fa-arrow-down fa-2x', 'aria-hidden': 'true' })
                        )
                    ),
                    React.createElement(
                        'th',
                        null,
                        React.createElement(
                            'span',
                            { onClick: this.sortRecent },
                            React.createElement('i', { className: 'fa fa-arrow-up fa-2x', 'aria-hidden': 'true' }),
                            ' '
                        ),
                        React.createElement(
                            'span',
                            { onClick: this.reverseRecent },
                            ' ',
                            React.createElement('i', { className: 'fa fa-arrow-down fa-2x', 'aria-hidden': 'true' })
                        )
                    )
                ),
                this.state.results.map(function (user, i) {
                    return React.createElement(
                        'tr',
                        { className: 'entry' },
                        React.createElement(
                            'td',
                            { className: 'imgCol' },
                            React.createElement('img', { src: user.img })
                        ),
                        React.createElement(
                            'td',
                            { className: 'userCol' },
                            React.createElement(
                                'a',
                                { target: '_blank', href: "http://www.freecodecamp.com/" + user.username },
                                user.username
                            )
                        ),
                        React.createElement(
                            'td',
                            { className: 'alltimeCol' },
                            user.alltime
                        ),
                        React.createElement(
                            'td',
                            { className: 'recentCol' },
                            user.recent
                        )
                    );
                })
            ),
            React.createElement(
                'p',
                { className: 'credits' },
                'A ',
                React.createElement(
                    'a',
                    { target: '_blank', href: 'https://www.freecodecamp.com/challenges/build-a-camper-leaderboard' },
                    'Free Code Camp Project'
                ),
                ' by ',
                React.createElement(
                    'a',
                    { target: '_blank', href: 'http://sean-smith.me' },
                    'Sean Smith'
                )
            ),
            React.createElement(
                'p',
                { className: 'react' },
                React.createElement(
                    'a',
                    { target: '_blank', href: 'https://facebook.github.io/react/' },
                    'Built with React'
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Home, null), document.getElementById("content"));