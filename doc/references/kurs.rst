Utworzyć funkcje do zabezpieczonych elementów aplikacji
-------------------------------------------------------

SecureRedirect
SecureShow
SecureHide



https://www.udemy.com

lukasz.toporek@enovatis.pl

EnoUd3my

ste.grider@gmail.com
@sg_in_sf
http://github.com/stephengrider

http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&code_lz=Q

ReactDOM.render(<App/>, document.querySelect('.container'))

139 - formularz nowy

Zwracać HTTP 201 zamiast 204 po udanym utworzeniu rekordu
---------------------------------------------------------

Używać _.map(array, function)

zamiast

array.map(function)

(obsługa nulla i undefina)


const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({init: fetchTestList}, dispatch)
}

Bindowanie funkcji jak nie chcemy

onChange={(event) => this.handleEvent(event) }

tylko

onChange={this.handleEvent}


export default connect(null, mapDispatchToProps)(MyFancyComponent)


http://reduxblog.herokuapp.com/


const {fields: { title, categories, content}, handleSubmit} = this.props

context - dostęp do wszystkiego co jest w aplikacji, lepiej nie używać.

static contextTypes = {
    router: PropTypes.object
}

jeżeli nie zadeklaruje się typu zasobu
do którego chcemy mieć dostęp (tak jak powyżej)
nie mamy do niego dostępu.

odwołanie np.:

this.context.router.push('/')


Fake api:

https://jsonplaceholder.typicode.com/users
/posts	100 items
/comments 500 items
/albums	100 items
/photos	5000 items
/todos	200 items
/users	10 items

Obrazki losowe

http://lorempixel.com/400/200/

Firebase:

http://firebase.com/


Route

https://github.com/ReactTraining/react-router/blob/v3/docs/API.md

<Route onEnter={metodaOnEnter()) - i można wywalić load z komponentu


faker
react-addons-css-transition-group": "^15.6.0",


Animacje (104)

/* START */
.fade-enter {

}

/* END */
.fade-enter-active {

}

106 budowanie modala:

https://semantic-ui.com/

newcollection = _.omit(collection, idToRemove)

object = _.mapKeys(array, 'id')


Platforma do deployu

package.json

postinstall

http://heroku.com

111 integracja z google map
---------------------------


chai-jquery - dostarcza asercji odnośnie css np.

expect(component).to.have.class('aclass')
expect(component).to.have.text('aclass')


Rallycoding
Sekcja 9, wykład 150
Be sure to check out RallyCoding.  You'll find a lot of helpful blog posts, new courses, and all kinds of other stuff!

Interested in any of my other courses?  Pick them up for just $10!
React Native: Advanced Concepts - https://www.udemy.com/react-native-advanced/?couponCode=4MORE1234
GraphQL With React: The Complete Developer's Guide - https://www.udemy.com/graphql-with-react-course/?couponCode=4MORE1234
Webpack 2: The Complete Developer's Guide - https://www.udemy.com/webpack-2-the-complete-developers-guide/?couponCode=4MORE1234
MongoDB with NodeJS - https://www.udemy.com/the-complete-developers-guide-to-mongodb/?couponCode=4MORE1234
Elixir with Phoenix - https://www.udemy.com/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/?couponCode=4MORE1234
ES6 Javascript - https://www.udemy.com/javascript-es6-tutorial/?couponCode=4MORE1234
Meteor with React for Realtime Apps - https://www.udemy.com/meteor-react-tutorial/?couponCode=4MORE1234
Advanced React with Redux - https://www.udemy.com/react-redux-tutorial/?couponCode=4MORE1234
Electron for Desktop Apps - https://www.udemy.com/electron-react-tutorial/?couponCode=4MORE1234


Testowanie
==========

describe może być zagnieżdżone

Debug
=====

Wstawianie w kodzie słowa debugger (obrazek)




