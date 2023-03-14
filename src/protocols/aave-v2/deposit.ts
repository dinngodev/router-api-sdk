import { LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type DepositFormData = LogicFormData<protocols.aavev2.DepositLogicFields>;

export function newDepositFormData(input: common.TokenAmountObject, output: common.TokenAmountObject): DepositFormData {
  return { rid: protocols.aavev2.DepositLogic.rid, fields: { input, output } };
}
