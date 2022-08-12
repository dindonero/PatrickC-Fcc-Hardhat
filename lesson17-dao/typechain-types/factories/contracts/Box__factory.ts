/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Box, BoxInterface } from "../../contracts/Box";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
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
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6105c48061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780636057361d1461007a578063715018a6146100965780638da5cb5b146100a0578063f2fde38b146100be575b600080fd5b6100646100da565b6040516100719190610351565b60405180910390f35b610094600480360381019061008f919061039d565b6100e4565b005b61009e61012d565b005b6100a8610141565b6040516100b5919061040b565b60405180910390f35b6100d860048036038101906100d39190610452565b61016a565b005b6000600154905090565b6100ec6101ee565b806001819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59816040516101229190610351565b60405180910390a150565b6101356101ee565b61013f600061026c565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101726101ee565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156101e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d990610502565b60405180910390fd5b6101eb8161026c565b50565b6101f6610330565b73ffffffffffffffffffffffffffffffffffffffff16610214610141565b73ffffffffffffffffffffffffffffffffffffffff161461026a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102619061056e565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b61034b81610338565b82525050565b60006020820190506103666000830184610342565b92915050565b600080fd5b61037a81610338565b811461038557600080fd5b50565b60008135905061039781610371565b92915050565b6000602082840312156103b3576103b261036c565b5b60006103c184828501610388565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103f5826103ca565b9050919050565b610405816103ea565b82525050565b600060208201905061042060008301846103fc565b92915050565b61042f816103ea565b811461043a57600080fd5b50565b60008135905061044c81610426565b92915050565b6000602082840312156104685761046761036c565b5b60006104768482850161043d565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006104ec60268361047f565b91506104f782610490565b604082019050919050565b6000602082019050818103600083015261051b816104df565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061055860208361047f565b915061056382610522565b602082019050919050565b600060208201905081810360008301526105878161054b565b905091905056fea264697066735822122026996dec3900d2ed5576f1ba25f9568a62efe6c53cbd8dd04396b4aac0e9871664736f6c63430008090033";

type BoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Box> {
    return super.deploy(overrides || {}) as Promise<Box>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Box {
    return super.attach(address) as Box;
  }
  override connect(signer: Signer): Box__factory {
    return super.connect(signer) as Box__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new utils.Interface(_abi) as BoxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Box {
    return new Contract(address, _abi, signerOrProvider) as Box;
  }
}
