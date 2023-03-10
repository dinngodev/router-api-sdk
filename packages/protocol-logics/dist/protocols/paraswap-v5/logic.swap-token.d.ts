import { BuildSwapTxInput } from '@paraswap/sdk';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SwapTokenLogicParams = core.TokenToTokenExactInParams;
export type SwapTokenLogicFields = core.TokenToTokenFields<Pick<BuildSwapTxInput, 'partner' | 'partnerAddress'>>;
export type SwapTokenLogicOptions = Pick<core.GlobalOptions, 'account' | 'slippage'>;
export declare class SwapTokenLogic extends core.Logic implements core.LogicInterfaceGetPrice {
    static readonly supportedChainIds: common.ChainId[];
    get sdk(): import("@paraswap/sdk").SimpleFetchSDK;
    getPrice(params: SwapTokenLogicParams): Promise<common.TokenAmount>;
    getLogic(fields: SwapTokenLogicFields, options: SwapTokenLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
