import type ILayoutManager from "./ILayoutManager";
import type IWasmMemoryManager from "./IWasmMemoryManager";
import type {
	CreateMemoryManager,
	CreateMemoryManagerArguments,
	SlabConfig,
} from "./types";

export default class LayoutManager implements ILayoutManager {
	private readonly wmm: IWasmMemoryManager;
	constructor(
		private readonly createWasmMemory: CreateMemoryManager,
		private readonly createWasmMemoryParameters: CreateMemoryManagerArguments,
		private readonly slabConfig: SlabConfig,
	) {
		const args = createWasmMemoryParameters();
		//1. validate slabConfig (will de "args" be able to fullfill requirements)
		//2. if not throw Error
		//3. create bunch of DataViewWraps fulfilling the slab layout
		//4. mark rest as
		//5. slab can me marked as grow
		this.wmm = createWasmMemory.apply(this, args);
	}
	invalidate(wasmMemory: IWasmMemoryManager) {
		// underlying buffer is detached, re-align all slabs
	}
}
