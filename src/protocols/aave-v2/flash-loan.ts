import { FlashLoanFields, LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type FlashLoanFormData = LogicFormData<FlashLoanFields>;

export function newFlashLoanFormData(
  id: string,
  outputs: common.TokenAmountObject[],
  isLoan: boolean
): FlashLoanFormData {
  return { rid: protocols.aavev2.FlashLoanLogic.rid, fields: { id, outputs, isLoan } };
}
