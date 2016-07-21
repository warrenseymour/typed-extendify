declare type merge = <T, U>(dest: T, source: U) => T & U;

declare function extendify(options?: extendify.CustomizeOptions): merge;

declare namespace extendify {

  /**
   * Options passed to the customizer function
   */
  export interface CustomizeOptions {
    /**
     * Override the 'source' with result?
     * @default true
     */
    inPlace?: boolean;

    /**
     * Use deep extend?
     * @default true
     */
    isDeep?: boolean;

    /**
     * How to handle arrays?
     * @recommended 'replace'
     * @default 'merge'
     */
    arrays?: 'replace' | 'concat' | 'merge' | 'or' | 'and';

    /**
     * How to handle booleans?
     * @default 'replace'
     */
    booleans?: 'replace' | 'concat' | 'or' | 'and';

    /**
     * How to handle numbers?
     * @default 'replace'
     */
    numbers?: 'replace' | 'concat' | 'or' | 'and';

    /**
     * How to handle strings?
     * @default 'replace'
     */
    strings?: 'replace' | 'concat' | 'or' | 'and';
  }
}

export = extendify;
