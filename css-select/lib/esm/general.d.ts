import type { CompiledQuery, InternalOptions, InternalSelector, CompileToken } from "./types.js";
export declare function compileGeneralSelector<Node, ElementNode extends Node>(next: CompiledQuery<ElementNode>, selector: InternalSelector, options: InternalOptions<Node, ElementNode>, context: Node[] | undefined, compileToken: CompileToken<Node, ElementNode>): CompiledQuery<ElementNode>;
//# sourceMappingURL=general.d.ts.map