import * as common from '@composable-router/common';
export declare const faucetMap: Record<number, string>;
export declare function claimToken(chainId: number, recepient: string, tokenOrAddress: common.TokenOrAddress, amount: string): Promise<void>;
