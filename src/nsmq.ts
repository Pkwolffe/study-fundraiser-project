import {
  FundWithdrawn as FundWithdrawnEvent,
  PaymentMade as PaymentMadeEvent
} from "../generated/NSMQ/NSMQ"
import { FundWithdrawn, PaymentMade } from "../generated/schema"

export function handleFundWithdrawn(event: FundWithdrawnEvent): void {
  let entity = new FundWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMade(event: PaymentMadeEvent): void {
  let entity = new PaymentMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.participant = event.params.participant
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
