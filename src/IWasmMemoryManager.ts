export default interface IWasmMemoryManager {
	byteLength(): number;
	grow(delta: number): number;
	growTo(final: number): number;
}
