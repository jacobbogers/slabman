import type ILayoutManager from "./ILayoutManager";
import type IWasmMemoryManager from "./IWasmMemoryManager";
import { WasmMemoryManager } from "./wasmMemoryManager";

export type createMemoryManager = (
	layout: ILayoutManager,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	...args: any[]
) => IWasmMemoryManager;

export function createMemoryManagerFromExistingHeap(
	this: ILayoutManager,
	layout: ILayoutManager,
	heap: WebAssembly.Memory,
): IWasmMemoryManager {
	return new WasmMemoryManager(layout, heap);
}

export function createWasmMemoryManager(
	this: ILayoutManager,
	initial: number,
	maximum: number,
	layout: ILayoutManager,
): IWasmMemoryManager {
	const heap = new WebAssembly.Memory({ initial, maximum });
	return new WasmMemoryManager(this, heap);
}
