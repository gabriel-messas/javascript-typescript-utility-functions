export function enumReverseMapping<T, K extends keyof T>(value: T[K], enumType: T) {
	return Object.keys(enumType).find(key => enumType[key] == value);
}
