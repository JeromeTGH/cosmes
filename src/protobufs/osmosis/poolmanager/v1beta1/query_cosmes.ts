// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/query.proto (package osmosis.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AllPoolsRequest, AllPoolsResponse, EstimateSinglePoolSwapExactAmountInRequest, EstimateSinglePoolSwapExactAmountOutRequest, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInWithPrimitiveTypesRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutWithPrimitiveTypesRequest, EstimateTradeBasedOnPriceImpactRequest, EstimateTradeBasedOnPriceImpactResponse, ListPoolsByDenomRequest, ListPoolsByDenomResponse, NumPoolsRequest, NumPoolsResponse, ParamsRequest, ParamsResponse, PoolRequest, PoolResponse, SpotPriceRequest, SpotPriceResponse, TotalLiquidityRequest, TotalLiquidityResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse, TotalVolumeForPoolRequest, TotalVolumeForPoolResponse, TradingPairTakerFeeRequest, TradingPairTakerFeeResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.poolmanager.v1beta1.Query";

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

/**
 * Estimates swap amount out given in.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountIn
 */
export const QueryEstimateSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountIn",
  Request: EstimateSwapExactAmountInRequest,
  Response: EstimateSwapExactAmountInResponse,
} as const;

/**
 * EstimateSwapExactAmountInWithPrimitiveTypes is an alternative query for
 * EstimateSwapExactAmountIn. Supports query via GRPC-Gateway by using
 * primitive types instead of repeated structs. Each index in the
 * routes_pool_id field corresponds to the respective routes_token_out_denom
 * value, thus they are required to have the same length and are grouped
 * together as pairs.
 * example usage:
 * http://0.0.0.0:1317/osmosis/poolmanager/v1beta1/1/estimate/
 * swap_exact_amount_in_with_primitive_types?token_in=100000stake&routes_token_out_denom=uatom
 * &routes_token_out_denom=uion&routes_pool_id=1&routes_pool_id=2
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountInWithPrimitiveTypes
 */
export const QueryEstimateSwapExactAmountInWithPrimitiveTypesService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountInWithPrimitiveTypes",
  Request: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
  Response: EstimateSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSinglePoolSwapExactAmountIn
 */
export const QueryEstimateSinglePoolSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "EstimateSinglePoolSwapExactAmountIn",
  Request: EstimateSinglePoolSwapExactAmountInRequest,
  Response: EstimateSwapExactAmountInResponse,
} as const;

/**
 * Estimates swap amount in given out.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountOut
 */
export const QueryEstimateSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountOut",
  Request: EstimateSwapExactAmountOutRequest,
  Response: EstimateSwapExactAmountOutResponse,
} as const;

/**
 * Estimates swap amount in given out.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSwapExactAmountOutWithPrimitiveTypes
 */
export const QueryEstimateSwapExactAmountOutWithPrimitiveTypesService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountOutWithPrimitiveTypes",
  Request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
  Response: EstimateSwapExactAmountOutResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateSinglePoolSwapExactAmountOut
 */
export const QueryEstimateSinglePoolSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "EstimateSinglePoolSwapExactAmountOut",
  Request: EstimateSinglePoolSwapExactAmountOutRequest,
  Response: EstimateSwapExactAmountOutResponse,
} as const;

/**
 * Returns the total number of pools existing in Osmosis.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.NumPools
 */
export const QueryNumPoolsService = {
  typeName: TYPE_NAME,
  method: "NumPools",
  Request: NumPoolsRequest,
  Response: NumPoolsResponse,
} as const;

/**
 * Pool returns the Pool specified by the pool id
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: PoolRequest,
  Response: PoolResponse,
} as const;

/**
 * AllPools returns all pools on the Osmosis chain sorted by IDs.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.AllPools
 */
export const QueryAllPoolsService = {
  typeName: TYPE_NAME,
  method: "AllPools",
  Request: AllPoolsRequest,
  Response: AllPoolsResponse,
} as const;

/**
 * ListPoolsByDenom return all pools by denom
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.ListPoolsByDenom
 */
export const QueryListPoolsByDenomService = {
  typeName: TYPE_NAME,
  method: "ListPoolsByDenom",
  Request: ListPoolsByDenomRequest,
  Response: ListPoolsByDenomResponse,
} as const;

/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.SpotPrice
 */
export const QuerySpotPriceService = {
  typeName: TYPE_NAME,
  method: "SpotPrice",
  Request: SpotPriceRequest,
  Response: SpotPriceResponse,
} as const;

/**
 * TotalPoolLiquidity returns the total liquidity of the specified pool.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalPoolLiquidity
 */
export const QueryTotalPoolLiquidityService = {
  typeName: TYPE_NAME,
  method: "TotalPoolLiquidity",
  Request: TotalPoolLiquidityRequest,
  Response: TotalPoolLiquidityResponse,
} as const;

/**
 * TotalLiquidity returns the total liquidity across all pools.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalLiquidity
 */
export const QueryTotalLiquidityService = {
  typeName: TYPE_NAME,
  method: "TotalLiquidity",
  Request: TotalLiquidityRequest,
  Response: TotalLiquidityResponse,
} as const;

/**
 * TotalVolumeForPool returns the total volume of the specified pool.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TotalVolumeForPool
 */
export const QueryTotalVolumeForPoolService = {
  typeName: TYPE_NAME,
  method: "TotalVolumeForPool",
  Request: TotalVolumeForPoolRequest,
  Response: TotalVolumeForPoolResponse,
} as const;

/**
 * TradingPairTakerFee returns the taker fee for a given set of denoms
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.TradingPairTakerFee
 */
export const QueryTradingPairTakerFeeService = {
  typeName: TYPE_NAME,
  method: "TradingPairTakerFee",
  Request: TradingPairTakerFeeRequest,
  Response: TradingPairTakerFeeResponse,
} as const;

/**
 * EstimateTradeBasedOnPriceImpact returns an estimated trade based on price
 * impact, if a trade cannot be estimated a 0 input and 0 output would be
 * returned.
 *
 * @generated from rpc osmosis.poolmanager.v1beta1.Query.EstimateTradeBasedOnPriceImpact
 */
export const QueryEstimateTradeBasedOnPriceImpactService = {
  typeName: TYPE_NAME,
  method: "EstimateTradeBasedOnPriceImpact",
  Request: EstimateTradeBasedOnPriceImpactRequest,
  Response: EstimateTradeBasedOnPriceImpactResponse,
} as const;

