var numeraX;!function(e){var r;!function(e){function r(r){switch(r.type){case"Literal":return e.generators.compileLiteralNode(r);case"Identifier":return e.generators.compileIdentifierNode(r);case"BinaryExpression":return e.generators.compileBinaryExpressionNode(r)}}e.generate=r}(r=e.compiler||(e.compiler={}))}(numeraX||(numeraX={}));var numeraX;!function(e){var r;!function(e){var r;!function(r){function n(r){var n=e.generate(r.left),a=e.generate(r.right);switch(r.operator){case"/":return"\\frac{ "+n+" }{ "+a+" }";case"*":return n+" \\times "+a;case"^":return"{ "+n+" }^{ "+a+" }";case"==":return"{ "+n+" } = { "+a+" }";default:return n+" "+r.operator+" "+a}}r.compileBinaryExpressionNode=n}(r=e.generators||(e.generators={}))}(r=e.compiler||(e.compiler={}))}(numeraX||(numeraX={}));var numeraX;!function(e){var r;!function(e){var r;!function(e){function r(e){return"\\text{"+e.name+"}"}e.compileIdentifierNode=r}(r=e.generators||(e.generators={}))}(r=e.compiler||(e.compiler={}))}(numeraX||(numeraX={}));var numeraX;!function(e){var r;!function(e){var r;!function(e){function r(e){return e.value}e.compileLiteralNode=r}(r=e.generators||(e.generators={}))}(r=e.compiler||(e.compiler={}))}(numeraX||(numeraX={}));var numeraX;!function(e){var r;!function(e){function r(){jsep.addBinaryOp("^",10)}e.setupJSEP=r}(r=e.parser||(e.parser={}))}(numeraX||(numeraX={}));var numeraX;!function(e){function r(r){e.parser.setupJSEP();try{var n=jsep(r.replace(/=(?!=)/g,"=="));return e.compiler.generate(n)}catch(a){return null}}e.compile=r}(numeraX||(numeraX={}));