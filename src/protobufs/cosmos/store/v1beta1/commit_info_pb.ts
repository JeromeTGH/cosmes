// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/store/v1beta1/commit_info.proto (package cosmos.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 *
 * Deprecated: Store v1 is deprecated as of v0.50.x, please use Store v2 types
 * instead.
 *
 * @generated from message cosmos.store.v1beta1.CommitInfo
 * @deprecated
 */
export class CommitInfo extends Message<CommitInfo> {
  /**
   * @generated from field: int64 version = 1;
   */
  version = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.store.v1beta1.StoreInfo store_infos = 2;
   */
  storeInfos: StoreInfo[] = [];

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<CommitInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.v1beta1.CommitInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "store_infos", kind: "message", T: StoreInfo, repeated: true },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitInfo {
    return new CommitInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitInfo {
    return new CommitInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitInfo {
    return new CommitInfo().fromJsonString(jsonString, options);
  }

  static equals(a: CommitInfo | PlainMessage<CommitInfo> | undefined, b: CommitInfo | PlainMessage<CommitInfo> | undefined): boolean {
    return proto3.util.equals(CommitInfo, a, b);
  }
}

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 *
 * Deprecated: Store v1 is deprecated as of v0.50.x, please use Store v2 types
 * instead.
 *
 * @generated from message cosmos.store.v1beta1.StoreInfo
 * @deprecated
 */
export class StoreInfo extends Message<StoreInfo> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: cosmos.store.v1beta1.CommitID commit_id = 2;
   */
  commitId?: CommitID;

  constructor(data?: PartialMessage<StoreInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.v1beta1.StoreInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "commit_id", kind: "message", T: CommitID },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreInfo {
    return new StoreInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreInfo {
    return new StoreInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreInfo {
    return new StoreInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StoreInfo | PlainMessage<StoreInfo> | undefined, b: StoreInfo | PlainMessage<StoreInfo> | undefined): boolean {
    return proto3.util.equals(StoreInfo, a, b);
  }
}

/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 *
 * Deprecated: Store v1 is deprecated as of v0.50.x, please use Store v2 types
 * instead.
 *
 * @generated from message cosmos.store.v1beta1.CommitID
 * @deprecated
 */
export class CommitID extends Message<CommitID> {
  /**
   * @generated from field: int64 version = 1;
   */
  version = protoInt64.zero;

  /**
   * @generated from field: bytes hash = 2;
   */
  hash = new Uint8Array(0);

  constructor(data?: PartialMessage<CommitID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.v1beta1.CommitID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitID {
    return new CommitID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitID {
    return new CommitID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitID {
    return new CommitID().fromJsonString(jsonString, options);
  }

  static equals(a: CommitID | PlainMessage<CommitID> | undefined, b: CommitID | PlainMessage<CommitID> | undefined): boolean {
    return proto3.util.equals(CommitID, a, b);
  }
}

