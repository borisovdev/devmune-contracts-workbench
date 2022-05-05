import { Contract } from 'ethers';

export function getSuccessfulDeployMessage(contractFileName: string, contract: Contract): string {
  return `Contract ${contractFileName} successful deployed on address ${contract.address}.\n`
}