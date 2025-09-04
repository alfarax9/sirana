
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model emergency_reports
 * 
 */
export type emergency_reports = $Result.DefaultSelection<Prisma.$emergency_reportsPayload>
/**
 * Model whatsapp_conversations
 * 
 */
export type whatsapp_conversations = $Result.DefaultSelection<Prisma.$whatsapp_conversationsPayload>
/**
 * Model regulation_docs
 * 
 */
export type regulation_docs = $Result.DefaultSelection<Prisma.$regulation_docsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Emergency_reports
 * const emergency_reports = await prisma.emergency_reports.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Emergency_reports
   * const emergency_reports = await prisma.emergency_reports.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.emergency_reports`: Exposes CRUD operations for the **emergency_reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emergency_reports
    * const emergency_reports = await prisma.emergency_reports.findMany()
    * ```
    */
  get emergency_reports(): Prisma.emergency_reportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsapp_conversations`: Exposes CRUD operations for the **whatsapp_conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whatsapp_conversations
    * const whatsapp_conversations = await prisma.whatsapp_conversations.findMany()
    * ```
    */
  get whatsapp_conversations(): Prisma.whatsapp_conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regulation_docs`: Exposes CRUD operations for the **regulation_docs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regulation_docs
    * const regulation_docs = await prisma.regulation_docs.findMany()
    * ```
    */
  get regulation_docs(): Prisma.regulation_docsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    emergency_reports: 'emergency_reports',
    whatsapp_conversations: 'whatsapp_conversations',
    regulation_docs: 'regulation_docs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "emergency_reports" | "whatsapp_conversations" | "regulation_docs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      emergency_reports: {
        payload: Prisma.$emergency_reportsPayload<ExtArgs>
        fields: Prisma.emergency_reportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emergency_reportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emergency_reportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>
          }
          findFirst: {
            args: Prisma.emergency_reportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emergency_reportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>
          }
          findMany: {
            args: Prisma.emergency_reportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>[]
          }
          create: {
            args: Prisma.emergency_reportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>
          }
          createMany: {
            args: Prisma.emergency_reportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.emergency_reportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>[]
          }
          delete: {
            args: Prisma.emergency_reportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>
          }
          update: {
            args: Prisma.emergency_reportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>
          }
          deleteMany: {
            args: Prisma.emergency_reportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emergency_reportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.emergency_reportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>[]
          }
          upsert: {
            args: Prisma.emergency_reportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emergency_reportsPayload>
          }
          aggregate: {
            args: Prisma.Emergency_reportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergency_reports>
          }
          groupBy: {
            args: Prisma.emergency_reportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Emergency_reportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.emergency_reportsCountArgs<ExtArgs>
            result: $Utils.Optional<Emergency_reportsCountAggregateOutputType> | number
          }
        }
      }
      whatsapp_conversations: {
        payload: Prisma.$whatsapp_conversationsPayload<ExtArgs>
        fields: Prisma.whatsapp_conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.whatsapp_conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.whatsapp_conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>
          }
          findFirst: {
            args: Prisma.whatsapp_conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.whatsapp_conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>
          }
          findMany: {
            args: Prisma.whatsapp_conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>[]
          }
          create: {
            args: Prisma.whatsapp_conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>
          }
          createMany: {
            args: Prisma.whatsapp_conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.whatsapp_conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>[]
          }
          delete: {
            args: Prisma.whatsapp_conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>
          }
          update: {
            args: Prisma.whatsapp_conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>
          }
          deleteMany: {
            args: Prisma.whatsapp_conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.whatsapp_conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.whatsapp_conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>[]
          }
          upsert: {
            args: Prisma.whatsapp_conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_conversationsPayload>
          }
          aggregate: {
            args: Prisma.Whatsapp_conversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsapp_conversations>
          }
          groupBy: {
            args: Prisma.whatsapp_conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_conversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.whatsapp_conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_conversationsCountAggregateOutputType> | number
          }
        }
      }
      regulation_docs: {
        payload: Prisma.$regulation_docsPayload<ExtArgs>
        fields: Prisma.regulation_docsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regulation_docsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regulation_docsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>
          }
          findFirst: {
            args: Prisma.regulation_docsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regulation_docsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>
          }
          findMany: {
            args: Prisma.regulation_docsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>[]
          }
          create: {
            args: Prisma.regulation_docsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>
          }
          createMany: {
            args: Prisma.regulation_docsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.regulation_docsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>[]
          }
          delete: {
            args: Prisma.regulation_docsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>
          }
          update: {
            args: Prisma.regulation_docsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>
          }
          deleteMany: {
            args: Prisma.regulation_docsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regulation_docsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.regulation_docsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>[]
          }
          upsert: {
            args: Prisma.regulation_docsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regulation_docsPayload>
          }
          aggregate: {
            args: Prisma.Regulation_docsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegulation_docs>
          }
          groupBy: {
            args: Prisma.regulation_docsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Regulation_docsGroupByOutputType>[]
          }
          count: {
            args: Prisma.regulation_docsCountArgs<ExtArgs>
            result: $Utils.Optional<Regulation_docsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    emergency_reports?: emergency_reportsOmit
    whatsapp_conversations?: whatsapp_conversationsOmit
    regulation_docs?: regulation_docsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Emergency_reportsCountOutputType
   */

  export type Emergency_reportsCountOutputType = {
    whatsapp_conversations: number
  }

  export type Emergency_reportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsapp_conversations?: boolean | Emergency_reportsCountOutputTypeCountWhatsapp_conversationsArgs
  }

  // Custom InputTypes
  /**
   * Emergency_reportsCountOutputType without action
   */
  export type Emergency_reportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emergency_reportsCountOutputType
     */
    select?: Emergency_reportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Emergency_reportsCountOutputType without action
   */
  export type Emergency_reportsCountOutputTypeCountWhatsapp_conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_conversationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model emergency_reports
   */

  export type AggregateEmergency_reports = {
    _count: Emergency_reportsCountAggregateOutputType | null
    _avg: Emergency_reportsAvgAggregateOutputType | null
    _sum: Emergency_reportsSumAggregateOutputType | null
    _min: Emergency_reportsMinAggregateOutputType | null
    _max: Emergency_reportsMaxAggregateOutputType | null
  }

  export type Emergency_reportsAvgAggregateOutputType = {
    urgency_level: number | null
  }

  export type Emergency_reportsSumAggregateOutputType = {
    urgency_level: number | null
  }

  export type Emergency_reportsMinAggregateOutputType = {
    id: string | null
    report_number: string | null
    timestamp: Date | null
    caller_info: string | null
    caller_phone: string | null
    location: string | null
    emergency_type: string | null
    urgency_level: number | null
    description: string | null
    fotoUrl: string | null
    status: string | null
    voice_file_path: string | null
    response_sent: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Emergency_reportsMaxAggregateOutputType = {
    id: string | null
    report_number: string | null
    timestamp: Date | null
    caller_info: string | null
    caller_phone: string | null
    location: string | null
    emergency_type: string | null
    urgency_level: number | null
    description: string | null
    fotoUrl: string | null
    status: string | null
    voice_file_path: string | null
    response_sent: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Emergency_reportsCountAggregateOutputType = {
    id: number
    report_number: number
    timestamp: number
    caller_info: number
    caller_phone: number
    location: number
    emergency_type: number
    urgency_level: number
    description: number
    structured_data: number
    fotoUrl: number
    ai_recommendations: number
    status: number
    voice_file_path: number
    response_sent: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Emergency_reportsAvgAggregateInputType = {
    urgency_level?: true
  }

  export type Emergency_reportsSumAggregateInputType = {
    urgency_level?: true
  }

  export type Emergency_reportsMinAggregateInputType = {
    id?: true
    report_number?: true
    timestamp?: true
    caller_info?: true
    caller_phone?: true
    location?: true
    emergency_type?: true
    urgency_level?: true
    description?: true
    fotoUrl?: true
    status?: true
    voice_file_path?: true
    response_sent?: true
    created_at?: true
    updated_at?: true
  }

  export type Emergency_reportsMaxAggregateInputType = {
    id?: true
    report_number?: true
    timestamp?: true
    caller_info?: true
    caller_phone?: true
    location?: true
    emergency_type?: true
    urgency_level?: true
    description?: true
    fotoUrl?: true
    status?: true
    voice_file_path?: true
    response_sent?: true
    created_at?: true
    updated_at?: true
  }

  export type Emergency_reportsCountAggregateInputType = {
    id?: true
    report_number?: true
    timestamp?: true
    caller_info?: true
    caller_phone?: true
    location?: true
    emergency_type?: true
    urgency_level?: true
    description?: true
    structured_data?: true
    fotoUrl?: true
    ai_recommendations?: true
    status?: true
    voice_file_path?: true
    response_sent?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Emergency_reportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emergency_reports to aggregate.
     */
    where?: emergency_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emergency_reports to fetch.
     */
    orderBy?: emergency_reportsOrderByWithRelationInput | emergency_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emergency_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emergency_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emergency_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emergency_reports
    **/
    _count?: true | Emergency_reportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Emergency_reportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Emergency_reportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Emergency_reportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Emergency_reportsMaxAggregateInputType
  }

  export type GetEmergency_reportsAggregateType<T extends Emergency_reportsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergency_reports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergency_reports[P]>
      : GetScalarType<T[P], AggregateEmergency_reports[P]>
  }




  export type emergency_reportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emergency_reportsWhereInput
    orderBy?: emergency_reportsOrderByWithAggregationInput | emergency_reportsOrderByWithAggregationInput[]
    by: Emergency_reportsScalarFieldEnum[] | Emergency_reportsScalarFieldEnum
    having?: emergency_reportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Emergency_reportsCountAggregateInputType | true
    _avg?: Emergency_reportsAvgAggregateInputType
    _sum?: Emergency_reportsSumAggregateInputType
    _min?: Emergency_reportsMinAggregateInputType
    _max?: Emergency_reportsMaxAggregateInputType
  }

  export type Emergency_reportsGroupByOutputType = {
    id: string
    report_number: string
    timestamp: Date | null
    caller_info: string | null
    caller_phone: string | null
    location: string | null
    emergency_type: string | null
    urgency_level: number | null
    description: string | null
    structured_data: JsonValue | null
    fotoUrl: string | null
    ai_recommendations: JsonValue | null
    status: string | null
    voice_file_path: string | null
    response_sent: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Emergency_reportsCountAggregateOutputType | null
    _avg: Emergency_reportsAvgAggregateOutputType | null
    _sum: Emergency_reportsSumAggregateOutputType | null
    _min: Emergency_reportsMinAggregateOutputType | null
    _max: Emergency_reportsMaxAggregateOutputType | null
  }

  type GetEmergency_reportsGroupByPayload<T extends emergency_reportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Emergency_reportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Emergency_reportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Emergency_reportsGroupByOutputType[P]>
            : GetScalarType<T[P], Emergency_reportsGroupByOutputType[P]>
        }
      >
    >


  export type emergency_reportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_number?: boolean
    timestamp?: boolean
    caller_info?: boolean
    caller_phone?: boolean
    location?: boolean
    emergency_type?: boolean
    urgency_level?: boolean
    description?: boolean
    structured_data?: boolean
    fotoUrl?: boolean
    ai_recommendations?: boolean
    status?: boolean
    voice_file_path?: boolean
    response_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
    whatsapp_conversations?: boolean | emergency_reports$whatsapp_conversationsArgs<ExtArgs>
    _count?: boolean | Emergency_reportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergency_reports"]>

  export type emergency_reportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_number?: boolean
    timestamp?: boolean
    caller_info?: boolean
    caller_phone?: boolean
    location?: boolean
    emergency_type?: boolean
    urgency_level?: boolean
    description?: boolean
    structured_data?: boolean
    fotoUrl?: boolean
    ai_recommendations?: boolean
    status?: boolean
    voice_file_path?: boolean
    response_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emergency_reports"]>

  export type emergency_reportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_number?: boolean
    timestamp?: boolean
    caller_info?: boolean
    caller_phone?: boolean
    location?: boolean
    emergency_type?: boolean
    urgency_level?: boolean
    description?: boolean
    structured_data?: boolean
    fotoUrl?: boolean
    ai_recommendations?: boolean
    status?: boolean
    voice_file_path?: boolean
    response_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emergency_reports"]>

  export type emergency_reportsSelectScalar = {
    id?: boolean
    report_number?: boolean
    timestamp?: boolean
    caller_info?: boolean
    caller_phone?: boolean
    location?: boolean
    emergency_type?: boolean
    urgency_level?: boolean
    description?: boolean
    structured_data?: boolean
    fotoUrl?: boolean
    ai_recommendations?: boolean
    status?: boolean
    voice_file_path?: boolean
    response_sent?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type emergency_reportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_number" | "timestamp" | "caller_info" | "caller_phone" | "location" | "emergency_type" | "urgency_level" | "description" | "structured_data" | "fotoUrl" | "ai_recommendations" | "status" | "voice_file_path" | "response_sent" | "created_at" | "updated_at", ExtArgs["result"]["emergency_reports"]>
  export type emergency_reportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whatsapp_conversations?: boolean | emergency_reports$whatsapp_conversationsArgs<ExtArgs>
    _count?: boolean | Emergency_reportsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type emergency_reportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type emergency_reportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $emergency_reportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emergency_reports"
    objects: {
      whatsapp_conversations: Prisma.$whatsapp_conversationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      report_number: string
      timestamp: Date | null
      caller_info: string | null
      caller_phone: string | null
      location: string | null
      emergency_type: string | null
      urgency_level: number | null
      description: string | null
      structured_data: Prisma.JsonValue | null
      fotoUrl: string | null
      ai_recommendations: Prisma.JsonValue | null
      status: string | null
      voice_file_path: string | null
      response_sent: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["emergency_reports"]>
    composites: {}
  }

  type emergency_reportsGetPayload<S extends boolean | null | undefined | emergency_reportsDefaultArgs> = $Result.GetResult<Prisma.$emergency_reportsPayload, S>

  type emergency_reportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emergency_reportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Emergency_reportsCountAggregateInputType | true
    }

  export interface emergency_reportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emergency_reports'], meta: { name: 'emergency_reports' } }
    /**
     * Find zero or one Emergency_reports that matches the filter.
     * @param {emergency_reportsFindUniqueArgs} args - Arguments to find a Emergency_reports
     * @example
     * // Get one Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emergency_reportsFindUniqueArgs>(args: SelectSubset<T, emergency_reportsFindUniqueArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emergency_reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emergency_reportsFindUniqueOrThrowArgs} args - Arguments to find a Emergency_reports
     * @example
     * // Get one Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emergency_reportsFindUniqueOrThrowArgs>(args: SelectSubset<T, emergency_reportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emergency_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emergency_reportsFindFirstArgs} args - Arguments to find a Emergency_reports
     * @example
     * // Get one Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emergency_reportsFindFirstArgs>(args?: SelectSubset<T, emergency_reportsFindFirstArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emergency_reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emergency_reportsFindFirstOrThrowArgs} args - Arguments to find a Emergency_reports
     * @example
     * // Get one Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emergency_reportsFindFirstOrThrowArgs>(args?: SelectSubset<T, emergency_reportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emergency_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emergency_reportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.findMany()
     * 
     * // Get first 10 Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergency_reportsWithIdOnly = await prisma.emergency_reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends emergency_reportsFindManyArgs>(args?: SelectSubset<T, emergency_reportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emergency_reports.
     * @param {emergency_reportsCreateArgs} args - Arguments to create a Emergency_reports.
     * @example
     * // Create one Emergency_reports
     * const Emergency_reports = await prisma.emergency_reports.create({
     *   data: {
     *     // ... data to create a Emergency_reports
     *   }
     * })
     * 
     */
    create<T extends emergency_reportsCreateArgs>(args: SelectSubset<T, emergency_reportsCreateArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emergency_reports.
     * @param {emergency_reportsCreateManyArgs} args - Arguments to create many Emergency_reports.
     * @example
     * // Create many Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emergency_reportsCreateManyArgs>(args?: SelectSubset<T, emergency_reportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emergency_reports and returns the data saved in the database.
     * @param {emergency_reportsCreateManyAndReturnArgs} args - Arguments to create many Emergency_reports.
     * @example
     * // Create many Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emergency_reports and only return the `id`
     * const emergency_reportsWithIdOnly = await prisma.emergency_reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends emergency_reportsCreateManyAndReturnArgs>(args?: SelectSubset<T, emergency_reportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emergency_reports.
     * @param {emergency_reportsDeleteArgs} args - Arguments to delete one Emergency_reports.
     * @example
     * // Delete one Emergency_reports
     * const Emergency_reports = await prisma.emergency_reports.delete({
     *   where: {
     *     // ... filter to delete one Emergency_reports
     *   }
     * })
     * 
     */
    delete<T extends emergency_reportsDeleteArgs>(args: SelectSubset<T, emergency_reportsDeleteArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emergency_reports.
     * @param {emergency_reportsUpdateArgs} args - Arguments to update one Emergency_reports.
     * @example
     * // Update one Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emergency_reportsUpdateArgs>(args: SelectSubset<T, emergency_reportsUpdateArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emergency_reports.
     * @param {emergency_reportsDeleteManyArgs} args - Arguments to filter Emergency_reports to delete.
     * @example
     * // Delete a few Emergency_reports
     * const { count } = await prisma.emergency_reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emergency_reportsDeleteManyArgs>(args?: SelectSubset<T, emergency_reportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emergency_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emergency_reportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emergency_reportsUpdateManyArgs>(args: SelectSubset<T, emergency_reportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emergency_reports and returns the data updated in the database.
     * @param {emergency_reportsUpdateManyAndReturnArgs} args - Arguments to update many Emergency_reports.
     * @example
     * // Update many Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emergency_reports and only return the `id`
     * const emergency_reportsWithIdOnly = await prisma.emergency_reports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends emergency_reportsUpdateManyAndReturnArgs>(args: SelectSubset<T, emergency_reportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emergency_reports.
     * @param {emergency_reportsUpsertArgs} args - Arguments to update or create a Emergency_reports.
     * @example
     * // Update or create a Emergency_reports
     * const emergency_reports = await prisma.emergency_reports.upsert({
     *   create: {
     *     // ... data to create a Emergency_reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emergency_reports we want to update
     *   }
     * })
     */
    upsert<T extends emergency_reportsUpsertArgs>(args: SelectSubset<T, emergency_reportsUpsertArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emergency_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emergency_reportsCountArgs} args - Arguments to filter Emergency_reports to count.
     * @example
     * // Count the number of Emergency_reports
     * const count = await prisma.emergency_reports.count({
     *   where: {
     *     // ... the filter for the Emergency_reports we want to count
     *   }
     * })
    **/
    count<T extends emergency_reportsCountArgs>(
      args?: Subset<T, emergency_reportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Emergency_reportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emergency_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Emergency_reportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Emergency_reportsAggregateArgs>(args: Subset<T, Emergency_reportsAggregateArgs>): Prisma.PrismaPromise<GetEmergency_reportsAggregateType<T>>

    /**
     * Group by Emergency_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emergency_reportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends emergency_reportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emergency_reportsGroupByArgs['orderBy'] }
        : { orderBy?: emergency_reportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, emergency_reportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergency_reportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emergency_reports model
   */
  readonly fields: emergency_reportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emergency_reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emergency_reportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whatsapp_conversations<T extends emergency_reports$whatsapp_conversationsArgs<ExtArgs> = {}>(args?: Subset<T, emergency_reports$whatsapp_conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the emergency_reports model
   */
  interface emergency_reportsFieldRefs {
    readonly id: FieldRef<"emergency_reports", 'String'>
    readonly report_number: FieldRef<"emergency_reports", 'String'>
    readonly timestamp: FieldRef<"emergency_reports", 'DateTime'>
    readonly caller_info: FieldRef<"emergency_reports", 'String'>
    readonly caller_phone: FieldRef<"emergency_reports", 'String'>
    readonly location: FieldRef<"emergency_reports", 'String'>
    readonly emergency_type: FieldRef<"emergency_reports", 'String'>
    readonly urgency_level: FieldRef<"emergency_reports", 'Int'>
    readonly description: FieldRef<"emergency_reports", 'String'>
    readonly structured_data: FieldRef<"emergency_reports", 'Json'>
    readonly fotoUrl: FieldRef<"emergency_reports", 'String'>
    readonly ai_recommendations: FieldRef<"emergency_reports", 'Json'>
    readonly status: FieldRef<"emergency_reports", 'String'>
    readonly voice_file_path: FieldRef<"emergency_reports", 'String'>
    readonly response_sent: FieldRef<"emergency_reports", 'Boolean'>
    readonly created_at: FieldRef<"emergency_reports", 'DateTime'>
    readonly updated_at: FieldRef<"emergency_reports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * emergency_reports findUnique
   */
  export type emergency_reportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * Filter, which emergency_reports to fetch.
     */
    where: emergency_reportsWhereUniqueInput
  }

  /**
   * emergency_reports findUniqueOrThrow
   */
  export type emergency_reportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * Filter, which emergency_reports to fetch.
     */
    where: emergency_reportsWhereUniqueInput
  }

  /**
   * emergency_reports findFirst
   */
  export type emergency_reportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * Filter, which emergency_reports to fetch.
     */
    where?: emergency_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emergency_reports to fetch.
     */
    orderBy?: emergency_reportsOrderByWithRelationInput | emergency_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emergency_reports.
     */
    cursor?: emergency_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emergency_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emergency_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emergency_reports.
     */
    distinct?: Emergency_reportsScalarFieldEnum | Emergency_reportsScalarFieldEnum[]
  }

  /**
   * emergency_reports findFirstOrThrow
   */
  export type emergency_reportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * Filter, which emergency_reports to fetch.
     */
    where?: emergency_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emergency_reports to fetch.
     */
    orderBy?: emergency_reportsOrderByWithRelationInput | emergency_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emergency_reports.
     */
    cursor?: emergency_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emergency_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emergency_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emergency_reports.
     */
    distinct?: Emergency_reportsScalarFieldEnum | Emergency_reportsScalarFieldEnum[]
  }

  /**
   * emergency_reports findMany
   */
  export type emergency_reportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * Filter, which emergency_reports to fetch.
     */
    where?: emergency_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emergency_reports to fetch.
     */
    orderBy?: emergency_reportsOrderByWithRelationInput | emergency_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emergency_reports.
     */
    cursor?: emergency_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emergency_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emergency_reports.
     */
    skip?: number
    distinct?: Emergency_reportsScalarFieldEnum | Emergency_reportsScalarFieldEnum[]
  }

  /**
   * emergency_reports create
   */
  export type emergency_reportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * The data needed to create a emergency_reports.
     */
    data: XOR<emergency_reportsCreateInput, emergency_reportsUncheckedCreateInput>
  }

  /**
   * emergency_reports createMany
   */
  export type emergency_reportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emergency_reports.
     */
    data: emergency_reportsCreateManyInput | emergency_reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emergency_reports createManyAndReturn
   */
  export type emergency_reportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * The data used to create many emergency_reports.
     */
    data: emergency_reportsCreateManyInput | emergency_reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emergency_reports update
   */
  export type emergency_reportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * The data needed to update a emergency_reports.
     */
    data: XOR<emergency_reportsUpdateInput, emergency_reportsUncheckedUpdateInput>
    /**
     * Choose, which emergency_reports to update.
     */
    where: emergency_reportsWhereUniqueInput
  }

  /**
   * emergency_reports updateMany
   */
  export type emergency_reportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emergency_reports.
     */
    data: XOR<emergency_reportsUpdateManyMutationInput, emergency_reportsUncheckedUpdateManyInput>
    /**
     * Filter which emergency_reports to update
     */
    where?: emergency_reportsWhereInput
    /**
     * Limit how many emergency_reports to update.
     */
    limit?: number
  }

  /**
   * emergency_reports updateManyAndReturn
   */
  export type emergency_reportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * The data used to update emergency_reports.
     */
    data: XOR<emergency_reportsUpdateManyMutationInput, emergency_reportsUncheckedUpdateManyInput>
    /**
     * Filter which emergency_reports to update
     */
    where?: emergency_reportsWhereInput
    /**
     * Limit how many emergency_reports to update.
     */
    limit?: number
  }

  /**
   * emergency_reports upsert
   */
  export type emergency_reportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * The filter to search for the emergency_reports to update in case it exists.
     */
    where: emergency_reportsWhereUniqueInput
    /**
     * In case the emergency_reports found by the `where` argument doesn't exist, create a new emergency_reports with this data.
     */
    create: XOR<emergency_reportsCreateInput, emergency_reportsUncheckedCreateInput>
    /**
     * In case the emergency_reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emergency_reportsUpdateInput, emergency_reportsUncheckedUpdateInput>
  }

  /**
   * emergency_reports delete
   */
  export type emergency_reportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    /**
     * Filter which emergency_reports to delete.
     */
    where: emergency_reportsWhereUniqueInput
  }

  /**
   * emergency_reports deleteMany
   */
  export type emergency_reportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emergency_reports to delete
     */
    where?: emergency_reportsWhereInput
    /**
     * Limit how many emergency_reports to delete.
     */
    limit?: number
  }

  /**
   * emergency_reports.whatsapp_conversations
   */
  export type emergency_reports$whatsapp_conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    where?: whatsapp_conversationsWhereInput
    orderBy?: whatsapp_conversationsOrderByWithRelationInput | whatsapp_conversationsOrderByWithRelationInput[]
    cursor?: whatsapp_conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Whatsapp_conversationsScalarFieldEnum | Whatsapp_conversationsScalarFieldEnum[]
  }

  /**
   * emergency_reports without action
   */
  export type emergency_reportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
  }


  /**
   * Model whatsapp_conversations
   */

  export type AggregateWhatsapp_conversations = {
    _count: Whatsapp_conversationsCountAggregateOutputType | null
    _min: Whatsapp_conversationsMinAggregateOutputType | null
    _max: Whatsapp_conversationsMaxAggregateOutputType | null
  }

  export type Whatsapp_conversationsMinAggregateOutputType = {
    id: string | null
    phone_number: string | null
    message_sid: string | null
    message_body: string | null
    message_type: string | null
    media_url: string | null
    timestamp: Date | null
    report_id: string | null
  }

  export type Whatsapp_conversationsMaxAggregateOutputType = {
    id: string | null
    phone_number: string | null
    message_sid: string | null
    message_body: string | null
    message_type: string | null
    media_url: string | null
    timestamp: Date | null
    report_id: string | null
  }

  export type Whatsapp_conversationsCountAggregateOutputType = {
    id: number
    phone_number: number
    message_sid: number
    message_body: number
    message_type: number
    media_url: number
    timestamp: number
    report_id: number
    _all: number
  }


  export type Whatsapp_conversationsMinAggregateInputType = {
    id?: true
    phone_number?: true
    message_sid?: true
    message_body?: true
    message_type?: true
    media_url?: true
    timestamp?: true
    report_id?: true
  }

  export type Whatsapp_conversationsMaxAggregateInputType = {
    id?: true
    phone_number?: true
    message_sid?: true
    message_body?: true
    message_type?: true
    media_url?: true
    timestamp?: true
    report_id?: true
  }

  export type Whatsapp_conversationsCountAggregateInputType = {
    id?: true
    phone_number?: true
    message_sid?: true
    message_body?: true
    message_type?: true
    media_url?: true
    timestamp?: true
    report_id?: true
    _all?: true
  }

  export type Whatsapp_conversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_conversations to aggregate.
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_conversations to fetch.
     */
    orderBy?: whatsapp_conversationsOrderByWithRelationInput | whatsapp_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: whatsapp_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned whatsapp_conversations
    **/
    _count?: true | Whatsapp_conversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Whatsapp_conversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Whatsapp_conversationsMaxAggregateInputType
  }

  export type GetWhatsapp_conversationsAggregateType<T extends Whatsapp_conversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsapp_conversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsapp_conversations[P]>
      : GetScalarType<T[P], AggregateWhatsapp_conversations[P]>
  }




  export type whatsapp_conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_conversationsWhereInput
    orderBy?: whatsapp_conversationsOrderByWithAggregationInput | whatsapp_conversationsOrderByWithAggregationInput[]
    by: Whatsapp_conversationsScalarFieldEnum[] | Whatsapp_conversationsScalarFieldEnum
    having?: whatsapp_conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Whatsapp_conversationsCountAggregateInputType | true
    _min?: Whatsapp_conversationsMinAggregateInputType
    _max?: Whatsapp_conversationsMaxAggregateInputType
  }

  export type Whatsapp_conversationsGroupByOutputType = {
    id: string
    phone_number: string
    message_sid: string | null
    message_body: string | null
    message_type: string | null
    media_url: string | null
    timestamp: Date | null
    report_id: string | null
    _count: Whatsapp_conversationsCountAggregateOutputType | null
    _min: Whatsapp_conversationsMinAggregateOutputType | null
    _max: Whatsapp_conversationsMaxAggregateOutputType | null
  }

  type GetWhatsapp_conversationsGroupByPayload<T extends whatsapp_conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Whatsapp_conversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Whatsapp_conversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Whatsapp_conversationsGroupByOutputType[P]>
            : GetScalarType<T[P], Whatsapp_conversationsGroupByOutputType[P]>
        }
      >
    >


  export type whatsapp_conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    message_sid?: boolean
    message_body?: boolean
    message_type?: boolean
    media_url?: boolean
    timestamp?: boolean
    report_id?: boolean
    emergency_reports?: boolean | whatsapp_conversations$emergency_reportsArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_conversations"]>

  export type whatsapp_conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    message_sid?: boolean
    message_body?: boolean
    message_type?: boolean
    media_url?: boolean
    timestamp?: boolean
    report_id?: boolean
    emergency_reports?: boolean | whatsapp_conversations$emergency_reportsArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_conversations"]>

  export type whatsapp_conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    message_sid?: boolean
    message_body?: boolean
    message_type?: boolean
    media_url?: boolean
    timestamp?: boolean
    report_id?: boolean
    emergency_reports?: boolean | whatsapp_conversations$emergency_reportsArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_conversations"]>

  export type whatsapp_conversationsSelectScalar = {
    id?: boolean
    phone_number?: boolean
    message_sid?: boolean
    message_body?: boolean
    message_type?: boolean
    media_url?: boolean
    timestamp?: boolean
    report_id?: boolean
  }

  export type whatsapp_conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_number" | "message_sid" | "message_body" | "message_type" | "media_url" | "timestamp" | "report_id", ExtArgs["result"]["whatsapp_conversations"]>
  export type whatsapp_conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergency_reports?: boolean | whatsapp_conversations$emergency_reportsArgs<ExtArgs>
  }
  export type whatsapp_conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergency_reports?: boolean | whatsapp_conversations$emergency_reportsArgs<ExtArgs>
  }
  export type whatsapp_conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergency_reports?: boolean | whatsapp_conversations$emergency_reportsArgs<ExtArgs>
  }

  export type $whatsapp_conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "whatsapp_conversations"
    objects: {
      emergency_reports: Prisma.$emergency_reportsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone_number: string
      message_sid: string | null
      message_body: string | null
      message_type: string | null
      media_url: string | null
      timestamp: Date | null
      report_id: string | null
    }, ExtArgs["result"]["whatsapp_conversations"]>
    composites: {}
  }

  type whatsapp_conversationsGetPayload<S extends boolean | null | undefined | whatsapp_conversationsDefaultArgs> = $Result.GetResult<Prisma.$whatsapp_conversationsPayload, S>

  type whatsapp_conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<whatsapp_conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Whatsapp_conversationsCountAggregateInputType | true
    }

  export interface whatsapp_conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['whatsapp_conversations'], meta: { name: 'whatsapp_conversations' } }
    /**
     * Find zero or one Whatsapp_conversations that matches the filter.
     * @param {whatsapp_conversationsFindUniqueArgs} args - Arguments to find a Whatsapp_conversations
     * @example
     * // Get one Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends whatsapp_conversationsFindUniqueArgs>(args: SelectSubset<T, whatsapp_conversationsFindUniqueArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whatsapp_conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {whatsapp_conversationsFindUniqueOrThrowArgs} args - Arguments to find a Whatsapp_conversations
     * @example
     * // Get one Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends whatsapp_conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, whatsapp_conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_conversationsFindFirstArgs} args - Arguments to find a Whatsapp_conversations
     * @example
     * // Get one Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends whatsapp_conversationsFindFirstArgs>(args?: SelectSubset<T, whatsapp_conversationsFindFirstArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_conversationsFindFirstOrThrowArgs} args - Arguments to find a Whatsapp_conversations
     * @example
     * // Get one Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends whatsapp_conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, whatsapp_conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whatsapp_conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.findMany()
     * 
     * // Get first 10 Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsapp_conversationsWithIdOnly = await prisma.whatsapp_conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends whatsapp_conversationsFindManyArgs>(args?: SelectSubset<T, whatsapp_conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whatsapp_conversations.
     * @param {whatsapp_conversationsCreateArgs} args - Arguments to create a Whatsapp_conversations.
     * @example
     * // Create one Whatsapp_conversations
     * const Whatsapp_conversations = await prisma.whatsapp_conversations.create({
     *   data: {
     *     // ... data to create a Whatsapp_conversations
     *   }
     * })
     * 
     */
    create<T extends whatsapp_conversationsCreateArgs>(args: SelectSubset<T, whatsapp_conversationsCreateArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whatsapp_conversations.
     * @param {whatsapp_conversationsCreateManyArgs} args - Arguments to create many Whatsapp_conversations.
     * @example
     * // Create many Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends whatsapp_conversationsCreateManyArgs>(args?: SelectSubset<T, whatsapp_conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whatsapp_conversations and returns the data saved in the database.
     * @param {whatsapp_conversationsCreateManyAndReturnArgs} args - Arguments to create many Whatsapp_conversations.
     * @example
     * // Create many Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whatsapp_conversations and only return the `id`
     * const whatsapp_conversationsWithIdOnly = await prisma.whatsapp_conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends whatsapp_conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, whatsapp_conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Whatsapp_conversations.
     * @param {whatsapp_conversationsDeleteArgs} args - Arguments to delete one Whatsapp_conversations.
     * @example
     * // Delete one Whatsapp_conversations
     * const Whatsapp_conversations = await prisma.whatsapp_conversations.delete({
     *   where: {
     *     // ... filter to delete one Whatsapp_conversations
     *   }
     * })
     * 
     */
    delete<T extends whatsapp_conversationsDeleteArgs>(args: SelectSubset<T, whatsapp_conversationsDeleteArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whatsapp_conversations.
     * @param {whatsapp_conversationsUpdateArgs} args - Arguments to update one Whatsapp_conversations.
     * @example
     * // Update one Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends whatsapp_conversationsUpdateArgs>(args: SelectSubset<T, whatsapp_conversationsUpdateArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whatsapp_conversations.
     * @param {whatsapp_conversationsDeleteManyArgs} args - Arguments to filter Whatsapp_conversations to delete.
     * @example
     * // Delete a few Whatsapp_conversations
     * const { count } = await prisma.whatsapp_conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends whatsapp_conversationsDeleteManyArgs>(args?: SelectSubset<T, whatsapp_conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends whatsapp_conversationsUpdateManyArgs>(args: SelectSubset<T, whatsapp_conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_conversations and returns the data updated in the database.
     * @param {whatsapp_conversationsUpdateManyAndReturnArgs} args - Arguments to update many Whatsapp_conversations.
     * @example
     * // Update many Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Whatsapp_conversations and only return the `id`
     * const whatsapp_conversationsWithIdOnly = await prisma.whatsapp_conversations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends whatsapp_conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, whatsapp_conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Whatsapp_conversations.
     * @param {whatsapp_conversationsUpsertArgs} args - Arguments to update or create a Whatsapp_conversations.
     * @example
     * // Update or create a Whatsapp_conversations
     * const whatsapp_conversations = await prisma.whatsapp_conversations.upsert({
     *   create: {
     *     // ... data to create a Whatsapp_conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whatsapp_conversations we want to update
     *   }
     * })
     */
    upsert<T extends whatsapp_conversationsUpsertArgs>(args: SelectSubset<T, whatsapp_conversationsUpsertArgs<ExtArgs>>): Prisma__whatsapp_conversationsClient<$Result.GetResult<Prisma.$whatsapp_conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whatsapp_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_conversationsCountArgs} args - Arguments to filter Whatsapp_conversations to count.
     * @example
     * // Count the number of Whatsapp_conversations
     * const count = await prisma.whatsapp_conversations.count({
     *   where: {
     *     // ... the filter for the Whatsapp_conversations we want to count
     *   }
     * })
    **/
    count<T extends whatsapp_conversationsCountArgs>(
      args?: Subset<T, whatsapp_conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Whatsapp_conversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whatsapp_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Whatsapp_conversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Whatsapp_conversationsAggregateArgs>(args: Subset<T, Whatsapp_conversationsAggregateArgs>): Prisma.PrismaPromise<GetWhatsapp_conversationsAggregateType<T>>

    /**
     * Group by Whatsapp_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_conversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends whatsapp_conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: whatsapp_conversationsGroupByArgs['orderBy'] }
        : { orderBy?: whatsapp_conversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, whatsapp_conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsapp_conversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the whatsapp_conversations model
   */
  readonly fields: whatsapp_conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for whatsapp_conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__whatsapp_conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emergency_reports<T extends whatsapp_conversations$emergency_reportsArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_conversations$emergency_reportsArgs<ExtArgs>>): Prisma__emergency_reportsClient<$Result.GetResult<Prisma.$emergency_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the whatsapp_conversations model
   */
  interface whatsapp_conversationsFieldRefs {
    readonly id: FieldRef<"whatsapp_conversations", 'String'>
    readonly phone_number: FieldRef<"whatsapp_conversations", 'String'>
    readonly message_sid: FieldRef<"whatsapp_conversations", 'String'>
    readonly message_body: FieldRef<"whatsapp_conversations", 'String'>
    readonly message_type: FieldRef<"whatsapp_conversations", 'String'>
    readonly media_url: FieldRef<"whatsapp_conversations", 'String'>
    readonly timestamp: FieldRef<"whatsapp_conversations", 'DateTime'>
    readonly report_id: FieldRef<"whatsapp_conversations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * whatsapp_conversations findUnique
   */
  export type whatsapp_conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_conversations to fetch.
     */
    where: whatsapp_conversationsWhereUniqueInput
  }

  /**
   * whatsapp_conversations findUniqueOrThrow
   */
  export type whatsapp_conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_conversations to fetch.
     */
    where: whatsapp_conversationsWhereUniqueInput
  }

  /**
   * whatsapp_conversations findFirst
   */
  export type whatsapp_conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_conversations to fetch.
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_conversations to fetch.
     */
    orderBy?: whatsapp_conversationsOrderByWithRelationInput | whatsapp_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_conversations.
     */
    cursor?: whatsapp_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_conversations.
     */
    distinct?: Whatsapp_conversationsScalarFieldEnum | Whatsapp_conversationsScalarFieldEnum[]
  }

  /**
   * whatsapp_conversations findFirstOrThrow
   */
  export type whatsapp_conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_conversations to fetch.
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_conversations to fetch.
     */
    orderBy?: whatsapp_conversationsOrderByWithRelationInput | whatsapp_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_conversations.
     */
    cursor?: whatsapp_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_conversations.
     */
    distinct?: Whatsapp_conversationsScalarFieldEnum | Whatsapp_conversationsScalarFieldEnum[]
  }

  /**
   * whatsapp_conversations findMany
   */
  export type whatsapp_conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_conversations to fetch.
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_conversations to fetch.
     */
    orderBy?: whatsapp_conversationsOrderByWithRelationInput | whatsapp_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing whatsapp_conversations.
     */
    cursor?: whatsapp_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_conversations.
     */
    skip?: number
    distinct?: Whatsapp_conversationsScalarFieldEnum | Whatsapp_conversationsScalarFieldEnum[]
  }

  /**
   * whatsapp_conversations create
   */
  export type whatsapp_conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a whatsapp_conversations.
     */
    data: XOR<whatsapp_conversationsCreateInput, whatsapp_conversationsUncheckedCreateInput>
  }

  /**
   * whatsapp_conversations createMany
   */
  export type whatsapp_conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many whatsapp_conversations.
     */
    data: whatsapp_conversationsCreateManyInput | whatsapp_conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * whatsapp_conversations createManyAndReturn
   */
  export type whatsapp_conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many whatsapp_conversations.
     */
    data: whatsapp_conversationsCreateManyInput | whatsapp_conversationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_conversations update
   */
  export type whatsapp_conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a whatsapp_conversations.
     */
    data: XOR<whatsapp_conversationsUpdateInput, whatsapp_conversationsUncheckedUpdateInput>
    /**
     * Choose, which whatsapp_conversations to update.
     */
    where: whatsapp_conversationsWhereUniqueInput
  }

  /**
   * whatsapp_conversations updateMany
   */
  export type whatsapp_conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update whatsapp_conversations.
     */
    data: XOR<whatsapp_conversationsUpdateManyMutationInput, whatsapp_conversationsUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_conversations to update
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * Limit how many whatsapp_conversations to update.
     */
    limit?: number
  }

  /**
   * whatsapp_conversations updateManyAndReturn
   */
  export type whatsapp_conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * The data used to update whatsapp_conversations.
     */
    data: XOR<whatsapp_conversationsUpdateManyMutationInput, whatsapp_conversationsUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_conversations to update
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * Limit how many whatsapp_conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_conversations upsert
   */
  export type whatsapp_conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the whatsapp_conversations to update in case it exists.
     */
    where: whatsapp_conversationsWhereUniqueInput
    /**
     * In case the whatsapp_conversations found by the `where` argument doesn't exist, create a new whatsapp_conversations with this data.
     */
    create: XOR<whatsapp_conversationsCreateInput, whatsapp_conversationsUncheckedCreateInput>
    /**
     * In case the whatsapp_conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<whatsapp_conversationsUpdateInput, whatsapp_conversationsUncheckedUpdateInput>
  }

  /**
   * whatsapp_conversations delete
   */
  export type whatsapp_conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
    /**
     * Filter which whatsapp_conversations to delete.
     */
    where: whatsapp_conversationsWhereUniqueInput
  }

  /**
   * whatsapp_conversations deleteMany
   */
  export type whatsapp_conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_conversations to delete
     */
    where?: whatsapp_conversationsWhereInput
    /**
     * Limit how many whatsapp_conversations to delete.
     */
    limit?: number
  }

  /**
   * whatsapp_conversations.emergency_reports
   */
  export type whatsapp_conversations$emergency_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergency_reports
     */
    select?: emergency_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergency_reports
     */
    omit?: emergency_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emergency_reportsInclude<ExtArgs> | null
    where?: emergency_reportsWhereInput
  }

  /**
   * whatsapp_conversations without action
   */
  export type whatsapp_conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_conversations
     */
    select?: whatsapp_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_conversations
     */
    omit?: whatsapp_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_conversationsInclude<ExtArgs> | null
  }


  /**
   * Model regulation_docs
   */

  export type AggregateRegulation_docs = {
    _count: Regulation_docsCountAggregateOutputType | null
    _min: Regulation_docsMinAggregateOutputType | null
    _max: Regulation_docsMaxAggregateOutputType | null
  }

  export type Regulation_docsMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    excerpt: string | null
    url: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Regulation_docsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    excerpt: string | null
    url: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Regulation_docsCountAggregateOutputType = {
    id: number
    title: number
    category: number
    excerpt: number
    url: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Regulation_docsMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    excerpt?: true
    url?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type Regulation_docsMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    excerpt?: true
    url?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type Regulation_docsCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    excerpt?: true
    url?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Regulation_docsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regulation_docs to aggregate.
     */
    where?: regulation_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulation_docs to fetch.
     */
    orderBy?: regulation_docsOrderByWithRelationInput | regulation_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regulation_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulation_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulation_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regulation_docs
    **/
    _count?: true | Regulation_docsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Regulation_docsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Regulation_docsMaxAggregateInputType
  }

  export type GetRegulation_docsAggregateType<T extends Regulation_docsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegulation_docs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegulation_docs[P]>
      : GetScalarType<T[P], AggregateRegulation_docs[P]>
  }




  export type regulation_docsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regulation_docsWhereInput
    orderBy?: regulation_docsOrderByWithAggregationInput | regulation_docsOrderByWithAggregationInput[]
    by: Regulation_docsScalarFieldEnum[] | Regulation_docsScalarFieldEnum
    having?: regulation_docsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Regulation_docsCountAggregateInputType | true
    _min?: Regulation_docsMinAggregateInputType
    _max?: Regulation_docsMaxAggregateInputType
  }

  export type Regulation_docsGroupByOutputType = {
    id: string
    title: string
    category: string
    excerpt: string | null
    url: string | null
    content: string | null
    created_at: Date
    updated_at: Date
    _count: Regulation_docsCountAggregateOutputType | null
    _min: Regulation_docsMinAggregateOutputType | null
    _max: Regulation_docsMaxAggregateOutputType | null
  }

  type GetRegulation_docsGroupByPayload<T extends regulation_docsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Regulation_docsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Regulation_docsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Regulation_docsGroupByOutputType[P]>
            : GetScalarType<T[P], Regulation_docsGroupByOutputType[P]>
        }
      >
    >


  export type regulation_docsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    excerpt?: boolean
    url?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["regulation_docs"]>

  export type regulation_docsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    excerpt?: boolean
    url?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["regulation_docs"]>

  export type regulation_docsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    excerpt?: boolean
    url?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["regulation_docs"]>

  export type regulation_docsSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    excerpt?: boolean
    url?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type regulation_docsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "excerpt" | "url" | "content" | "created_at" | "updated_at", ExtArgs["result"]["regulation_docs"]>

  export type $regulation_docsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "regulation_docs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      excerpt: string | null
      url: string | null
      content: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["regulation_docs"]>
    composites: {}
  }

  type regulation_docsGetPayload<S extends boolean | null | undefined | regulation_docsDefaultArgs> = $Result.GetResult<Prisma.$regulation_docsPayload, S>

  type regulation_docsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<regulation_docsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Regulation_docsCountAggregateInputType | true
    }

  export interface regulation_docsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['regulation_docs'], meta: { name: 'regulation_docs' } }
    /**
     * Find zero or one Regulation_docs that matches the filter.
     * @param {regulation_docsFindUniqueArgs} args - Arguments to find a Regulation_docs
     * @example
     * // Get one Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regulation_docsFindUniqueArgs>(args: SelectSubset<T, regulation_docsFindUniqueArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regulation_docs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {regulation_docsFindUniqueOrThrowArgs} args - Arguments to find a Regulation_docs
     * @example
     * // Get one Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regulation_docsFindUniqueOrThrowArgs>(args: SelectSubset<T, regulation_docsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regulation_docs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regulation_docsFindFirstArgs} args - Arguments to find a Regulation_docs
     * @example
     * // Get one Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regulation_docsFindFirstArgs>(args?: SelectSubset<T, regulation_docsFindFirstArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regulation_docs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regulation_docsFindFirstOrThrowArgs} args - Arguments to find a Regulation_docs
     * @example
     * // Get one Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regulation_docsFindFirstOrThrowArgs>(args?: SelectSubset<T, regulation_docsFindFirstOrThrowArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regulation_docs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regulation_docsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.findMany()
     * 
     * // Get first 10 Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regulation_docsWithIdOnly = await prisma.regulation_docs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends regulation_docsFindManyArgs>(args?: SelectSubset<T, regulation_docsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regulation_docs.
     * @param {regulation_docsCreateArgs} args - Arguments to create a Regulation_docs.
     * @example
     * // Create one Regulation_docs
     * const Regulation_docs = await prisma.regulation_docs.create({
     *   data: {
     *     // ... data to create a Regulation_docs
     *   }
     * })
     * 
     */
    create<T extends regulation_docsCreateArgs>(args: SelectSubset<T, regulation_docsCreateArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regulation_docs.
     * @param {regulation_docsCreateManyArgs} args - Arguments to create many Regulation_docs.
     * @example
     * // Create many Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regulation_docsCreateManyArgs>(args?: SelectSubset<T, regulation_docsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regulation_docs and returns the data saved in the database.
     * @param {regulation_docsCreateManyAndReturnArgs} args - Arguments to create many Regulation_docs.
     * @example
     * // Create many Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regulation_docs and only return the `id`
     * const regulation_docsWithIdOnly = await prisma.regulation_docs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends regulation_docsCreateManyAndReturnArgs>(args?: SelectSubset<T, regulation_docsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regulation_docs.
     * @param {regulation_docsDeleteArgs} args - Arguments to delete one Regulation_docs.
     * @example
     * // Delete one Regulation_docs
     * const Regulation_docs = await prisma.regulation_docs.delete({
     *   where: {
     *     // ... filter to delete one Regulation_docs
     *   }
     * })
     * 
     */
    delete<T extends regulation_docsDeleteArgs>(args: SelectSubset<T, regulation_docsDeleteArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regulation_docs.
     * @param {regulation_docsUpdateArgs} args - Arguments to update one Regulation_docs.
     * @example
     * // Update one Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regulation_docsUpdateArgs>(args: SelectSubset<T, regulation_docsUpdateArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regulation_docs.
     * @param {regulation_docsDeleteManyArgs} args - Arguments to filter Regulation_docs to delete.
     * @example
     * // Delete a few Regulation_docs
     * const { count } = await prisma.regulation_docs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regulation_docsDeleteManyArgs>(args?: SelectSubset<T, regulation_docsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulation_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regulation_docsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regulation_docsUpdateManyArgs>(args: SelectSubset<T, regulation_docsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulation_docs and returns the data updated in the database.
     * @param {regulation_docsUpdateManyAndReturnArgs} args - Arguments to update many Regulation_docs.
     * @example
     * // Update many Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regulation_docs and only return the `id`
     * const regulation_docsWithIdOnly = await prisma.regulation_docs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends regulation_docsUpdateManyAndReturnArgs>(args: SelectSubset<T, regulation_docsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regulation_docs.
     * @param {regulation_docsUpsertArgs} args - Arguments to update or create a Regulation_docs.
     * @example
     * // Update or create a Regulation_docs
     * const regulation_docs = await prisma.regulation_docs.upsert({
     *   create: {
     *     // ... data to create a Regulation_docs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regulation_docs we want to update
     *   }
     * })
     */
    upsert<T extends regulation_docsUpsertArgs>(args: SelectSubset<T, regulation_docsUpsertArgs<ExtArgs>>): Prisma__regulation_docsClient<$Result.GetResult<Prisma.$regulation_docsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regulation_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regulation_docsCountArgs} args - Arguments to filter Regulation_docs to count.
     * @example
     * // Count the number of Regulation_docs
     * const count = await prisma.regulation_docs.count({
     *   where: {
     *     // ... the filter for the Regulation_docs we want to count
     *   }
     * })
    **/
    count<T extends regulation_docsCountArgs>(
      args?: Subset<T, regulation_docsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Regulation_docsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regulation_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regulation_docsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Regulation_docsAggregateArgs>(args: Subset<T, Regulation_docsAggregateArgs>): Prisma.PrismaPromise<GetRegulation_docsAggregateType<T>>

    /**
     * Group by Regulation_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regulation_docsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends regulation_docsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regulation_docsGroupByArgs['orderBy'] }
        : { orderBy?: regulation_docsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, regulation_docsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulation_docsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the regulation_docs model
   */
  readonly fields: regulation_docsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for regulation_docs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regulation_docsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the regulation_docs model
   */
  interface regulation_docsFieldRefs {
    readonly id: FieldRef<"regulation_docs", 'String'>
    readonly title: FieldRef<"regulation_docs", 'String'>
    readonly category: FieldRef<"regulation_docs", 'String'>
    readonly excerpt: FieldRef<"regulation_docs", 'String'>
    readonly url: FieldRef<"regulation_docs", 'String'>
    readonly content: FieldRef<"regulation_docs", 'String'>
    readonly created_at: FieldRef<"regulation_docs", 'DateTime'>
    readonly updated_at: FieldRef<"regulation_docs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * regulation_docs findUnique
   */
  export type regulation_docsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * Filter, which regulation_docs to fetch.
     */
    where: regulation_docsWhereUniqueInput
  }

  /**
   * regulation_docs findUniqueOrThrow
   */
  export type regulation_docsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * Filter, which regulation_docs to fetch.
     */
    where: regulation_docsWhereUniqueInput
  }

  /**
   * regulation_docs findFirst
   */
  export type regulation_docsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * Filter, which regulation_docs to fetch.
     */
    where?: regulation_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulation_docs to fetch.
     */
    orderBy?: regulation_docsOrderByWithRelationInput | regulation_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regulation_docs.
     */
    cursor?: regulation_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulation_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulation_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regulation_docs.
     */
    distinct?: Regulation_docsScalarFieldEnum | Regulation_docsScalarFieldEnum[]
  }

  /**
   * regulation_docs findFirstOrThrow
   */
  export type regulation_docsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * Filter, which regulation_docs to fetch.
     */
    where?: regulation_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulation_docs to fetch.
     */
    orderBy?: regulation_docsOrderByWithRelationInput | regulation_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regulation_docs.
     */
    cursor?: regulation_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulation_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulation_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regulation_docs.
     */
    distinct?: Regulation_docsScalarFieldEnum | Regulation_docsScalarFieldEnum[]
  }

  /**
   * regulation_docs findMany
   */
  export type regulation_docsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * Filter, which regulation_docs to fetch.
     */
    where?: regulation_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulation_docs to fetch.
     */
    orderBy?: regulation_docsOrderByWithRelationInput | regulation_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regulation_docs.
     */
    cursor?: regulation_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulation_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulation_docs.
     */
    skip?: number
    distinct?: Regulation_docsScalarFieldEnum | Regulation_docsScalarFieldEnum[]
  }

  /**
   * regulation_docs create
   */
  export type regulation_docsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * The data needed to create a regulation_docs.
     */
    data: XOR<regulation_docsCreateInput, regulation_docsUncheckedCreateInput>
  }

  /**
   * regulation_docs createMany
   */
  export type regulation_docsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regulation_docs.
     */
    data: regulation_docsCreateManyInput | regulation_docsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regulation_docs createManyAndReturn
   */
  export type regulation_docsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * The data used to create many regulation_docs.
     */
    data: regulation_docsCreateManyInput | regulation_docsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regulation_docs update
   */
  export type regulation_docsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * The data needed to update a regulation_docs.
     */
    data: XOR<regulation_docsUpdateInput, regulation_docsUncheckedUpdateInput>
    /**
     * Choose, which regulation_docs to update.
     */
    where: regulation_docsWhereUniqueInput
  }

  /**
   * regulation_docs updateMany
   */
  export type regulation_docsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regulation_docs.
     */
    data: XOR<regulation_docsUpdateManyMutationInput, regulation_docsUncheckedUpdateManyInput>
    /**
     * Filter which regulation_docs to update
     */
    where?: regulation_docsWhereInput
    /**
     * Limit how many regulation_docs to update.
     */
    limit?: number
  }

  /**
   * regulation_docs updateManyAndReturn
   */
  export type regulation_docsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * The data used to update regulation_docs.
     */
    data: XOR<regulation_docsUpdateManyMutationInput, regulation_docsUncheckedUpdateManyInput>
    /**
     * Filter which regulation_docs to update
     */
    where?: regulation_docsWhereInput
    /**
     * Limit how many regulation_docs to update.
     */
    limit?: number
  }

  /**
   * regulation_docs upsert
   */
  export type regulation_docsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * The filter to search for the regulation_docs to update in case it exists.
     */
    where: regulation_docsWhereUniqueInput
    /**
     * In case the regulation_docs found by the `where` argument doesn't exist, create a new regulation_docs with this data.
     */
    create: XOR<regulation_docsCreateInput, regulation_docsUncheckedCreateInput>
    /**
     * In case the regulation_docs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regulation_docsUpdateInput, regulation_docsUncheckedUpdateInput>
  }

  /**
   * regulation_docs delete
   */
  export type regulation_docsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
    /**
     * Filter which regulation_docs to delete.
     */
    where: regulation_docsWhereUniqueInput
  }

  /**
   * regulation_docs deleteMany
   */
  export type regulation_docsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regulation_docs to delete
     */
    where?: regulation_docsWhereInput
    /**
     * Limit how many regulation_docs to delete.
     */
    limit?: number
  }

  /**
   * regulation_docs without action
   */
  export type regulation_docsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regulation_docs
     */
    select?: regulation_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regulation_docs
     */
    omit?: regulation_docsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Emergency_reportsScalarFieldEnum: {
    id: 'id',
    report_number: 'report_number',
    timestamp: 'timestamp',
    caller_info: 'caller_info',
    caller_phone: 'caller_phone',
    location: 'location',
    emergency_type: 'emergency_type',
    urgency_level: 'urgency_level',
    description: 'description',
    structured_data: 'structured_data',
    fotoUrl: 'fotoUrl',
    ai_recommendations: 'ai_recommendations',
    status: 'status',
    voice_file_path: 'voice_file_path',
    response_sent: 'response_sent',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Emergency_reportsScalarFieldEnum = (typeof Emergency_reportsScalarFieldEnum)[keyof typeof Emergency_reportsScalarFieldEnum]


  export const Whatsapp_conversationsScalarFieldEnum: {
    id: 'id',
    phone_number: 'phone_number',
    message_sid: 'message_sid',
    message_body: 'message_body',
    message_type: 'message_type',
    media_url: 'media_url',
    timestamp: 'timestamp',
    report_id: 'report_id'
  };

  export type Whatsapp_conversationsScalarFieldEnum = (typeof Whatsapp_conversationsScalarFieldEnum)[keyof typeof Whatsapp_conversationsScalarFieldEnum]


  export const Regulation_docsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    excerpt: 'excerpt',
    url: 'url',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Regulation_docsScalarFieldEnum = (typeof Regulation_docsScalarFieldEnum)[keyof typeof Regulation_docsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type emergency_reportsWhereInput = {
    AND?: emergency_reportsWhereInput | emergency_reportsWhereInput[]
    OR?: emergency_reportsWhereInput[]
    NOT?: emergency_reportsWhereInput | emergency_reportsWhereInput[]
    id?: UuidFilter<"emergency_reports"> | string
    report_number?: StringFilter<"emergency_reports"> | string
    timestamp?: DateTimeNullableFilter<"emergency_reports"> | Date | string | null
    caller_info?: StringNullableFilter<"emergency_reports"> | string | null
    caller_phone?: StringNullableFilter<"emergency_reports"> | string | null
    location?: StringNullableFilter<"emergency_reports"> | string | null
    emergency_type?: StringNullableFilter<"emergency_reports"> | string | null
    urgency_level?: IntNullableFilter<"emergency_reports"> | number | null
    description?: StringNullableFilter<"emergency_reports"> | string | null
    structured_data?: JsonNullableFilter<"emergency_reports">
    fotoUrl?: StringNullableFilter<"emergency_reports"> | string | null
    ai_recommendations?: JsonNullableFilter<"emergency_reports">
    status?: StringNullableFilter<"emergency_reports"> | string | null
    voice_file_path?: StringNullableFilter<"emergency_reports"> | string | null
    response_sent?: BoolNullableFilter<"emergency_reports"> | boolean | null
    created_at?: DateTimeNullableFilter<"emergency_reports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"emergency_reports"> | Date | string | null
    whatsapp_conversations?: Whatsapp_conversationsListRelationFilter
  }

  export type emergency_reportsOrderByWithRelationInput = {
    id?: SortOrder
    report_number?: SortOrder
    timestamp?: SortOrderInput | SortOrder
    caller_info?: SortOrderInput | SortOrder
    caller_phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    emergency_type?: SortOrderInput | SortOrder
    urgency_level?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    structured_data?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    ai_recommendations?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    voice_file_path?: SortOrderInput | SortOrder
    response_sent?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    whatsapp_conversations?: whatsapp_conversationsOrderByRelationAggregateInput
  }

  export type emergency_reportsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    report_number?: string
    AND?: emergency_reportsWhereInput | emergency_reportsWhereInput[]
    OR?: emergency_reportsWhereInput[]
    NOT?: emergency_reportsWhereInput | emergency_reportsWhereInput[]
    timestamp?: DateTimeNullableFilter<"emergency_reports"> | Date | string | null
    caller_info?: StringNullableFilter<"emergency_reports"> | string | null
    caller_phone?: StringNullableFilter<"emergency_reports"> | string | null
    location?: StringNullableFilter<"emergency_reports"> | string | null
    emergency_type?: StringNullableFilter<"emergency_reports"> | string | null
    urgency_level?: IntNullableFilter<"emergency_reports"> | number | null
    description?: StringNullableFilter<"emergency_reports"> | string | null
    structured_data?: JsonNullableFilter<"emergency_reports">
    fotoUrl?: StringNullableFilter<"emergency_reports"> | string | null
    ai_recommendations?: JsonNullableFilter<"emergency_reports">
    status?: StringNullableFilter<"emergency_reports"> | string | null
    voice_file_path?: StringNullableFilter<"emergency_reports"> | string | null
    response_sent?: BoolNullableFilter<"emergency_reports"> | boolean | null
    created_at?: DateTimeNullableFilter<"emergency_reports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"emergency_reports"> | Date | string | null
    whatsapp_conversations?: Whatsapp_conversationsListRelationFilter
  }, "id" | "report_number">

  export type emergency_reportsOrderByWithAggregationInput = {
    id?: SortOrder
    report_number?: SortOrder
    timestamp?: SortOrderInput | SortOrder
    caller_info?: SortOrderInput | SortOrder
    caller_phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    emergency_type?: SortOrderInput | SortOrder
    urgency_level?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    structured_data?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    ai_recommendations?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    voice_file_path?: SortOrderInput | SortOrder
    response_sent?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: emergency_reportsCountOrderByAggregateInput
    _avg?: emergency_reportsAvgOrderByAggregateInput
    _max?: emergency_reportsMaxOrderByAggregateInput
    _min?: emergency_reportsMinOrderByAggregateInput
    _sum?: emergency_reportsSumOrderByAggregateInput
  }

  export type emergency_reportsScalarWhereWithAggregatesInput = {
    AND?: emergency_reportsScalarWhereWithAggregatesInput | emergency_reportsScalarWhereWithAggregatesInput[]
    OR?: emergency_reportsScalarWhereWithAggregatesInput[]
    NOT?: emergency_reportsScalarWhereWithAggregatesInput | emergency_reportsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"emergency_reports"> | string
    report_number?: StringWithAggregatesFilter<"emergency_reports"> | string
    timestamp?: DateTimeNullableWithAggregatesFilter<"emergency_reports"> | Date | string | null
    caller_info?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    caller_phone?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    location?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    emergency_type?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    urgency_level?: IntNullableWithAggregatesFilter<"emergency_reports"> | number | null
    description?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    structured_data?: JsonNullableWithAggregatesFilter<"emergency_reports">
    fotoUrl?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    ai_recommendations?: JsonNullableWithAggregatesFilter<"emergency_reports">
    status?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    voice_file_path?: StringNullableWithAggregatesFilter<"emergency_reports"> | string | null
    response_sent?: BoolNullableWithAggregatesFilter<"emergency_reports"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"emergency_reports"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"emergency_reports"> | Date | string | null
  }

  export type whatsapp_conversationsWhereInput = {
    AND?: whatsapp_conversationsWhereInput | whatsapp_conversationsWhereInput[]
    OR?: whatsapp_conversationsWhereInput[]
    NOT?: whatsapp_conversationsWhereInput | whatsapp_conversationsWhereInput[]
    id?: UuidFilter<"whatsapp_conversations"> | string
    phone_number?: StringFilter<"whatsapp_conversations"> | string
    message_sid?: StringNullableFilter<"whatsapp_conversations"> | string | null
    message_body?: StringNullableFilter<"whatsapp_conversations"> | string | null
    message_type?: StringNullableFilter<"whatsapp_conversations"> | string | null
    media_url?: StringNullableFilter<"whatsapp_conversations"> | string | null
    timestamp?: DateTimeNullableFilter<"whatsapp_conversations"> | Date | string | null
    report_id?: UuidNullableFilter<"whatsapp_conversations"> | string | null
    emergency_reports?: XOR<Emergency_reportsNullableScalarRelationFilter, emergency_reportsWhereInput> | null
  }

  export type whatsapp_conversationsOrderByWithRelationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    message_sid?: SortOrderInput | SortOrder
    message_body?: SortOrderInput | SortOrder
    message_type?: SortOrderInput | SortOrder
    media_url?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    report_id?: SortOrderInput | SortOrder
    emergency_reports?: emergency_reportsOrderByWithRelationInput
  }

  export type whatsapp_conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: whatsapp_conversationsWhereInput | whatsapp_conversationsWhereInput[]
    OR?: whatsapp_conversationsWhereInput[]
    NOT?: whatsapp_conversationsWhereInput | whatsapp_conversationsWhereInput[]
    phone_number?: StringFilter<"whatsapp_conversations"> | string
    message_sid?: StringNullableFilter<"whatsapp_conversations"> | string | null
    message_body?: StringNullableFilter<"whatsapp_conversations"> | string | null
    message_type?: StringNullableFilter<"whatsapp_conversations"> | string | null
    media_url?: StringNullableFilter<"whatsapp_conversations"> | string | null
    timestamp?: DateTimeNullableFilter<"whatsapp_conversations"> | Date | string | null
    report_id?: UuidNullableFilter<"whatsapp_conversations"> | string | null
    emergency_reports?: XOR<Emergency_reportsNullableScalarRelationFilter, emergency_reportsWhereInput> | null
  }, "id">

  export type whatsapp_conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    message_sid?: SortOrderInput | SortOrder
    message_body?: SortOrderInput | SortOrder
    message_type?: SortOrderInput | SortOrder
    media_url?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    report_id?: SortOrderInput | SortOrder
    _count?: whatsapp_conversationsCountOrderByAggregateInput
    _max?: whatsapp_conversationsMaxOrderByAggregateInput
    _min?: whatsapp_conversationsMinOrderByAggregateInput
  }

  export type whatsapp_conversationsScalarWhereWithAggregatesInput = {
    AND?: whatsapp_conversationsScalarWhereWithAggregatesInput | whatsapp_conversationsScalarWhereWithAggregatesInput[]
    OR?: whatsapp_conversationsScalarWhereWithAggregatesInput[]
    NOT?: whatsapp_conversationsScalarWhereWithAggregatesInput | whatsapp_conversationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"whatsapp_conversations"> | string
    phone_number?: StringWithAggregatesFilter<"whatsapp_conversations"> | string
    message_sid?: StringNullableWithAggregatesFilter<"whatsapp_conversations"> | string | null
    message_body?: StringNullableWithAggregatesFilter<"whatsapp_conversations"> | string | null
    message_type?: StringNullableWithAggregatesFilter<"whatsapp_conversations"> | string | null
    media_url?: StringNullableWithAggregatesFilter<"whatsapp_conversations"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"whatsapp_conversations"> | Date | string | null
    report_id?: UuidNullableWithAggregatesFilter<"whatsapp_conversations"> | string | null
  }

  export type regulation_docsWhereInput = {
    AND?: regulation_docsWhereInput | regulation_docsWhereInput[]
    OR?: regulation_docsWhereInput[]
    NOT?: regulation_docsWhereInput | regulation_docsWhereInput[]
    id?: UuidFilter<"regulation_docs"> | string
    title?: StringFilter<"regulation_docs"> | string
    category?: StringFilter<"regulation_docs"> | string
    excerpt?: StringNullableFilter<"regulation_docs"> | string | null
    url?: StringNullableFilter<"regulation_docs"> | string | null
    content?: StringNullableFilter<"regulation_docs"> | string | null
    created_at?: DateTimeFilter<"regulation_docs"> | Date | string
    updated_at?: DateTimeFilter<"regulation_docs"> | Date | string
  }

  export type regulation_docsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type regulation_docsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: regulation_docsWhereInput | regulation_docsWhereInput[]
    OR?: regulation_docsWhereInput[]
    NOT?: regulation_docsWhereInput | regulation_docsWhereInput[]
    category?: StringFilter<"regulation_docs"> | string
    excerpt?: StringNullableFilter<"regulation_docs"> | string | null
    url?: StringNullableFilter<"regulation_docs"> | string | null
    content?: StringNullableFilter<"regulation_docs"> | string | null
    created_at?: DateTimeFilter<"regulation_docs"> | Date | string
    updated_at?: DateTimeFilter<"regulation_docs"> | Date | string
  }, "id" | "title">

  export type regulation_docsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: regulation_docsCountOrderByAggregateInput
    _max?: regulation_docsMaxOrderByAggregateInput
    _min?: regulation_docsMinOrderByAggregateInput
  }

  export type regulation_docsScalarWhereWithAggregatesInput = {
    AND?: regulation_docsScalarWhereWithAggregatesInput | regulation_docsScalarWhereWithAggregatesInput[]
    OR?: regulation_docsScalarWhereWithAggregatesInput[]
    NOT?: regulation_docsScalarWhereWithAggregatesInput | regulation_docsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"regulation_docs"> | string
    title?: StringWithAggregatesFilter<"regulation_docs"> | string
    category?: StringWithAggregatesFilter<"regulation_docs"> | string
    excerpt?: StringNullableWithAggregatesFilter<"regulation_docs"> | string | null
    url?: StringNullableWithAggregatesFilter<"regulation_docs"> | string | null
    content?: StringNullableWithAggregatesFilter<"regulation_docs"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"regulation_docs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"regulation_docs"> | Date | string
  }

  export type emergency_reportsCreateInput = {
    id?: string
    report_number: string
    timestamp?: Date | string | null
    caller_info?: string | null
    caller_phone?: string | null
    location?: string | null
    emergency_type?: string | null
    urgency_level?: number | null
    description?: string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    voice_file_path?: string | null
    response_sent?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    whatsapp_conversations?: whatsapp_conversationsCreateNestedManyWithoutEmergency_reportsInput
  }

  export type emergency_reportsUncheckedCreateInput = {
    id?: string
    report_number: string
    timestamp?: Date | string | null
    caller_info?: string | null
    caller_phone?: string | null
    location?: string | null
    emergency_type?: string | null
    urgency_level?: number | null
    description?: string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    voice_file_path?: string | null
    response_sent?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    whatsapp_conversations?: whatsapp_conversationsUncheckedCreateNestedManyWithoutEmergency_reportsInput
  }

  export type emergency_reportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_number?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller_info?: NullableStringFieldUpdateOperationsInput | string | null
    caller_phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_type?: NullableStringFieldUpdateOperationsInput | string | null
    urgency_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    voice_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    response_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_conversations?: whatsapp_conversationsUpdateManyWithoutEmergency_reportsNestedInput
  }

  export type emergency_reportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_number?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller_info?: NullableStringFieldUpdateOperationsInput | string | null
    caller_phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_type?: NullableStringFieldUpdateOperationsInput | string | null
    urgency_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    voice_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    response_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_conversations?: whatsapp_conversationsUncheckedUpdateManyWithoutEmergency_reportsNestedInput
  }

  export type emergency_reportsCreateManyInput = {
    id?: string
    report_number: string
    timestamp?: Date | string | null
    caller_info?: string | null
    caller_phone?: string | null
    location?: string | null
    emergency_type?: string | null
    urgency_level?: number | null
    description?: string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    voice_file_path?: string | null
    response_sent?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emergency_reportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_number?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller_info?: NullableStringFieldUpdateOperationsInput | string | null
    caller_phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_type?: NullableStringFieldUpdateOperationsInput | string | null
    urgency_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    voice_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    response_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emergency_reportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_number?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller_info?: NullableStringFieldUpdateOperationsInput | string | null
    caller_phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_type?: NullableStringFieldUpdateOperationsInput | string | null
    urgency_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    voice_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    response_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_conversationsCreateInput = {
    id?: string
    phone_number: string
    message_sid?: string | null
    message_body?: string | null
    message_type?: string | null
    media_url?: string | null
    timestamp?: Date | string | null
    emergency_reports?: emergency_reportsCreateNestedOneWithoutWhatsapp_conversationsInput
  }

  export type whatsapp_conversationsUncheckedCreateInput = {
    id?: string
    phone_number: string
    message_sid?: string | null
    message_body?: string | null
    message_type?: string | null
    media_url?: string | null
    timestamp?: Date | string | null
    report_id?: string | null
  }

  export type whatsapp_conversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emergency_reports?: emergency_reportsUpdateOneWithoutWhatsapp_conversationsNestedInput
  }

  export type whatsapp_conversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type whatsapp_conversationsCreateManyInput = {
    id?: string
    phone_number: string
    message_sid?: string | null
    message_body?: string | null
    message_type?: string | null
    media_url?: string | null
    timestamp?: Date | string | null
    report_id?: string | null
  }

  export type whatsapp_conversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_conversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type regulation_docsCreateInput = {
    id?: string
    title: string
    category: string
    excerpt?: string | null
    url?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type regulation_docsUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    excerpt?: string | null
    url?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type regulation_docsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regulation_docsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regulation_docsCreateManyInput = {
    id?: string
    title: string
    category: string
    excerpt?: string | null
    url?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type regulation_docsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regulation_docsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Whatsapp_conversationsListRelationFilter = {
    every?: whatsapp_conversationsWhereInput
    some?: whatsapp_conversationsWhereInput
    none?: whatsapp_conversationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type whatsapp_conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type emergency_reportsCountOrderByAggregateInput = {
    id?: SortOrder
    report_number?: SortOrder
    timestamp?: SortOrder
    caller_info?: SortOrder
    caller_phone?: SortOrder
    location?: SortOrder
    emergency_type?: SortOrder
    urgency_level?: SortOrder
    description?: SortOrder
    structured_data?: SortOrder
    fotoUrl?: SortOrder
    ai_recommendations?: SortOrder
    status?: SortOrder
    voice_file_path?: SortOrder
    response_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type emergency_reportsAvgOrderByAggregateInput = {
    urgency_level?: SortOrder
  }

  export type emergency_reportsMaxOrderByAggregateInput = {
    id?: SortOrder
    report_number?: SortOrder
    timestamp?: SortOrder
    caller_info?: SortOrder
    caller_phone?: SortOrder
    location?: SortOrder
    emergency_type?: SortOrder
    urgency_level?: SortOrder
    description?: SortOrder
    fotoUrl?: SortOrder
    status?: SortOrder
    voice_file_path?: SortOrder
    response_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type emergency_reportsMinOrderByAggregateInput = {
    id?: SortOrder
    report_number?: SortOrder
    timestamp?: SortOrder
    caller_info?: SortOrder
    caller_phone?: SortOrder
    location?: SortOrder
    emergency_type?: SortOrder
    urgency_level?: SortOrder
    description?: SortOrder
    fotoUrl?: SortOrder
    status?: SortOrder
    voice_file_path?: SortOrder
    response_sent?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type emergency_reportsSumOrderByAggregateInput = {
    urgency_level?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type Emergency_reportsNullableScalarRelationFilter = {
    is?: emergency_reportsWhereInput | null
    isNot?: emergency_reportsWhereInput | null
  }

  export type whatsapp_conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    message_sid?: SortOrder
    message_body?: SortOrder
    message_type?: SortOrder
    media_url?: SortOrder
    timestamp?: SortOrder
    report_id?: SortOrder
  }

  export type whatsapp_conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    message_sid?: SortOrder
    message_body?: SortOrder
    message_type?: SortOrder
    media_url?: SortOrder
    timestamp?: SortOrder
    report_id?: SortOrder
  }

  export type whatsapp_conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    message_sid?: SortOrder
    message_body?: SortOrder
    message_type?: SortOrder
    media_url?: SortOrder
    timestamp?: SortOrder
    report_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type regulation_docsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    excerpt?: SortOrder
    url?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type regulation_docsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    excerpt?: SortOrder
    url?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type regulation_docsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    excerpt?: SortOrder
    url?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type whatsapp_conversationsCreateNestedManyWithoutEmergency_reportsInput = {
    create?: XOR<whatsapp_conversationsCreateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput> | whatsapp_conversationsCreateWithoutEmergency_reportsInput[] | whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput[]
    connectOrCreate?: whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput | whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput[]
    createMany?: whatsapp_conversationsCreateManyEmergency_reportsInputEnvelope
    connect?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
  }

  export type whatsapp_conversationsUncheckedCreateNestedManyWithoutEmergency_reportsInput = {
    create?: XOR<whatsapp_conversationsCreateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput> | whatsapp_conversationsCreateWithoutEmergency_reportsInput[] | whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput[]
    connectOrCreate?: whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput | whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput[]
    createMany?: whatsapp_conversationsCreateManyEmergency_reportsInputEnvelope
    connect?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type whatsapp_conversationsUpdateManyWithoutEmergency_reportsNestedInput = {
    create?: XOR<whatsapp_conversationsCreateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput> | whatsapp_conversationsCreateWithoutEmergency_reportsInput[] | whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput[]
    connectOrCreate?: whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput | whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput[]
    upsert?: whatsapp_conversationsUpsertWithWhereUniqueWithoutEmergency_reportsInput | whatsapp_conversationsUpsertWithWhereUniqueWithoutEmergency_reportsInput[]
    createMany?: whatsapp_conversationsCreateManyEmergency_reportsInputEnvelope
    set?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    disconnect?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    delete?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    connect?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    update?: whatsapp_conversationsUpdateWithWhereUniqueWithoutEmergency_reportsInput | whatsapp_conversationsUpdateWithWhereUniqueWithoutEmergency_reportsInput[]
    updateMany?: whatsapp_conversationsUpdateManyWithWhereWithoutEmergency_reportsInput | whatsapp_conversationsUpdateManyWithWhereWithoutEmergency_reportsInput[]
    deleteMany?: whatsapp_conversationsScalarWhereInput | whatsapp_conversationsScalarWhereInput[]
  }

  export type whatsapp_conversationsUncheckedUpdateManyWithoutEmergency_reportsNestedInput = {
    create?: XOR<whatsapp_conversationsCreateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput> | whatsapp_conversationsCreateWithoutEmergency_reportsInput[] | whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput[]
    connectOrCreate?: whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput | whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput[]
    upsert?: whatsapp_conversationsUpsertWithWhereUniqueWithoutEmergency_reportsInput | whatsapp_conversationsUpsertWithWhereUniqueWithoutEmergency_reportsInput[]
    createMany?: whatsapp_conversationsCreateManyEmergency_reportsInputEnvelope
    set?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    disconnect?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    delete?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    connect?: whatsapp_conversationsWhereUniqueInput | whatsapp_conversationsWhereUniqueInput[]
    update?: whatsapp_conversationsUpdateWithWhereUniqueWithoutEmergency_reportsInput | whatsapp_conversationsUpdateWithWhereUniqueWithoutEmergency_reportsInput[]
    updateMany?: whatsapp_conversationsUpdateManyWithWhereWithoutEmergency_reportsInput | whatsapp_conversationsUpdateManyWithWhereWithoutEmergency_reportsInput[]
    deleteMany?: whatsapp_conversationsScalarWhereInput | whatsapp_conversationsScalarWhereInput[]
  }

  export type emergency_reportsCreateNestedOneWithoutWhatsapp_conversationsInput = {
    create?: XOR<emergency_reportsCreateWithoutWhatsapp_conversationsInput, emergency_reportsUncheckedCreateWithoutWhatsapp_conversationsInput>
    connectOrCreate?: emergency_reportsCreateOrConnectWithoutWhatsapp_conversationsInput
    connect?: emergency_reportsWhereUniqueInput
  }

  export type emergency_reportsUpdateOneWithoutWhatsapp_conversationsNestedInput = {
    create?: XOR<emergency_reportsCreateWithoutWhatsapp_conversationsInput, emergency_reportsUncheckedCreateWithoutWhatsapp_conversationsInput>
    connectOrCreate?: emergency_reportsCreateOrConnectWithoutWhatsapp_conversationsInput
    upsert?: emergency_reportsUpsertWithoutWhatsapp_conversationsInput
    disconnect?: emergency_reportsWhereInput | boolean
    delete?: emergency_reportsWhereInput | boolean
    connect?: emergency_reportsWhereUniqueInput
    update?: XOR<XOR<emergency_reportsUpdateToOneWithWhereWithoutWhatsapp_conversationsInput, emergency_reportsUpdateWithoutWhatsapp_conversationsInput>, emergency_reportsUncheckedUpdateWithoutWhatsapp_conversationsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type whatsapp_conversationsCreateWithoutEmergency_reportsInput = {
    id?: string
    phone_number: string
    message_sid?: string | null
    message_body?: string | null
    message_type?: string | null
    media_url?: string | null
    timestamp?: Date | string | null
  }

  export type whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput = {
    id?: string
    phone_number: string
    message_sid?: string | null
    message_body?: string | null
    message_type?: string | null
    media_url?: string | null
    timestamp?: Date | string | null
  }

  export type whatsapp_conversationsCreateOrConnectWithoutEmergency_reportsInput = {
    where: whatsapp_conversationsWhereUniqueInput
    create: XOR<whatsapp_conversationsCreateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput>
  }

  export type whatsapp_conversationsCreateManyEmergency_reportsInputEnvelope = {
    data: whatsapp_conversationsCreateManyEmergency_reportsInput | whatsapp_conversationsCreateManyEmergency_reportsInput[]
    skipDuplicates?: boolean
  }

  export type whatsapp_conversationsUpsertWithWhereUniqueWithoutEmergency_reportsInput = {
    where: whatsapp_conversationsWhereUniqueInput
    update: XOR<whatsapp_conversationsUpdateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedUpdateWithoutEmergency_reportsInput>
    create: XOR<whatsapp_conversationsCreateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedCreateWithoutEmergency_reportsInput>
  }

  export type whatsapp_conversationsUpdateWithWhereUniqueWithoutEmergency_reportsInput = {
    where: whatsapp_conversationsWhereUniqueInput
    data: XOR<whatsapp_conversationsUpdateWithoutEmergency_reportsInput, whatsapp_conversationsUncheckedUpdateWithoutEmergency_reportsInput>
  }

  export type whatsapp_conversationsUpdateManyWithWhereWithoutEmergency_reportsInput = {
    where: whatsapp_conversationsScalarWhereInput
    data: XOR<whatsapp_conversationsUpdateManyMutationInput, whatsapp_conversationsUncheckedUpdateManyWithoutEmergency_reportsInput>
  }

  export type whatsapp_conversationsScalarWhereInput = {
    AND?: whatsapp_conversationsScalarWhereInput | whatsapp_conversationsScalarWhereInput[]
    OR?: whatsapp_conversationsScalarWhereInput[]
    NOT?: whatsapp_conversationsScalarWhereInput | whatsapp_conversationsScalarWhereInput[]
    id?: UuidFilter<"whatsapp_conversations"> | string
    phone_number?: StringFilter<"whatsapp_conversations"> | string
    message_sid?: StringNullableFilter<"whatsapp_conversations"> | string | null
    message_body?: StringNullableFilter<"whatsapp_conversations"> | string | null
    message_type?: StringNullableFilter<"whatsapp_conversations"> | string | null
    media_url?: StringNullableFilter<"whatsapp_conversations"> | string | null
    timestamp?: DateTimeNullableFilter<"whatsapp_conversations"> | Date | string | null
    report_id?: UuidNullableFilter<"whatsapp_conversations"> | string | null
  }

  export type emergency_reportsCreateWithoutWhatsapp_conversationsInput = {
    id?: string
    report_number: string
    timestamp?: Date | string | null
    caller_info?: string | null
    caller_phone?: string | null
    location?: string | null
    emergency_type?: string | null
    urgency_level?: number | null
    description?: string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    voice_file_path?: string | null
    response_sent?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emergency_reportsUncheckedCreateWithoutWhatsapp_conversationsInput = {
    id?: string
    report_number: string
    timestamp?: Date | string | null
    caller_info?: string | null
    caller_phone?: string | null
    location?: string | null
    emergency_type?: string | null
    urgency_level?: number | null
    description?: string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    voice_file_path?: string | null
    response_sent?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emergency_reportsCreateOrConnectWithoutWhatsapp_conversationsInput = {
    where: emergency_reportsWhereUniqueInput
    create: XOR<emergency_reportsCreateWithoutWhatsapp_conversationsInput, emergency_reportsUncheckedCreateWithoutWhatsapp_conversationsInput>
  }

  export type emergency_reportsUpsertWithoutWhatsapp_conversationsInput = {
    update: XOR<emergency_reportsUpdateWithoutWhatsapp_conversationsInput, emergency_reportsUncheckedUpdateWithoutWhatsapp_conversationsInput>
    create: XOR<emergency_reportsCreateWithoutWhatsapp_conversationsInput, emergency_reportsUncheckedCreateWithoutWhatsapp_conversationsInput>
    where?: emergency_reportsWhereInput
  }

  export type emergency_reportsUpdateToOneWithWhereWithoutWhatsapp_conversationsInput = {
    where?: emergency_reportsWhereInput
    data: XOR<emergency_reportsUpdateWithoutWhatsapp_conversationsInput, emergency_reportsUncheckedUpdateWithoutWhatsapp_conversationsInput>
  }

  export type emergency_reportsUpdateWithoutWhatsapp_conversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_number?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller_info?: NullableStringFieldUpdateOperationsInput | string | null
    caller_phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_type?: NullableStringFieldUpdateOperationsInput | string | null
    urgency_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    voice_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    response_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emergency_reportsUncheckedUpdateWithoutWhatsapp_conversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_number?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller_info?: NullableStringFieldUpdateOperationsInput | string | null
    caller_phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_type?: NullableStringFieldUpdateOperationsInput | string | null
    urgency_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structured_data?: NullableJsonNullValueInput | InputJsonValue
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ai_recommendations?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    voice_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    response_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_conversationsCreateManyEmergency_reportsInput = {
    id?: string
    phone_number: string
    message_sid?: string | null
    message_body?: string | null
    message_type?: string | null
    media_url?: string | null
    timestamp?: Date | string | null
  }

  export type whatsapp_conversationsUpdateWithoutEmergency_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_conversationsUncheckedUpdateWithoutEmergency_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type whatsapp_conversationsUncheckedUpdateManyWithoutEmergency_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    message_sid?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: NullableStringFieldUpdateOperationsInput | string | null
    message_type?: NullableStringFieldUpdateOperationsInput | string | null
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}