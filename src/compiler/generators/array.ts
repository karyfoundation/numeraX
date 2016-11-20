
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

module numeraX.compiler.generators {

    //
    // ─── ARRAY GENERATOR ────────────────────────────────────────────────────────────
    //

        export function compileArrayExpressionNode (
            node: jsep.interfaces.arrayExpression ): string {
                return `\\left\\[${
                    node.elements
                        .map( node => compiler.generate( node ) )
                        .join(', ')
                }\\right\\]`;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}