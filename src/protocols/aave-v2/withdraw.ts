import { LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type WithdrawFormData = LogicFormData<protocols.aavev2.WithdrawLogicFields>;

export function newWithdrawFormData(
  input: common.TokenAmountObject,
  output: common.TokenAmountObject
): WithdrawFormData {
  return { rid: protocols.aavev2.WithdrawLogic.rid, fields: { input, output } };
}
