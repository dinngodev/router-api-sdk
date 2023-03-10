import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type FlashLoanLogicFields = core.FlashLoanFields;
export declare class FlashLoanLogic extends core.Logic {
    static readonly supportedChainIds: common.ChainId[];
    getLogic(fields: FlashLoanLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
