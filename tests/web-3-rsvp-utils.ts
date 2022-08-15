import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ConfirmedAttendee,
  DepositPaidOut,
  NewEventCreated,
  NewRSVP
} from "../generated/web3rsvp/web3rsvp"

export function createConfirmedAttendeeEvent(
  eventId: Bytes,
  attendee: Address
): ConfirmedAttendee {
  let confirmedAttendeeEvent = changetype<ConfirmedAttendee>(newMockEvent())

  confirmedAttendeeEvent.parameters = new Array()

  confirmedAttendeeEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )
  confirmedAttendeeEvent.parameters.push(
    new ethereum.EventParam("attendee", ethereum.Value.fromAddress(attendee))
  )

  return confirmedAttendeeEvent
}

export function createDepositPaidOutEvent(eventId: Bytes): DepositPaidOut {
  let depositPaidOutEvent = changetype<DepositPaidOut>(newMockEvent())

  depositPaidOutEvent.parameters = new Array()

  depositPaidOutEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )

  return depositPaidOutEvent
}

export function createNewEventCreatedEvent(
  eventId: Bytes,
  eventDataCID: string,
  creatorAddress: Address,
  eventTimestamp: BigInt,
  deposit: BigInt,
  maxAttendees: BigInt
): NewEventCreated {
  let newEventCreatedEvent = changetype<NewEventCreated>(newMockEvent())

  newEventCreatedEvent.parameters = new Array()

  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventDataCID",
      ethereum.Value.fromString(eventDataCID)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorAddress",
      ethereum.Value.fromAddress(creatorAddress)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventTimestamp",
      ethereum.Value.fromUnsignedBigInt(eventTimestamp)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deposit",
      ethereum.Value.fromUnsignedBigInt(deposit)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxAttendees",
      ethereum.Value.fromUnsignedBigInt(maxAttendees)
    )
  )

  return newEventCreatedEvent
}

export function createNewRSVPEvent(eventId: Bytes, attendee: Address): NewRSVP {
  let newRsvpEvent = changetype<NewRSVP>(newMockEvent())

  newRsvpEvent.parameters = new Array()

  newRsvpEvent.parameters.push(
    new ethereum.EventParam("eventId", ethereum.Value.fromFixedBytes(eventId))
  )
  newRsvpEvent.parameters.push(
    new ethereum.EventParam("attendee", ethereum.Value.fromAddress(attendee))
  )

  return newRsvpEvent
}
