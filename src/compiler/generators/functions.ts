

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace numeraX.compiler.generators {

    //
    // ─── MAIN ───────────────────────────────────────────────────────────────────────
    //

        export function compileCallExpressionNode ( node: jsep.interfaces.callExpressionNode ) {
            switch ( node.callee.name ) {
                case 'sum':
                    return stdlib.sum( node.arguments )

                case 'sqrt':
                    return stdlib.sqrt( node.arguments )

                case 'limit':
                case 'lim':
                    return stdlib.limit( node.arguments )

                default:
                    return generateUnknownFunction( node )
            }
        }

    //
    // ─── UNKNOWN FUNCTION ───────────────────────────────────────────────────────────
    //

        function generateUnknownFunction ( node: jsep.interfaces.callExpressionNode ) {
            return `{${ node.callee.name }}(${ node.arguments.map( n => compiler.generate( n ) ).join(', ') })`
        }

    //
    // ─── STANDARD LIBRARY ───────────────────────────────────────────────────────────
    //

        namespace stdlib {

            //
            // ─── SUM ─────────────────────────────────────────────────────────
            //

                export function sum ( args: jsep.interfaces.baseNode[ ] ) {
                    if ( args.length === 3 )
                        return `\\sum_{${ compiler.generate( args[ 0 ] ) }}^{${ compiler.generate( args[ 1 ] ) }}{${ compiler.generate( args[ 2 ] ) }}`
                    else
                        return ''
                }

            //
            // ─── SQRT ────────────────────────────────────────────────────────
            //

                export function sqrt ( args: jsep.interfaces.baseNode[ ] ) {
                    if ( args.length === 1 )
                        return `\\sqrt{${ compiler.generate( args[ 0 ] ) }}`
                    else
                        return ''
                }

            //
            // ─── LIMIT ───────────────────────────────────────────────────────
            //

                export function limit ( args: jsep.interfaces.baseNode[ ] ) {
                    if ( args.length === 3 )
                        return `\\lim_{${ compiler.generate( args[ 0 ] ) } \\to ${ compiler.generate( args[ 1 ]) }}{${ compiler.generate( args[ 2 ] ) }}`
                    else
                        return ''
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}