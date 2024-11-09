import type {
	createMemoryManagerFromExistingHeap,
	createWasmMemoryManager,
} from "./helpers";

export type CreateMemoryManager =
	| typeof createWasmMemoryManager
	| typeof createMemoryManagerFromExistingHeap;

export type CreateMemoryManagerArguments =
	() => Parameters<CreateMemoryManager>;

export type SlabSizes =
	| 32
	| 64
	| 128
	| 256
	| 1024
	| 2048
	| 4096
	| 8192
	| 16384
	| 32768
	| 65536;

export type SlabConfig = Record<SlabSizes, number | [number, number]>;
