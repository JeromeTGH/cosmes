// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/tx.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { Height } from "../../../core/client/v1/client_pb.js";
import { Params } from "./transfer_pb.js";

/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from message ibc.applications.transfer.v1.MsgTransfer
 */
export class MsgTransfer extends Message<MsgTransfer> {
  /**
   * the port on which the packet will be sent
   *
   * @generated from field: string source_port = 1;
   */
  sourcePort = "";

  /**
   * the channel by which the packet will be sent
   *
   * @generated from field: string source_channel = 2;
   */
  sourceChannel = "";

  /**
   * the tokens to be transferred
   *
   * @generated from field: cosmos.base.v1beta1.Coin token = 3;
   */
  token?: Coin;

  /**
   * the sender address
   *
   * @generated from field: string sender = 4;
   */
  sender = "";

  /**
   * the recipient address on the destination chain
   *
   * @generated from field: string receiver = 5;
   */
  receiver = "";

  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   *
   * @generated from field: ibc.core.client.v1.Height timeout_height = 6;
   */
  timeoutHeight?: Height;

  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   *
   * @generated from field: uint64 timeout_timestamp = 7;
   */
  timeoutTimestamp = protoInt64.zero;

  /**
   * optional memo
   *
   * @generated from field: string memo = 8;
   */
  memo = "";

  constructor(data?: PartialMessage<MsgTransfer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.MsgTransfer";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "source_port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token", kind: "message", T: Coin },
    { no: 4, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "timeout_height", kind: "message", T: Height },
    { no: 7, name: "timeout_timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransfer {
    return new MsgTransfer().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransfer {
    return new MsgTransfer().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransfer {
    return new MsgTransfer().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTransfer | PlainMessage<MsgTransfer> | undefined, b: MsgTransfer | PlainMessage<MsgTransfer> | undefined): boolean {
    return proto3.util.equals(MsgTransfer, a, b);
  }
}

/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 *
 * @generated from message ibc.applications.transfer.v1.MsgTransferResponse
 */
export class MsgTransferResponse extends Message<MsgTransferResponse> {
  /**
   * sequence number of the transfer packet sent
   *
   * @generated from field: uint64 sequence = 1;
   */
  sequence = protoInt64.zero;

  constructor(data?: PartialMessage<MsgTransferResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.MsgTransferResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferResponse {
    return new MsgTransferResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferResponse {
    return new MsgTransferResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferResponse {
    return new MsgTransferResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTransferResponse | PlainMessage<MsgTransferResponse> | undefined, b: MsgTransferResponse | PlainMessage<MsgTransferResponse> | undefined): boolean {
    return proto3.util.equals(MsgTransferResponse, a, b);
  }
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message ibc.applications.transfer.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * signer address
   *
   * @generated from field: string signer = 1;
   */
  signer = "";

  /**
   * params defines the transfer parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: ibc.applications.transfer.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message ibc.applications.transfer.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

