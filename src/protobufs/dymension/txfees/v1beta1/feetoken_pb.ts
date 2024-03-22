// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/feetoken.proto (package dymensionxyz.dymension.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have base denom as one of its assets.
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.FeeToken
 */
export class FeeToken extends Message<FeeToken> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: uint64 poolID = 2;
   */
  poolID = protoInt64.zero;

  constructor(data?: PartialMessage<FeeToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.FeeToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeToken {
    return new FeeToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeToken {
    return new FeeToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeToken {
    return new FeeToken().fromJsonString(jsonString, options);
  }

  static equals(a: FeeToken | PlainMessage<FeeToken> | undefined, b: FeeToken | PlainMessage<FeeToken> | undefined): boolean {
    return proto3.util.equals(FeeToken, a, b);
  }
}
