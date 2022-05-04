/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleStorage, SimpleStorageInterface } from "../SimpleStorage";

const _abi = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061012f806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c14604f575b600080fd5b604d600480360381019060499190608f565b6069565b005b60556073565b6040516060919060c2565b60405180910390f35b8060008190555050565b60008054905090565b60008135905060898160e5565b92915050565b60006020828403121560a057600080fd5b600060ac84828501607c565b91505092915050565b60bc8160db565b82525050565b600060208201905060d5600083018460b5565b92915050565b6000819050919050565b60ec8160db565b811460f657600080fd5b5056fea2646970667358221220f6fcb1313ad2867132ff98c930263e68b9cf4ff0f411c7b863145b241fd4889664736f6c63430008040033";

type SimpleStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleStorage__factory extends ContractFactory {
  constructor(...args: SimpleStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleStorage";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleStorage> {
    return super.deploy(overrides || {}) as Promise<SimpleStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleStorage {
    return super.attach(address) as SimpleStorage;
  }
  connect(signer: Signer): SimpleStorage__factory {
    return super.connect(signer) as SimpleStorage__factory;
  }
  static readonly contractName: "SimpleStorage";
  public readonly contractName: "SimpleStorage";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleStorageInterface {
    return new utils.Interface(_abi) as SimpleStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleStorage {
    return new Contract(address, _abi, signerOrProvider) as SimpleStorage;
  }
}