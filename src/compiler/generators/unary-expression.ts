
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

        export function compileUnaryExpressionNode ( node: jsep.interfaces.unaryExpressionNode ): string {
            if ( node.prefix )
                return `${ node.operator }{${ compiler.generate( node.argument ) }}`
            else
                return compiler.generate( node.argument )
        }

    // ────────────────────────────────────────────────────────────────────────────────

}