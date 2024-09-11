import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { FundWithdrawn, PaymentMade } from "../generated/NSMQ/NSMQ"

export function createFundWithdrawnEvent(
  owner: Address,
  amount: BigInt
): FundWithdrawn {
  let fundWithdrawnEvent = changetype<FundWithdrawn>(newMockEvent())

  fundWithdrawnEvent.parameters = new Array()

  fundWithdrawnEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fundWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundWithdrawnEvent
}

export function createPaymentMadeEvent(
  participant: Address,
  amount: BigInt
): PaymentMade {
  let paymentMadeEvent = changetype<PaymentMade>(newMockEvent())

  paymentMadeEvent.parameters = new Array()

  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "participant",
      ethereum.Value.fromAddress(participant)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return paymentMadeEvent
}
