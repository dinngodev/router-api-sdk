import { LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type BorrowFormData = LogicFormData<protocols.aavev2.BorrowLogicFields>;

export function newBorrowFormData(
  output: common.TokenAmountObject,
  interestRateMode: protocols.aavev2.InterestRateMode
): BorrowFormData {
  return { rid: protocols.aavev2.BorrowLogic.rid, fields: { output, interestRateMode } };
}
