import type IWasmMemoryManager from "./IWasmMemoryManager";

export default interface ILayoutManager {
	invalidate(wasmMemory: IWasmMemoryManager);
}
