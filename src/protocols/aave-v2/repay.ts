import { LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type RepayFormData = LogicFormData<protocols.aavev2.RepayLogicFields>;

export function newRepayFormData(
  address: string,
  input: common.TokenAmountObject,
  interestRateMode: protocols.aavev2.InterestRateMode
): RepayFormData {
  return { rid: protocols.aavev2.RepayLogic.rid, fields: { address, input, interestRateMode } };
}
