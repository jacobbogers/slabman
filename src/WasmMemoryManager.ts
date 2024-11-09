import type ILayoutManager from "./ILayoutManager";
import type IWasmMemoryManager from "./IWasmMemoryManager";

export class WasmMemoryManager implements IWasmMemoryManager {
	readonly #heap: WebAssembly.Memory;
	readonly #layout: ILayoutManager;

	constructor(layout: ILayoutManager, heap: WebAssembly.Memory) {
		this.#heap = heap;
		this.#layout = layout;
	}
	growTo(final: number): number {
		const bl = this.#heap.buffer.byteLength;
		if (final <= bl) {
			return -1;
		}
		const blockCount = Math.ceil(bl / 65536);
		const nbc = Math.ceil(final / 65536);
		const delta = nbc - blockCount;
		return this.grow(delta);
	}

	byteLength() {
		return this.#heap.buffer.byteLength;
	}

	grow(delta: number) {
		const ns = this.#heap.grow(delta);
		this.#layout.invalidate(this as unknown as IWasmMemoryManager);
		return ns;
	}
}
