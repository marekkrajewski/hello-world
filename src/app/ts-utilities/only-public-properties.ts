export type OnlyPublicProperties<T> = {
  [K in keyof T]: OnlyPublicProperties<T[K]>;
};
