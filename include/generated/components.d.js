let include = (str) => console.error("components.d.js; PLEASE PROVIDE AN INCLUDE FUNCTION INCLUDE FUNCTION")

PARTIAL_DIR = '../../views/partials'

module.exports = {
    a_string: 'howdy',
    setInclude: (set_include) => { include = set_include }, // Must be called as high in the DOM, and as early as possible
    Menu: () => include(`${PARTIAL_DIR}/Menu.ejs`, { headers: ['a', 'b', 'c'], rows: [ { a: 'help', b: 'me', c: 'spell' }, { a: 'sombody', b: 'as fly ', c: 'as me' } ]}),
    Form: () => include(`${PARTIAL_DIR}/Form.ejs`),
}