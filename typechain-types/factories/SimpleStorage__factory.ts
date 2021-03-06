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
  "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b6100556004803603810190610050919061009d565b610075565b005b61005f61007f565b60405161006c91906100d9565b60405180910390f35b8060008190555050565b60008054905090565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220034d95764f0aaab50e00ed73c0e616f08ee905f07cc00cc5f5d05b8dcde973ab64736f6c63430008070033";

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
